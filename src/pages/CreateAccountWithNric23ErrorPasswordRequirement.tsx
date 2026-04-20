import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ChevronLeft, Lock, Eye, EyeOff } from 'lucide-react'

export default function CreateAccountWithNric23ErrorPasswordRequirement() {
  const navigate = useNavigate()
  const [password, setPassword] = useState('abcdef')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [error, setError] = useState('Password must be at least 8 characters and include letters and numbers.')

  const handleBack = () => {
    navigate(-1)
  }

  const handleCreateAccount = () => {
    const hasMinLength = password.length >= 8
    const hasLettersNumbers = /(?=.*[a-zA-Z])(?=.*[0-9])/.test(password)
    
    if (!hasMinLength || !hasLettersNumbers) {
      setError('Password must be at least 8 characters and include letters and numbers.')
      return
    }
    if (password !== confirmPassword) {
      setError('Password do not match, try again.')
      return
    }
    setError('')
    setTimeout(() => navigate('/dashboard'), 800)
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
    const hasMinLength = e.target.value.length >= 8
    const hasLettersNumbers = /(?=.*[a-zA-Z])(?=.*[0-9])/.test(e.target.value)
    
    if (hasMinLength && hasLettersNumbers) {
      setError('')
    }
  }

  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row overflow-hidden">
      {/* Left side - Form */}
      <div className="w-full md:flex-1 flex flex-col justify-center items-center gap-[24px] bg-white bg-gradient-to-b from-[#005eb8]/7 to-[#5c55eb]/7 p-[16px] md:p-[24px]">
        <div className="w-full max-w-[420px] flex flex-col items-center gap-[32px] px-[24px] py-[32px] bg-white/70 bg-[radial-gradient(circle,_rgba(255,255,255,0.56)_0%,_rgba(255,255,255,0.08)_100%)] rounded-[24px] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.05)]">
          <div className="flex items-center gap-[4px] w-full h-[21px]">
            <ChevronLeft className="w-[20px] h-[20px]" />
            <span className="text-[14px] leading-[21px] text-[#6e6e6e] font-[Noto_Sans] cursor-pointer" onClick={handleBack}>Back</span>
          </div>
          <div className="flex flex-col items-center gap-[12px] w-full">
            <img src="https://s3-alpha-sig.figma.com/img/26ec/3ab4/0588c7482da725dcdeb68b2897f9bde2?Expires=1777852800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ShoM0pDLFtIglvPWeRLcrNHkP-8DajZ~UfTydATZnIyvxRx0Q8vNaKu-xBitsol0veqqwq1r4p1azXwhatXwj7sKArxvuNthVWmFirx22koohe8997mFNM6GF2P9FJZQ6hnguVRCcCTWizRFgiWWnqabTviIJl1EuaMxA65dwinn4u47OVQuKOW4HPfBJ49i-x-lqHrsAbGLy9XfBAQqpYzMCSsmnWFH-jgrpSRysU3HqoilRLqyQb6LtiIX7mix4qKeTiJI50ywXWQYf5zHXGyqc7Ry5JQaJUdS88v~1e1Kd-i6t7RipipnfhyJG71UbhW-m-9vh~8Pv9t2nKWPxg__" className="w-[100px] h-[50px]" alt="UOI Logo" />
            <h1 className="text-[24px] md:text-[32px] font-bold leading-[28.8px] md:leading-[38.4px] text-center text-[#212121] font-[Noto_Sans]">Set Password</h1>
            <p className="text-[14px] md:text-[16px] leading-[21px] md:leading-[24px] text-center text-[#212121] font-[Noto_Sans]">Enter a password for your new account.</p>
          </div>
          <div className="flex flex-col gap-[16px] w-full">
            <div className="flex flex-col gap-[8px] w-full">
              <div className="flex flex-col gap-[12px] w-full">
                <Lock className="w-[64px] h-[21px] text-[#212121]" />
                <div className="flex items-center px-[16px] py-[12px] gap-[8px] w-full h-[48px] bg-white rounded-[8px] border border-[#dc3545]">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={handlePasswordChange}
                    className="flex-1 bg-transparent font-[Noto_Sans] text-[16px] leading-[24px] text-[#212121] outline-none"
                  />
                  <button onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <EyeOff className="w-[24px] h-[24px]" /> : <Eye className="w-[24px] h-[24px]" />}
                  </button>
                </div>
              </div>
              {error && (
                <div className="flex gap-[8px]">
                  <div className="w-[16px] h-[16px] bg-red-500 rounded-full mt-[2px] shrink-0" />
                  <span className="text-[12px] leading-[16.8px] text-[#dc3545] font-[Noto_Sans]">{error}</span>
                </div>
              )}
            </div>
            <div className="flex flex-col gap-[4px] w-full">
              <div className="flex flex-col gap-[12px] w-full">
                <div className="flex items-center gap-[8px] h-[21px]">
                  <div className="flex items-center gap-[4px]">
                    <label className="text-[14px] leading-[21px] text-[#212121] font-[Noto_Sans]">Confirm Password</label>
                  </div>
                </div>
                <div className="flex items-center justify-end px-[16px] py-[12px] gap-[8px] w-full h-[48px] bg-white rounded-[8px] border border-black">
                  <button onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                    {showConfirmPassword ? <EyeOff className="w-[24px] h-[24px]" /> : <Eye className="w-[24px] h-[24px]" />}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <button 
            onClick={handleCreateAccount}
            className="flex items-center justify-center px-[40px] py-[14px] gap-[10px] h-[52px] bg-[#005eb8] rounded-[8px] cursor-pointer hover:opacity-90 transition-opacity"
          >
            <span className="text-[16px] font-medium leading-[24px] text-white font-[Noto_Sans]">Create Account</span>
          </button>
        </div>
        <p className="text-[14px] leading-[21px] text-center text-[#6e6e6e] font-[Noto_Sans]">
          If you're experiencing login issues, please contact us at <span className="text-[#0d6efd]">help@uoi.com.sg</span>.
        </p>
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