import maker from "../assets/maker.mp4";

function AiStatement() {
  const cardData = [
    {
      title: "自學能力",
      text: "在引導式學習中培養主動探索的習慣，讓孩子不怕學、不等人，勇於追問與實踐。",
      bg: "linear-gradient(135deg, #42a5f5, #26c6da)",
    },
    {
      title: "問題解決能力",
      text: "從動手實作中學會觀察、分析與修正錯誤，培養獨立思考與創造性解決問題的能力。",
      bg: "linear-gradient(135deg, #7e57c2, #64b5f6)",
    },
    {
      title: "團隊合作",
      text: "透過共創與發表學習互相溝通與協作，懂得傾聽、分工與為團隊負責。",
      bg: "linear-gradient(135deg, #26c6da, #00acc1)",
    },
  ];

  return (
    <div className="bg-light pt-5">
      <h1
        style={{
          textAlign: "center",
          fontWeight: "bold",
          color: "#007bbb",
          margin: "2rem 0",
        }}
      >
        <span role="img" aria-label="thinking">🤖</span>{" "}
        AI 時代來臨，我們該如何應對？
      </h1>

      <h3
        style={{
          color: "#007bbb",
          fontWeight: "normal",
          fontSize: "1.25rem",
          lineHeight: "1.6",
          textAlign: "center",
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        前 Google 台灣董事總經理 簡立峰 曾指出：
        <br />
        這一代的孩子，將會是人類與 AI 協作的第一代。
        而在這個過程中，他們該具備什麼能力？
      </h3>

      <div className="container py-5">
        <h2
          className="text-center mb-4"
          style={{
            fontWeight: "600",
            fontSize: "2rem",
            letterSpacing: "0.5px",
          }}
        >
          DreamNest 精心打造的
          <span style={{ color: "#00bcd4", fontWeight: "700" }}> 三大關鍵能力</span>
        </h2>

        <div className="row g-4 justify-content-center">
          {cardData.map((item, index) => (
            <div
              key={index}
              className="col-12 col-sm-6 col-md-4 d-flex justify-content-center"
            >
              <div
                className="card text-white text-center shadow border-0 w-100"
                style={{
                  background: item.bg,
                  borderRadius: "1rem",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow = "0 12px 24px rgba(0,0,0,0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 10px rgba(0,0,0,0.1)";
                }}
              >
                <div className="card-body d-flex flex-column justify-content-center p-4">
                  <h5 className="card-title fw-bold mb-3">{item.title}</h5>
                  <p className="card-text">{item.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* === 響應式影片區塊（灰底） === */}
      <div className=" py-5 ">
        <div className="text-center">
          <div className="ratio ratio-4x3 mx-auto" style={{ width: "50%" }}>
            <video
              autoPlay
              muted
              loop
              playsInline
              className="rounded shadow w-100"
            >
              <source src={maker} type="video/mp4" />
              您的瀏覽器不支援影片播放。
            </video>
           </div>
          <p className="mt-3 text-muted">✨ 創客學習實況，讓孩子從中學會探索與思考 ✨</p>
        </div>
      </div>
    </div>
  );
}

export default AiStatement;
