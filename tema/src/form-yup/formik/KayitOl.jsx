import { useFormik } from "formik";
import '../yup/kayitOl.jsx';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
function KayitOl() {
    const {errrors,valus,handleSubmit,handleChange}=useFormik({
        initialValues: {
        username:'',
        email:'',
        password:'',
        confirmPassword:'',
        trem:false
    },
    });
  return (
  <div className="min-h-screen px-4 py-8 mx-auto lg:py-24 lg:px-6 flex flex-col items-center justify-center w-screen">
    <div className="w-full max-w-lg flex flex-col items-center justify-center bg-white shadow-md rounded-lg p-6">
      <h1 className="text-2xl font-bold">Sign Up</h1>
      <form className="mt-4" style={{width:'430px',background:'pink',height:'400px'}}>
        <div className="flex flex-row " style={{width:'100%',height:'50px',margin:'30px 0px',position:'relative'}}>
        <input type="text" placeholder="User name" className="focus:outline-none  " style={{width:'100%',background:'transparent',border:'2px solid rgba(255,255,255,2)',borderRadius:'40px'}}></input>
         <FaUser style={{position:'absolute',right:'20px',top:'30%',fontSize:'18px'}}/> 
        </div>
        <div className="flex flex-row " style={{width:'100%',height:'50px',margin:'30px 0px',position:'relative'}}>
          <input type="text" placeholder="Email" className="focus:outline-none" style={{width:'100%',background: 'transparent',border:'2px solid rgba(255,255,255,2)',borderRadius:'40px'}}></input>
          <IoIosMail style={{position:'absolute',right:'20px',top:'30%',fontSize:'18px'}}/>
        </div>
        <div className="flex flex-row " style={{width:'100%',height:'50px',margin:'30px 0px',position:'relative'}}>
        <input type="text" placeholder="Password" className="focus:outline-none" style={{width:'100%',background: 'transparent',border:'2px solid rgba(255,255,255,2)',borderRadius:'40px'}}></input>
        <FaLock style={{position:'absolute',right:'20px',top:'30%',fontSize:'16px'}}/>
        </div>
        <div className="flex flex-row " style={{width:'100%',height:'50px',margin:'30px 0px',position:'relative'}}>
          <input type="text" placeholder="Confirm Password" className="focus:outline-none border-none " style={{width:'100%',background: 'transparent',border:'2px solid rgba(255,255,255,2)',borderRadius:'40px'}}></input>
          <FaLock style={{position:'absolute',right:'20px',top:'30%',fontSize:'16px'}}/>
        </div>
        <div className="flex flex-row items-center" style={{width:'100%',height:'50px',background:'grey',margin:'30px 0px'}}>
          <button type="submit">Kayıt Ol</button>
        </div>
      </form>
    </div>
  </div>
  )
}

export default KayitOl
