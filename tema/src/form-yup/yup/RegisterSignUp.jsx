import * as yup from 'yup';

export const RegisterFormYup= yup.object().shape({
    email: yup.string().email("geçerli E-mail giriniz!").required("Email is required"),
    password: yup.string().required("Password is required"),
})