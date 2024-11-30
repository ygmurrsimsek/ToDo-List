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
    <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-24 lg:px-6 items-center justify-center w-full" style={{ height: '500px' }}>
      <div className="min-h-screen flex items-center justify-center px-4 mt-4" style={{ height: '400px' }}>
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 border rounded flex flex-col items-center justify-center sm:w-4/5 lg:w-2/5"
          style={{ height: '300px', boxShadow: '1px 2px 10px 1px' }}
        >
          {/* Email Field */}
          <div className="flex items-center mb-4 w-full">
            <label htmlFor="email" className="text-right mr-4 font-mono" style={{ width: '100px' }}>
              Email :
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="E-mail giriniz"
              onChange={handleChange}
              value={values.email}
              className="flex-1 p-2 border-b focus:outline-none"
              style={{ width: '300px' }}
            />
          </div>
          {/* Email Error Message */}
          {errors.email && (
            <div className="flex flex-col items-center justify-center text-sm mt-1 w-full text-left">
              <p>{errors.email}</p>
            </div>
          )}

          {/* Password Field */}
          <div className="flex items-center mb-4 mt-2 w-full">
            <label htmlFor="password" className="text-right mr-4 font-mono" style={{ width: '100px' }}>
              Password :
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Şifre giriniz"
              onChange={handleChange}
              value={values.password}
              className="flex-1 p-2 border-b focus:outline-none"
              style={{ width: '300px' }}
            />
          </div>
          {/* Password Error Message */}
          {errors.password && (
            <div className=  " flex flex-col items-center justify-center  text-red-500 text-sm mt-1 w-full text-left">
              <p>{errors.password}</p>
            </div>
          )}

          {/* Submit Button */}
          <div className="flex flex-row items-end justify-end">
            <button
              type="submit"
              className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 mt-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800"
            >
              Giriş Yap
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterSignUp;
