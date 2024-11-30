import * as yup from "yup";


export const kayitOl =yup.object().shape({
    username:yup.string().required("İsim alanı zorunludur.").min(2,"İsim en az 2 karakter olmalıdır").max(50,"İsim en fazla 50 karakter olabilir"),
    email:yup.string().required().email("Geçerli bir e-posta adresi giriniz"),
    password:yup.string().required("Şifre alanı zorunludur.").min(8,"Şifre en az 8 karakter olmalıdır").max(50,"Şifre en fazla 50 karakter olabilir"),
    confirmPassword: yup.string().required("Şifre onayı alanı zorunludur.").oneOf([yup.ref("password"),null,"Şifreler eşleşmiyor"]),
    terms:yup.boolean().required("Şartları kabul etmelisiniz"),
});