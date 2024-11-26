import { useFormik } from 'formik';
import { RegisterFormYup } from '../yup/RegisterSignUp';

function RegisterSignUp() {
  const { errors, values, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: RegisterFormYup,
  });

  return (
    <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-24 lg:px-6 items-center justify-center">
      <div className="min-h-screen flex items-center justify-center px-4 mt-4">
        <form onSubmit={handleSubmit} className="bg-white p-6">
          <div>
            <label htmlFor="email" className="mr-2 font-mono">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="E-mail giriniz"
              onChange={handleChange}
              value={values.email}
              className="mt-4 font-mono"
              style={{ outline: 'none' }}
            />
            {errors.email && <p>{errors.email}</p>}
          </div>
          <div>
            <label htmlFor="password" className="mr-2 font-mono">
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Şifre giriniz"
              onChange={handleChange}
              value={values.password}
              className="mt-4 font-mono"
              style={{ outline: 'none' }}
            />
            {errors.password && <p>{errors.password}</p>}
          </div>
          <div>
          <button type="submit" className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4   focus:ring-purple-300 font-medium rounded-lg text-sm px-4 mt-4 ">

            Giriş Yap
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterSignUp;
