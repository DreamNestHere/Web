import header from "../assets/header.svg"
import "./home.css"
import Last_Act from "./last_act";
import Ch_maker from "./ch_maker";
import AiStatement from "./ai_stat";
import Footer from "./footer";

function Home() {
    return (
        <>
         <div>
           <div style={{
              aspectRatio: '21/9', // 或 '16 / 9'
              overflow: 'hidden',
              width: '100%'
            }}>
            <img id="head_img" src={header} alt="..."></img>
           </div>
            <Last_Act/>
            <AiStatement/>
            <Ch_maker/>
            <Footer/>
         </div>
        </>
    /*

      <main className="min-h-screen bg-amber-50 text-gray-800">
        
        <header className="w-full bg-yellow-200 py-4 px-8 shadow">
          <div className="max-w-5xl mx-auto flex justify-between items-center">
            <h1 className="text-3xl font-bold tracking-tight">Dream Nest 電資知識小百科</h1>
          </div>
        </header>
  
        <section className="py-16 px-6">
          <div className="max-w-5xl mx-auto text-center">
            <p className="text-lg mb-8">
              歡迎來到 Dream Nest 小雞的知識分享專區！這裡定期更新關於電子、電路、程式與創客任務的小知識。
            </p>
          </div>
  
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <img src="/images/egg-1.png" alt="知識宣言盒 1" className="rounded-xl shadow" />
            <img src="/images/egg-2.png" alt="知識宣言盒 2" className="rounded-xl shadow" />
            <img src="/images/egg-3.png" alt="知識宣言盒 3" className="rounded-xl shadow" />
            <img src="/images/alert-task.png" alt="創客任務掉落" className="rounded-xl shadow" />
            <img src="/images/news-ai.png" alt="AI 新聞插播" className="rounded-xl shadow" />
          </div>
  
          <div className="text-center mt-10 text-sm text-gray-600">
            更多內容請追蹤我們 IG：<a href="https://www.instagram.com/dreamnest.tw" className="text-blue-500 underline">@dreamnest.tw</a>
          </div>
        </section>
      </main>*/
    );
  }
export default Home;