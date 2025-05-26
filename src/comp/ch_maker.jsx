import project from "../assets/project.svg";
import teacher from "../assets/IMG_9054 2.JPG"

function Ch_maker() {
  return (
    <section
      className="bg-white d-flex align-items-center py-5 mt-5"
      style={{ minHeight: "100vh" }}
    >
      <div className="container">
        <h1 className="text-center mb-5 fw-bold text-dark">
          為什麼我們堅持創客教育？
        </h1>

        {/* === 卡片區塊 === */}
        <div className="row g-4 justify-content-center">
          {[
            {
              title: "訓練問題解決能力",
              desc: "創客教育強調動手實作與專題解決，孩子在試錯中學習突破困難，建立解決問題的能力。",
            },
            {
              title: "啟發創造力",
              desc: "孩子可以從零開始設計屬於自己的作品，讓創意從想像轉化為具體成果。",
            },
            {
              title: "培養邏輯與跨領域思維",
              desc: "結合程式設計、數學、科學與設計思考，訓練孩子系統性分析與跨領域整合的能力。",
            },
            {
              title: "建立自信與成就感",
              desc: "從每一個動手完成的作品中獲得成就感，增強自我效能與學習動力。",
            },
            {
              title: "鼓勵團隊合作與溝通",
              desc: "透過共創與展示，孩子學會表達自己的想法、傾聽他人意見與分工合作。",
            },
          ].map((item, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div className="shadow rounded p-4 h-100 bg-white border-start border-3 border-info">
                <h5 className="fw-bold text-primary border-bottom pb-2 mb-3">
                  {item.title}
                </h5>
                <p className="text-secondary">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* === 教師照片區塊（加在卡片與底圖中間） === 
        <div className="text-center my-5">
          <img
            src={teacher}
            alt="教師與學生互動"
            className="img-fluid rounded shadow"
            style={{ maxWidth: "600px", width: "100%" }}
          />
          
        </div>
        */}

        {/* === project.svg 圖片區塊（底部） === */}
        <div
          style={{
            marginTop: "15rem",
            aspectRatio: "16/9",
            overflow: "hidden",
            width: "100%",
          }}
        >
          <img
            id="head_img"
            src={project}
            alt="創客專案插圖"
            className="img-fluid rounded shadow"
          />
        </div>
      </div>
    </section>
  );
}

export default Ch_maker;
