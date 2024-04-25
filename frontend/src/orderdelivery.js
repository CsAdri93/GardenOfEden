import { NavLink } from "react-router-dom";
import React, { useEffect } from "react";

export function Orderdelivery() {

  return (
    <div className="p-5 m-auto text-center content img-up">
      <div id="loyaltyprogram" className="container-fluid scrollspy">
        <h1>Rendelési tudnivalók</h1>
        <hr />
        <p>
          Már regisztrálció nélkül is tudsz rendelést leadni. Amennyiben a regisztrálció sikeres akkor egy megerősítő emailt fogsz kapni a megadott email címre, validáció után pedig érvényes lesz a regisztrációd.
        </p>
        <p>Bármilyen probléma vagy nehézség adódik, fordulj hozzánk bizalommal!</p>
        
        <h5>A legfontosabb tudnivalók:</h5>

        <div className="row mt-3">
          <div className=" col-auto col-md-auto col-lg-4 col-xl-3 mx-auto mb-4">
            <br />
            <h6 className="text-uppercase fw-bold mb-4">
              <i className="bold-white-color">Kosárbatevés:</i>
            </h6>
            <i className="bi bi-cart-check-fill" style={{ fontSize: "130px" }}></i>
            <hr />
            <p className="justify">
              A kosár tartalmát és végösszegét megtekintheted a "Kosár" menüelemet választva. A lista alján megjelenő "Tovább a megrendeléshez" gombra kattintva kitöltheted a szükséges adatokat, amivel megrendelheted a kívánt gyümölcsöket.
            </p>
          </div>

          <div className=" col-auto col-md-auto col-lg-4 col-xl-3 mx-auto mb-4">
            <br></br>
            <h6 className="text-uppercase fw-bold mb-4">
              <i className="bold-white-color">Fizetés:</i>
            </h6>
            <i className="bi bi-wallet" style={{ fontSize: "130px" }}></i>
            <hr></hr>
            <p className="justify">
              Jelenleg csak utánvétes fizetésre van lehetőség minden kiszállítási mód esetében.
            </p>
          </div>

          <div className=" col-auto col-md-auto col-lg-4 col-xl-3 mx-auto mb-4">
            <br />
            <h6 className="text-uppercase fw-bold mb-4">
              <i className="bold-white-color">Szállítás:</i>
            </h6>
            <i className="bi bi-truck" style={{ fontSize: "130px" }}></i>
            <hr />
            <p className="justify">
              3 fajta szállítás forma közül lehet választani:
            </p>
            <ul>
              <li>Csomagautomata</li>
              <li>Futárszolgálat</li>
              <li>Postán maradó csomag</li>
            </ul>
          </div>

          <hr></hr>
          <h4>Amennyiben regisztrálni szeretnél:</h4>

          <NavLink style={{ textDecoration: "none" }} to={"/Registration"}>
            <button id="registration" type="button" className="btn btn-success btn-rounded">Regisztrálció</button>
          </NavLink>

        </div>
      </div>
    </div>
  );
}

export default Orderdelivery;
