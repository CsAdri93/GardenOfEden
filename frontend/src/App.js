import { BrowserRouter as Router, NavLink, Routes, Route, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Contact from "./contact";
import Login from "./Login";
import Registration from "./Registration";
import AboutUs from "./aboutus";
import Home from "./Home";
import Fruits from "./Fruits";
import Cart from "./Cart";
import Shopping from "./shopping";
import Orderdelivery from "./orderdelivery";
import { jwtDecode } from 'jwt-decode';

function App()
{
  const [loggedIn, setLoggedIn] = useState(false); // bejelentkezés állapot
  const [username, setUsername] = useState(""); // felhasználónév állapot
  const navigate = useNavigate;

  useEffect(() =>
  {
    const loggedInStatus = localStorage.getItem("loggedIn");
    const username = localStorage.getItem("username");
    const token = localStorage.getItem("token");

    if (loggedInStatus === "true" && username && token)
    {
      setLoggedIn(true);
      setUsername(username);
    }
  }, []);

  const handleLogout = () =>
  {

    localStorage.removeItem("loggedIn");
    localStorage.removeItem("username");
    localStorage.removeItem("token");
    setLoggedIn(false);
    setUsername("");
    window.location.href = "/";
    toast.success("Viszlát!", { autoClose: 1000 });

  };

  const handleLogin = () =>
  {

  };

  return (
    <div>
      <Router>
        <nav className="navbar navbar-expand-sm navbar-dark bg-orange">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink to={`/`} className="nav-link">
                  <span className="nav-link">Főoldal</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={`/Fruits`} className="nav-link">
                  <span className="nav-link">Termékek</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={`/contact`} className="nav-link">
                  <span className="nav-link">Kapcsolat</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={`/aboutus`} className="nav-link">
                  <span className="nav-link">Rólunk</span>
                </NavLink>
              </li>
              {
                loggedIn ?
                  <>
                    <li className="nav-item">
                      <NavLink to={`/orderdelivery`} className="nav-link">
                        <span className="nav-link">Rendelési információk</span>
                      </NavLink>
                    </li>

                    <li className="nav-item">
                      <NavLink to={`/Cart`} className="nav-link">
                        <span className="nav-link">Kosár</span>
                      </NavLink>
                    </li>

                  </>
                  :
                  null
              }


            </ul>
            <ul className="navbar-nav ms-auto">
              {loggedIn ? (
                <>
                  <li className="nav-item nav-link">Üdv, {username}!</li>
                  <button className="btn btn-danger btn-rounded" onClick={handleLogout}>Kijelentkezés</button>
                  <NavLink to="/Cart" className="nav-link">
                    <i className="bi bi-basket-fill"></i> (
                    {JSON.parse(localStorage.getItem(`${jwtDecode(localStorage.getItem("token")).name[0]}`))?.length || 0})
                  </NavLink>
                </>
              ) : (
                <>
                  <NavLink id="" style={{ textDecoration: "none" }} to={"/Login"}>
                    <li className="nav-item nav-link">Bejelentkezés</li>
                  </NavLink>
                  <NavLink id="registration" style={{ textDecoration: "none" }} to={"/Registration"}>
                    <li className="nav-item nav-link">Regisztráció</li>
                  </NavLink>
                </>)}
            </ul>
          </div>
        </nav>
        <Routes>
          <Route path="/contact" exact element={<Contact />} />
          <Route path="/" exact element={<Home />} />
          <Route path="/aboutus" exact element={<AboutUs />} />
          <Route path="/Login" exact element={<Login />} />
          <Route path="/Registration" exact element={<Registration />} />
          <Route path="/Fruits" exact element={<Fruits />} />
          {
            localStorage.getItem("token") ? <Route path="/Cart" exact element={<Cart />} /> : null
          }

          <Route path="/shopping" exact element={<Shopping />} />
          <Route path="/orderdelivery" exact element={<Orderdelivery />} />
        </Routes>
      </Router>
      <ToastContainer />

      {/*LÁBLÉC KEZDETE*/}
      <footer className="text-center text-lg-start bg-orange text-muted">
        <section>
          <div className="container text-center text-md-start ">
            <div className="row ">
              <div className=" col-auto col-md-auto col-lg-4 col-xl-3 mx-auto mb-4">
                <br></br>
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="white-color">ÉdenKert Webshop</i>
                </h6>
                <p className="white-color">
                  Szeretettel köszöntjük az ÉdenKert honlapján!
                </p>
                <img title="goelogo" decoding="async" src="/img/logo.png" alt="brand" width="240" height="120" />
              </div>

              <div className="col-auto col-md-auto col-lg-4 col-xl-4 mx-auto mb-md-0 mb-4">
                <br></br>
                <h6 className="text-uppercase fw-bold mb-4 white-color">
                  Elérhetőség:
                </h6>
                <ul>
                  <li className="white-color">
                    Cím:3525 Miskolc, Palóczy László utca 3.
                  </li>
                  <li className="white-color">Telefon: +36 46 500 930</li>
                  <li className="white-color footermargin">
                    E-mail:gardenofeden@gmail.com
                  </li>
                </ul>
                <a target="_blank" rel="noreferrer" href="https://www.kkszki.hu/">
                  <img src="/img/kkszki.png" decoding="async" title="kandologo" alt="brand" width="100" height="100" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </footer>
      {/*Lábléc vége*/}
    </div>
  );
}

export default App;
