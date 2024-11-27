import { useFormik } from "formik";

function KayitOl() {
    const {errrors,valus,handleSubmit,handleChange}=useFormik({
        initialValues: {
        isim:'',
        soyisim:'',
        age:'',
        cinsiyet:'',
        telefon:'',
        email:'',
        password:'',
        confirmPassword:'',
        trem:false
    },
    });
  return (
    <div>
      
    </div>
  )
}

export default KayitOl
