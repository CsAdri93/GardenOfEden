import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { jwtDecode } from 'jwt-decode';

export const Cart = () =>
{

  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem(`${jwtDecode(localStorage.getItem("token")).name[0]}`)) || []
  );
  const [totalAmount, setTotalAmount] = useState(0);

  const removeFromCart = (index) =>
  {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
    localStorage.setItem(`${jwtDecode(localStorage.getItem("token")).name[0]}`, JSON.stringify(newCart));
    window.location.reload(true);
  };

  useEffect(() =>
  {
    let sum = 0;
    cart.forEach((product) =>
    {
      sum += product.price;
    });
    setTotalAmount(sum);
  }, [cart]);

  return (
    <div className="p-5 m-auto text-center content img-up">
      <div id="contact" className="container-fluid text-dark">
        <div className="container mt-5">
          <h1 className="text-center mb-5 text-dark">Kosár</h1>
          <hr></hr>
          {cart.length === 0 ? (
            <div className="row justify-content-center">
              <div className="col-12 alert alert-info" role="alert">
                A kosár tartalma üres!
              </div>
            </div>
          ) : (
            <div className="container">
              <div className="row">
                {cart.map((product, index) => (
                  <div className="col-md-4 col-lg-4 mb-4" key={index}>
                    <div className="card h-100">
                      <div className="row g-0">
                        <div className="col-md-4">
                          <img src={`img/${product.imageUrl}`} alt={product.name} className="img-fluid rounded-start d-flex align-items-center" />
                        </div>
                        <div className="col-md-8">
                          <div className="card-body">
                            <h5 className="card-title">{product.name}</h5>
                            <p className="card-text">Ár: {product.price} Ft</p>
                          </div>
                          <div className="card-footer">
                            <button className="btn btn-danger" onClick={() => removeFromCart(index)}>Törlés</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                <h3 className="text-dark mb-5">Teljes végösszeg: {totalAmount} Ft</h3>
                <br></br>
                <NavLink style={{ textDecoration: "none" }} to={"/shopping"}>
                  <button type="button" className="btn btn-success btn-rounded btn-width">Tovább a megrendeléshez</button>
                </NavLink>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
