import { useState } from "react";


const InputPassword = () => {
  const [type, setType] = useState("password");
  const [show, setShow] = useState(false);

  const switchVisibility = (visibility) => {
    setShow(visibility);
    setType(visibility ? "text" : "password");
  };

  return (
    <div className="input-password">
      <input type={type} />
      {!show && (
        <AiOutlineEye
          className="password-icon"
          onClick={() => switchVisibility(false)}
        />
      )}
      {show && (
        <AiOutlineEyeInvisible
          className="password-icon"
          onClick={() => switchVisibility(false)}
        />
      )}
    </div>
  );
};

export default InputPassword;
