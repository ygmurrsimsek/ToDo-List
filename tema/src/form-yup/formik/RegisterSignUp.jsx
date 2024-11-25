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

  <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-24 lg:px-6 items-center justify-center">
    <div className="min-h-screen flex items-center justify-center  px-4 mt-4">
      <form onSubmit={handleSubmit} className="bg-white p-6">
        <div>
          <label htmlFor="email" className='mr-2' style={{fontFamily:'serif'}}>Email :</label>
          <input type="email" id="email" name="email" placeholder='E-mail giriniz' onChange={handleChange}  style ={{outline:'none'}} value={values.email} className='mt-4 '/>
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div>
          <label className='mr-2' htmlFor="password">Password :</label>
          <input type="password" id="password" name="password" placeholder='Sifre giriniz' onChange={handleChange} value={values.password}  style ={{outline:'none'}}className='mt-4 ' />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <button type='submit' className='mt-4'>Giriş Yap</button>
      </form>
    </div>
  </div>

  )
}

export default RegisterSignUp
