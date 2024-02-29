import logo from './logo.svg';
import './Assets/Sass/style.scss';
import { BrowserRouter as Router, Routes, Outlet,Route } from "react-router-dom";
import Login from './Components/Loginlayout/Login';
import Header from './Components/HeadLayout/Header';
import Footer from './Components/HeadLayout/Footer';
import Home from './Components/PublicLayout/Home';


function App() {


  function LoginLayout(){
    return(
      <Outlet/>
    )
  }

  function PublicLayout(){
    return(
      <>
      <Header />
      <Outlet />
      {/* <Footer /> */}
      </>
    )
  }


  return (
    <div className="App">
      <Router>
        <Routes>
        <Route element={<LoginLayout />}>
            <Route path="/login" element={<Login />}/>
          </Route>

      <Route element={<PublicLayout/>}>
      <Route path="/" element={<Home />}/>
      </Route>
 
      </Routes>
      </Router>



    </div>
  );
}

export default App;
