import { useNavigate } from 'react-router-dom'

export default function LandingPage() {
  const navigate = useNavigate()

  const handleSingpassLogin = () => {
    setTimeout(() => navigate('/dashboard'), 800)
  }

  const handleNricLogin = () => {
    setTimeout(() => navigate('/dashboard'), 800)
  }

  const handleCreateAccount = () => {
    navigate('/create-account-with-nric-1-1')
  }

  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row overflow-hidden">
      {/* Left side - Form */}
      <div className="w-full md:flex-1 flex flex-col justify-center items-center gap-[24px] bg-white bg-gradient-to-b from-[#005eb8]/7 to-[#5c55eb]/7 p-[16px] md:p-[24px]">
        <div className="w-full max-w-[420px] flex flex-col items-center gap-[32px] p-[24px] md:p-[32px] bg-white/70 bg-[radial-gradient(circle,_rgba(255,255,255,0.56)_0%,_rgba(255,255,255,0.08)_100%)] rounded-[24px] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.05)]">
          <div className="flex flex-col items-center gap-[12px] w-full">
            <img src="https://s3-alpha-sig.figma.com/img/26ec/3ab4/0588c7482da725dcdeb68b2897f9bde2?Expires=1777852800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ShoM0pDLFtIglvPWeRLcrNHkP-8DajZ~UfTydATZnIyvxRx0Q8vNaKu-xBitsol0veqqwq1r4p1azXwhatXwj7sKArxvuNthVWmFirx22koohe8997mFNM6GF2P9FJZQ6hnguVRCcCTWizRFgiWWnqabTviIJl1EuaMxA65dwinn4u47OVQuKOW4HPfBJ49i-x-lqHrsAbGLy9XfBAQqpYzMCSsmnWFH-jgrpSRysU3HqoilRLqyQb6LtiIX7mix4qKeTiJI50ywXWQYf5zHXGyqc7Ry5JQaJUdS88v~1e1Kd-i6t7RipipnfhyJG71UbhW-m-9vh~8Pv9t2nKWPxg__" className="w-[100px] h-[50px]" alt="UOI Logo" />
            <h1 className="text-[24px] md:text-[32px] font-bold leading-[28.8px] md:leading-[38.4px] text-center text-[#212121] font-[Noto_Sans]">Welcome to UOI Customer Portal</h1>
            <p className="text-[14px] md:text-[16px] leading-[21px] md:leading-[24px] text-center text-[#212121] font-[Noto_Sans]">Manage all your policies in one portal.</p>
          </div>
          <div className="flex flex-col items-center gap-[24px] w-full">
            <img src="https://s3-alpha-sig.figma.com/img/5066/4d16/b727ff45ca18ad961c6d3df8c1fcd1b3?Expires=1777852800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=FjqHumJtGyZGxD-rXOUogsw~Ee7zhArPCvFgWkRj7iPylXJtIpjUblIJEcXpIrx3-yZ~InFFfJXFj0J1AEfu8FUHqPgv3QHUJhGRbc~MoPLAH7I515FGP5c6H8orlkc2IDeON6kPGJqe3TJVYUcROI7GtBfB8J~5Z~8tkHnUdAvEkGlzd7-~MJDpCW7zcbZRCGHmDVLJudLB3woye9m0NF-qCKMKLH9VIdBRLKM5vR0GqLNMkdX1fXHty5PnjsXFHGW9SgcrSZ1J~Dg2AJgwYQDlSgLAk6sqoBcqGmqBI0YnL9W4YxIT5quGUQdrmvhDg0sBJxAL7CMrx4OXyh9e0g__" className="w-[200px] h-[42px]" alt="Singpass Login" />
            <div className="flex items-center gap-[16px] w-full">
              <p className="text-[16px] leading-[24px] text-center text-[#212121] font-[Noto_Sans]">or</p>
            </div>
            <button 
              onClick={handleNricLogin}
              className="flex items-center justify-center px-[16px] py-[12px] gap-[10px] w-[200px] h-[42px] bg-white rounded-[8px] border border-[#005eb8] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.05)] cursor-pointer hover:opacity-90 transition-opacity"
            >
              <span className="text-[16px] font-medium leading-[24px] text-[#005eb8] font-[Noto_Sans]">Log in with NRIC/FIN</span>
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-[12px] w-full max-w-[420px]">
          <p className="text-[14px] leading-[21px] text-center text-[#6e6e6e] font-[Noto_Sans]">
            Don't have an account? <span className="text-[#0d6efd] cursor-pointer" onClick={handleCreateAccount}>Create an account</span>
          </p>
          <p className="text-[14px] leading-[21px] text-center text-[#6e6e6e] font-[Noto_Sans]">
            If you're experiencing login issues, please contact us at <span className="text-[#0d6efd]">help@uoi.com.sg</span>.
          </p>
        </div>
      </div>
      {/* Right side - Image */}
      <div className="hidden md:block md:flex-1">
        <img src="https://s3-alpha-sig.figma.com/img/aab6/0921/4d0afc4bf990cf584c0c3c3e94ab342d?Expires=1777852800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=evV6xk8x8mXwhl5DIkzHg2YvXWJLdjUEE4QzPiw6skwI8IIpjBvimdVwPWI3lvrYlZLeVrGLuFRhJSyQ4GLkoIysQRqfpOJ8dmtuYTF0s9CS2fmpshgKg~eT~~cvuqARWBTTgJbpm4EKFFQe~kRYW2YGiRqEXepHLEst6q0xBDgHIiQabxEZE9VchjDafhutP34bXOqxyem451w8M82FG1pcJ~uI8MojTj-DkPpVSG9U6c-dXDkuPq2ZLzeGBzySFlIhRmWkDUzHDYlXHEUa6ro4WFSx71OMT6F2uglnWSRUKZQXRbtGsylqIereApngRcCLus72riI1Hx4ANuxYcA__" className="w-full h-full object-cover" alt="Travel" />
      </div>
      {/* Footer */}
      <div className="w-full h-[53px] flex items-center justify-between px-[16px] md:px-[24px] py-[16px] bg-[#005eb8] absolute bottom-0">
        <p className="text-[14px] leading-[21px] text-white font-[Noto_Sans]">Copyright © 2026 United Overseas Insurance Limited Co. Reg. No. 197100152R.</p>
        <p className="text-[14px] leading-[21px] text-right text-white font-[Noto_Sans]">All Rights Reserved.</p>
      </div>
    </div>
  )
}