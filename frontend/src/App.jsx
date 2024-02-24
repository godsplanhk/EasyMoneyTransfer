import {BrowserRouter,Routes,Route} from "react-router-dom";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import { Dashboard } from "./pages/Dashboard";
import { SendMoney } from "./components/SendMoney";
function App() {
  return (
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<SignIn></SignIn>}/>
          <Route path="/signin" element={<SignIn></SignIn>}/>
          <Route path="/signup" element={<SignUp></SignUp>}/>
          <Route path="/dashboard" element={<Dashboard/>}></Route>
          <Route path="/transfer" element={<SendMoney/>}></Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App