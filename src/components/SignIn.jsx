import { useContext, useState } from "react";
import AuthContext from "../context/AuthContext";
import { IoEyeSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

const SignIn = () => {
  let { setStep } = useContext(AuthContext);

  // Datos del formulario
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // Focus de los inputs del formulario
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);

  const handlerSubmit = (e) => {
    // Evita el envío de datos a un backend
    e.preventDefault();
    console.log("Sending data to backend...");
    console.log(`El usuario digitó: ${email} y ${password}`);
  };

  return (
    <main>
      <h1>Iniciar Seccion</h1>
      <div className="card">
        <form onSubmit={handlerSubmit} autoComplete="off">
          <fieldset>
          
            <label htmlFor="email">email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              autoFocus
              required
              onBlur={() => setEmailFocused(true)}
              data-focused={emailFocused}
            />
            <p className="error">Valid email required</p>
          </fieldset>
          <fieldset>
            <label htmlFor="password">password:</label>
            
            <input
            
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              pattern="(?=.*[\W])(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              required
              
              onBlur={() => setPasswordFocused(true)}
              data-focused={passwordFocused}
            />
         

            <p className="error">Valid password required</p>
          </fieldset>
          <button type="submit">Acceder</button>
          <div className="forgot" onClick={() => setStep("forgot")}>
            Forgot password?
          </div>
        </form>
      </div>
      <p>
        Don&apos;t have an account?{" "}
        <span onClick={() => setStep("signup")}>Sign up</span>
        
      </p> 
      <p>  <span onClick={() => setStep("admin")}>Administrador</span></p>
    
    </main>
  );
};

export default SignIn;
