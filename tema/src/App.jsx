import './App.css'
import './assets/tailwind/output.css';
// import Web from './components/web';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Config from './config/config.jsx';
function App() {

  return (
   <div>
    {/* <Web/> */}
    <Header/>
    <Config/>
    <Footer/>
   </div>
  )
}

export default App
