import { useState } from "react";
import { BrowserRouter as Router,Route} from "react-router-dom";
  import AdminLogin from "./components/AdminLogin"
import AuthContext from "./context/AuthContext"
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import ForgotPassword from "./components/ForgotPassword";


const App = () => {
  const [step, setStep] = useState("signin");

  return (
    <AuthContext.Provider value={{ step, setStep }}>
       
      <div className="container">
        {step === "signin" && <SignIn />}
        {step === "signup" && <SignUp />}
        {step === "forgot" && <ForgotPassword />}
        {step === "admin" && <AdminLogin />}
       
      </div>
    
      
    </AuthContext.Provider>
  );
};

export default App;
