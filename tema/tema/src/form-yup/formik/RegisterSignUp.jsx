import { useFormik } from 'formik';

function RegisterSignUp() {
    const {errors,values,handleChange,handleSubmit} = useFormik({
        initialValues: {
          email: '',
          password:'',
        },
        // validationSchema:RegisterFormYup,
        // onSubmit:submit
    });
  return (
    <div>
      
    </div>
  )
}

export default RegisterSignUp
