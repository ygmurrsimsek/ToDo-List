import { useFormik } from "formik";
import { kayitOl } from '../yup/kayitOl.jsx'; // Yup doğrulama şemanızı burada içe aktarın
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
 import { useNavigate } from "react-router-dom";
import { useState } from "react";
function KayitOl() {
  
  const navigate= useNavigate();
  const [loading,setLoading] = useState(false);
  const { errors, touched, values, handleSubmit, handleChange, handleBlur } = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: kayitOl, // Burada validationSchema olarak doğru şekilde kayitOl'u kullanın
    validateOnChange: false, // Değişiklikle doğrulama yapma
    validateOnBlur: true,  // Değişiklikle doğrulama yapma
      onSubmit:() => {//submit işlemi yapılınca yuplar sorunsuz olunca bu olsun dedik
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
          alert("Kayıt Başarılı!");
          navigate("/signin");

        },2000);
      }
  });

  return (
    <div className="max-w-screen-xl mx-auto flex items-center justify-center px-4 py-8 lg:py-22 lg:px-6 w-full mt-16 " style={{height:'660px',marginBottom:'0px',paddingBottom:'0px'}}> {/* mt-16: Header yüksekliği kadar boşluk bırakıyoruz */}
      <div className="min-h-screen max-w-lg flex flex-col items-center justify-center bg-white shadow-md rounded-lg p-6">
        <form onSubmit={handleSubmit} className="mt-4 z-0" style={{ width: '430px', background: 'rgba(211, 211, 211, 0.6)', backdropFilter: 'blur(10px)', height: '410px', borderRadius: '10px', padding: '0px 30px ', boxShadow: '1px 2px 4px 2px' }}>
          <h1 className="text-2xl font-bold flex justify-center mt-2">Sign Up</h1>
          
          {/* User name input */}
          <div className="flex flex-row" style={{ width: '100%', height: '40px', margin: '20px 0px 0px 0px'
            , position: 'relative' }}>
            <input
              type="text"
              name="username"
              placeholder="User name"
              onChange={handleChange}
              onBlur={handleBlur}  // handleBlur eklenmeli
              value={values.username}
              className="focus:outline-none pt-5 pr-11 pb-5 pl-5"
              style={{ width: '100%', background: 'transparent', border: '2px solid rgba(255,255,255,2)', borderRadius: '40px' }}
            />
            <FaUser style={{ position: 'absolute', right: '20px', top: '30%', fontSize: '16px' }} />
          </div >
          {touched.username && errors.username && (<div style={{height:'1px'}}><p className="flex flex-col items-center justify-center text-sm mt-1 w-full text-left" style={{ fontSize: '14px' }}>{errors.username}</p></div>)}

          {/* Email input */}
          <div className="flex flex-row" style={{ width: '100%', height:'40px', margin: '25px 0px 10px 0px', position: 'relative' }}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              onBlur={handleBlur}  // handleBlur eklenmeli
              value={values.email}
              className="focus:outline-none pt-5 pr-11 pb-5 pl-5"
              style={{ width: '100%', background: 'transparent', border: '2px solid rgba(255,255,255,2)', borderRadius: '40px' }}
            />
            <IoIosMail style={{ position: 'absolute', right: '20px', top: '30%', fontSize: '18px' }} />
          </div>
          {touched.email && errors.email && (
            <div className="flex flex-col items-center justify-center text-sm mt-1 w-full text-left" style={{height:'1px'}}>
              <p>{errors.email}</p>
            </div>
          )}

          {/* Password input */}
          <div className="flex flex-row" style={{ width: '100%', height:'40px',  margin: '25px 0px 10px 0px', position: 'relative' }}>
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              onBlur={handleBlur}  // handleBlur eklenmeli
              value={values.password}
              className="focus:outline-none pt-5 pr-11 pb-5 pl-5"
              style={{ width: '100%', background: 'transparent', border: '2px solid rgba(255,255,255,2)', borderRadius: '40px' }}
            />
            <FaLock style={{ position: 'absolute', right: '20px', top: '30%', fontSize: '14px' }} />
          </div>
          {touched.password && errors.password && (
            <div className="flex flex-col  justify-center items-center text-red-500 text-sm mt-1 w-full text-left" style={{height:'1px'}}>
              <p>{errors.password}</p>
            </div>)}

          {/* Confirm Password input */}
          <div className="flex flex-row" style={{ width: '100%', height:'40px', margin: '25px 0px 10px 0px', position: 'relative' }}>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              onChange={handleChange}
              onBlur={handleBlur}  // handleBlur eklenmeli
              value={values.confirmPassword}
              className="focus:outline-none border-none pt-5 pr-11 pb-5 pl-5"
              style={{ width: '100%', background: 'transparent', border: '2px solid rgba(255,255,255,2)', borderRadius: '40px' }}
            />
            <FaLock style={{ position: 'absolute', right: '20px', top: '30%', fontSize: '14px' }} />
          </div>
          {touched.confirmPassword && errors.confirmPassword && (
            <div className="flex flex-col items-center justify-center text-sm mt-1 w-full text-left" style={{height:'1px',paddingBottom:'1px'}}>
              <p>{errors.confirmPassword}</p>
            </div>
          )}

          {/* Submit button */}
          <div className="flex flex-row items-center" style={{ width: '100%', height:'20px', margin: '25px 0px 10px 0px' }}>
            <button type="submit" className="focus:border-none h-12" style={{ width: '100%', borderRadius: '40px', backgroundColor: 'white', boxShadow: '0 0 10px rgba(0,0,0,.1)', fontSize: '16px',marginTop:'25px' }} >
              Kayıt Ol
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default KayitOl;
