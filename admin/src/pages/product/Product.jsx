import PublishIcon from '@mui/icons-material/Publish'
import { useState, useContext, useEffect } from 'react'
import storage from "../../firebase"
import { Link, useLocation } from 'react-router-dom'
import { updateProduct } from '../../context/productContext/apiCalls'
import { ProductContext } from '../../context/productContext/ProductContext'

import './product.scss'

const Product = () => {

    const location = useLocation()
    const product = location.product
    const [imgUpdate, setImgUpdate] = useState(null)
    const [productUpdated, setProductUpdated] = useState(null)
    const [uploaded, setUploaded] = useState(0)
    const { dispatch } = useContext(ProductContext)


    useEffect(() => {
        
        return () => {
            imgUpdate && URL.revokeObjectURL(imgUpdate.preview)
        }
    }, [imgUpdate])

    const handlePreviewImg = (e) => {

        const file = e.target.files[0]
        file && (file.preview = URL.createObjectURL(file))
        setImgUpdate(file)
    }

    const handleChange = (e) => {

        const value = e.target.value
        setProductUpdated({ ...productUpdated, [e.target.name]: value })
    }

    const upload = (items) => {
        items.forEach((item) => {

            const fileName = new Date().getTime() + item.label + item.file.name
            const uploadTask = storage.ref(`/items/${fileName}`).put(item.file)
            uploadTask.on('state_changed', (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                console.log('Upload is ' + progress + ' % done.') 
            }, err => {console.log(err)}, () => {
                uploadTask.snapshot.ref.getDownloadURL().then((url) => {
                    setProductUpdated(prev => {
                        return {...prev, [item.label]:url }
                    })

                    setUploaded((prev) => prev + 1)
                })
            })
        })
    }

    const handleUpload = (e) => {
        e.preventDefault()
        upload([
            { file: imgUpdate, label: "img" },
        ])
    }
  
    const handleSubmit = (e) => {
        e.preventDefault()
        updateProduct(product._id , productUpdated, dispatch)
    }


    return (
        <div className="product">
            <div className="productTitleContainer">
                <h1 className="productTitle">Th??ng tin s???n ph???m</h1>
                <Link to="/newProduct">
                    <button className="productCreateButton">T???o m???i</button>
                </Link>
            </div>

            <div className="productTop">

                <div className="productTopRight">
                    <div className="productInfoTop">
                        <img src={product ? product.img : 'https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'} alt="" className="productInfoImg" />
                        <span className="productName">{product ? product.title : '...'}</span>
                    </div>

                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <span className="productInfoKey">Id: </span>
                            <span className="productInfoValue">{product ? product._id : '...'}</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">Chi ti???t s???n ph???m: </span>
                            <span className="productInfoValue">{product ? product.desc : '...'}</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">Gi?? s???n ph???m: </span>
                            <span className="productInfoValue">{product ? product.price : '...'}</span>
                        </div>
                    </div>
                </div>

            </div>
            
            <div className="productBottom">
                <form className="productForm">
                    <div className="productFormLeft">
                        <label>T??n s???n ph???m</label>
                        <input 
                            type="text" 
                            placeholder={product ? product.title : '...'} 
                            name="title"
                            onChange={handleChange}
                        />

                        <label>Gi?? s???n ph???m</label>
                        <input 
                            type="text" 
                            placeholder={product ? product.price : '...'} 
                            name="price"
                            onChange={handleChange}
                        />

                        <label>Chi ti???t s???n ph???m</label>
                        <input 
                            type="text" 
                            placeholder={product ? product.desc : '...'} 
                            name="desc"
                            onChange={handleChange}
                        />
                        <label>K??ch c???</label>
                        <input 
                            type="text" 
                            placeholder={product ? product.size : '...'} 
                            name="desc"
                            onChange={handleChange}
                        />
                        
                    </div>

                    <div className="productFormRight">
                        <div className="productUpload">
                            <img src={imgUpdate ? imgUpdate.preview : product.img} alt="" className="productUploadImg" />
                            <label htmlFor="file">
                                <PublishIcon/>
                            </label>
                            <input 
                                type="file" 
                                id="file" 
                                style={{display:"none"}} 
                                onChange={handlePreviewImg}
                            />
                        </div>
                        {uploaded === 1 ? (
                            <button className="productButton" onClick={handleSubmit}>
                                C???p nh???t
                            </button>
                            ) : (
                            <button className="productButton" onClick={handleUpload}>
                                T???i ???nh l??n
                            </button>
                        )}
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Product