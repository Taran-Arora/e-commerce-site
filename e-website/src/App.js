import './Assets/Sass/style.scss';
import { BrowserRouter as Router, Routes, Outlet,Route } from "react-router-dom";
import Login from './Components/Loginlayout/Login';
import Register from './Components/Loginlayout/Register';
import Forgot from './Components/Loginlayout/Forgot';
import Reset from './Components/Loginlayout/Reset'
import Header from './Components/HeadLayout/Header';
import Footer from './Components/HeadLayout/Footer';
import Home from './Components/PublicLayout/Home';
import Header1 from './Components/HeadLayout/Header1';
import AddtoCart from './Components/PublicLayout/AddtoCart';


function App() {


  function LoginLayout(){
    return(
      <Outlet/>
    )
  }

  function PublicLayout(){
    return(
      <>
      <Header1 />
      <Outlet />
      <Footer />
      </>
    )
  }


  return (
    <div className="App">
      <Router>
        <Routes>
        <Route element={<LoginLayout />}>
            <Route path="/login" element={<Login />}/>
            <Route path='/register' element={<Register />}/>
            <Route path='/forgot' element={<Forgot />}/>
           <Route path='/reset' element={<Reset />}/>

          </Route>

      <Route element={<PublicLayout/>}>
      <Route path="/" element={<Home />}/>
      <Route path="/cart" element={<AddtoCart />}/>

      </Route>
 
      </Routes>
      </Router>



    </div>
  );
}

export default App;
