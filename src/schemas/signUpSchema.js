import * as Yup from "yup";

export const signUpSchema = Yup.object().shape({
  firstName: Yup.string() .max(15, "Este campo debe tener no maximo 15 carateres! ").required("First name is required!"),
  lastName: Yup.string()
  .max(20, "Este campo deve ter no máximo 20 caracteres!")
  .required("lastName is required!"),
  email: Yup.string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: Yup.string()
    .min(12, "Password must be at least 12 characters")
    .matches(
      /(?=.*[\W])(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/,
      "Password must have lower, upper, nums, symbols"
    )
    .required("Password is required"),
  confirm: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirmation is required"),
  framework: Yup.string()
    .oneOf(["city", "fiel", "beach","desert"], "Must select a framework")
    .required("Framework is required"),
  terms: Yup.bool().oneOf([true], "You must accept the terms"),
});
