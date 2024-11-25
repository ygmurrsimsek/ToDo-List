import { useFormik } from 'formik';
import { RegisterFormYup } from '../yup/RegisterSignUp';
function RegisterSignUp() {
    const {errors,values,handleChange,handleSubmit} = useFormik({
        initialValues: {
          email: '',
          password:'',
        },
        validationSchema:RegisterFormYup,
       
    });
return (

  <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-24 lg:px-6">
    <div className="grid items-center gap-8 lg:grid-cols-2">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" placeholder='E-mail giriniz' onChange={handleChange} value={values.email} />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" placeholder='Sifre giriniz' onChange={handleChange} value={values.password} />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <button type='submit'>Giriş Yap</button>
      </form>
    </div>
  </div>

  )
}

export default RegisterSignUp
