import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import CreateAccountWithNric11 from './pages/CreateAccountWithNric11'
import CreateAccountWithNric12 from './pages/CreateAccountWithNric12'
import CreateAccountWithNric21 from './pages/CreateAccountWithNric21'
import CreateAccountWithNric22 from './pages/CreateAccountWithNric22'
import CreateAccountWithNric212 from './pages/CreateAccountWithNric212'
import CreateAccountWithNric13Error from './pages/CreateAccountWithNric13Error'
import CreateAccountWithNric24ErrorPasswordNotMatched from './pages/CreateAccountWithNric24ErrorPasswordNotMatched'
import CreateAccountWithNric23ErrorPasswordRequirement from './pages/CreateAccountWithNric23ErrorPasswordRequirement'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/create-account-with-nric-1-1" element={<CreateAccountWithNric11 />} />
        <Route path="/create-account-with-nric-1-2" element={<CreateAccountWithNric12 />} />
        <Route path="/create-account-with-nric-2-1" element={<CreateAccountWithNric21 />} />
        <Route path="/create-account-with-nric-2-2" element={<CreateAccountWithNric22 />} />
        <Route path="/create-account-with-nric-2-1-2" element={<CreateAccountWithNric212 />} />
        <Route path="/create-account-with-nric-1-3-error" element={<CreateAccountWithNric13Error />} />
        <Route path="/create-account-with-nric-2-4-error-password-not-matched" element={<CreateAccountWithNric24ErrorPasswordNotMatched />} />
        <Route path="/create-account-with-nric-2-3-error-password-requirement" element={<CreateAccountWithNric23ErrorPasswordRequirement />} />
        <Route path="/dashboard" element={<div className="min-h-screen flex items-center justify-center font-[Noto_Sans]"><p className="text-[20px] text-[#6e6e6e]">Dashboard — coming soon</p></div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App