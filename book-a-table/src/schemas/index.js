import * as yup from  "yup"

const passwordRules = /^(?=.*\d)(?=.*[a-z]).{5,}$/;

export const validationSchema = yup.object({
    email: yup
            .string()
            .email("Please enter a valid email")
            .required("Required"),
    firstName: yup
            .string()
            .min(3, "Too short 3 char min")
            .required("Required"),
    lastName: yup
            .string()
            .min(3, "Too short 3 char min")
            .required("Required"),
    password: yup
            .string()
            .min(5)
            .matches(passwordRules, {message: "Please create a stronger password"})
            .required("Required"),
    confirmPassword: yup
            .string()
            .oneOf([yup.ref('password'), null], "Password must match")
            .required("Required"),
});