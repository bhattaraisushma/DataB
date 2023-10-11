import * as yup from "yup";

const passwordRules = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;

export const basicSchema = yup.object().shape({

        email: yup.string().email("Please enter a valid email").required(),
        password: yup.string().min(5).matches(passwordRules,{message:"Please Create A Strong Password"}).required("Please enter a password"),
        firstname: yup.string().required("Please enter a first name"),
        lastname: yup.string().required("Please enter a last name"),

});