import * as yup from "yup";


export const kayitOl =yup.object.shape({
    isim:yup.string.required("Bu kısım boş bırakılamaz.").min("2 karakterden düşük olamaz.").max("Bu kadar uzun isim olamaz"),
    soyisim:yup.string.required("Bu kısım boş bırakılamaz.").min("2 karakterden düşük olamaz.").max("Bu kadar uzun soyisim olamaz"),
    age: yup.number().required().positive("Geçersiz yaş").integer("Geçersiz yaş"),
});