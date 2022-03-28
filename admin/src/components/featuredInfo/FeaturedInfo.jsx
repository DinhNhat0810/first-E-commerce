import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'



import './featuredInfo.scss'

const FeaturedInfo = () => {
    return (
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">Revanue</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2,33</span>
                    <span className="featuredMoneyRate">
                        -11.6 <ArrowDownwardIcon className="featuredIcon negative"/>
                    </span>
                </div>
                <span className="sub">Compared to last month</span>

            </div>

            <div className="featuredItem">
                <span className="featuredTitle">Sales</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$4,57</span>
                    <span className="featuredMoneyRate">
                        -2.6 <ArrowDownwardIcon className="featuredIcon negative"/>
                    </span>
                </div>
                <span className="sub">Compared to last month</span>

            </div>

            <div className="featuredItem">
                <span className="featuredTitle">Cost</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$9,33</span>
                    <span className="featuredMoneyRate">
                        +3.6 <ArrowUpwardIcon className="featuredIcon"/>
                    </span>
                </div>
                <span className="featuredSub">Compared to last month</span>

            </div>
        </div>
    )
}   

export default FeaturedInfo