import "./home.css"
import TP_info from '../assets/20250810_TP.png';
import TC_info from '../assets/20250824_TC.png';
function Last_Act(){
    return(
        <div className="py-5 bg-white">
        <h1 class="text-center" >
            最新活動
        </h1>
        <div className="container my-5" > 
        <div className="row justify-content-center">
            <div className="col-md-4 d-flex justify-content-center">
            <div className="card" style={{ width: '20rem' }}>
                <img src={TP_info} className="card-img-top" alt="..." />
                <div className="card-body">
                <h5 className="card-title">DreamNest 親子體驗活動</h5>
                <h5 className="card-title">8/10 台北場</h5>
                <p className="card-text">
                    適合 13～18 歲青少年參加 <br/>
                    讓你零負擔踏出創客學習第一步
                </p>
                <a href="https://reurl.cc/8DLoD7" className="btn btn-primary">點我報名</a>
                </div>
            </div>
            </div>

            <div className="col-md-4 d-flex justify-content-center">
            <div className="card" style={{ width: '20rem' }}>
                <img src={TC_info} className="card-img-top" alt="..." />
                <div className="card-body">
                <h5 className="card-title">DreamNest 親子體驗活動</h5>
                <h5 className="card-title">8/24 台中場</h5>
                <p className="card-text">
                    適合 13～18 歲青少年參加<br/>
                    讓你零負擔踏出創客學習第一步</p>
                <a href="https://reurl.cc/8DLoD7" className="btn btn-primary">點我報名</a>
                </div>
            </div>
            </div>
           { /*
            <div className="col-md-4 d-flex justify-content-center">
            <div className="card" style={{ width: '20rem' }}>
                <img src={sp} className="card-img-top" alt="..." />
                <div className="card-body">
                <h5 className="card-title">DreamNest 親子體驗活動</h5>
                <p className="card-text">Some quick example text to build on the card title.</p>
                <a href="#" className="btn btn-primary">點我報名</a>
                </div>
            </div>
            </div>
             */}
          
        </div>
        </div>
        </div>
    )
}
export default Last_Act;