import { useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import AuthContext from "../context/AuthContext";

import { signUpSchema } from "../schemas/signUpSchema";

const initialValues = {
  name: "",
  lastName: "",
  email: "",
  password: "",
  confirm: "",
  framework: "",
  terms: false,
};

const SignUp = () => {
  let { setStep } = useContext(AuthContext);

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    
    <main>
      <h1>Welcome ABC</h1>
      <div className="card">
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={signUpSchema}
        >
          <Form autoComplete="off">
            <fieldset>
              <label htmlFor="firstName">Name</label>
              <Field name="firstName" id="firstName" type="text" autoFocus />
              <ErrorMessage
                name="firstName"
                component="p"
                className="error-message"
              />

            </fieldset>
            <fieldset>
            <label htmlFor="lastName">Apellido</label>
              <Field name="lastName" id="lastnName" type="text" autoFocus />
              <ErrorMessage
                name="lastName"
                component="p"
                className="error-message"
                        />
            </fieldset>
            <fieldset>
              <label htmlFor="email">email</label>
              <Field name="email" id="email" type="email" />
              <ErrorMessage
                name="email"
                component="p"
                className="error-message"
              />
            </fieldset>
            <fieldset>
              <label htmlFor="password">password</label>
              <Field name="password" id="password" type="password" />
              <ErrorMessage
                name="password"
                component="p"
                className="error-message"
              />
            </fieldset>
            <fieldset>
              <label htmlFor="confirm">Confirm password</label>
              <Field name="confirm" id="confirm" type="password" />
              <ErrorMessage
                name="confirm"
                component="p"
                className="error-message"
              />
            </fieldset>
            <fieldset>
              <label htmlFor="framework">Favorite place</label>
              <Field name="framework" id="framework" as="select">
                <option value="">Select ...</option>
                <option value="city">City</option>
                <option value="fiel">Fiel</option>
                <option value="beach">Beach</option>
                <option value="desert">Desery</option>
              </Field>
              <ErrorMessage
                name="framework"
                component="p"
                className="error-message"
              />
            </fieldset>
            <fieldset>
              <label htmlFor="terms">
                <Field name="terms" id="terms" type="checkbox" /> Accept terms
                and conditions
              </label>
              <ErrorMessage
                name="terms"
                component="p"
                className="error-message error-message-terms"
              />
            </fieldset>
            <button type="submit">Registered</button>
          </Form>
        </Formik>
      </div>
      <p>
        Already have an account?{" "}
        <span onClick={() => setStep("signin")}>Sign in</span>
      </p> 
      {/* <p>
        Already have an account?{" "}
        <span onClick={() => setStep("admin")}>Administrador</span>
      </p>  */}
     
    </main>
    
  );

};

export default SignUp;

