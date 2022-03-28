const router = require("express").Router()
const CryptoJS = require("crypto-js")
const User = require("../models/User")
const jwt = require("jsonwebtoken")

//REGISTER
router.post("/register", async (req, res) => {
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: CryptoJS.AES.encrypt(
        req.body.password,
        process.env.PASS_SEC
      ).toString(),
    })
  
    try {
      const savedUser = await newUser.save()
      res.status(201).json(savedUser)
    } catch (err) {
      res.status(500).json(err)
    }
})

//LOGIN
router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email })
        !user && res.status(401).json('Địa chỉ email không chính xác!')

        // Decrypt password
        var bytes  = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY)
        var originalTPassword = bytes.toString(CryptoJS.enc.Utf8)

        originalTPassword !== req.body.password && 
            res.status(401).json('Mật khẩu không chính xác!')

            const accessToken = jwt.sign({ id: user._id, isAdmin: user.isAdmin },
              process.env.SECRET_KEY,
              { expiresIn: '5d' }
            )
        const { password, ...infor } = user._doc
        
        res.status(200).json({...infor, accessToken})
        
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router