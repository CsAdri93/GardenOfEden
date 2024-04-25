import React, { useState, useEffect } from 'react';
import { toast } from "react-toastify";
import { jwtDecode } from 'jwt-decode';

const Fruits = () =>
{
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() =>
  {
    const fetchData = async () =>
    {
      try
      {
        const response = await fetch('https://localhost:7268/api/Fruit');
        if (!response.ok)
        {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setProducts(data);
      } catch (error)
      {
        console.error('Error fetching data:', error);
      } finally
      {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleAddToCart = (product) =>
  {
    const existingCart = localStorage.getItem(`${jwtDecode(localStorage.getItem("token")).name[0]}`);
    if (!existingCart)
    {
      localStorage.setItem(`${jwtDecode(localStorage.getItem("token")).name[0]}`, JSON.stringify([product]));
      toast.success("Gyümölcs hozzáadva a kosárhoz!");
    } else
    {
      const cart = JSON.parse(existingCart);
      cart.push(product);
      localStorage.setItem(`${jwtDecode(localStorage.getItem("token")).name[0]}`, JSON.stringify(cart));
      toast.success("Gyümölcs hozzáadva a kosárhoz!", { autoClose: 2000 });
    }
    setTimeout(() =>
    {
      window.location.reload(true);
    }, 3500);
  };

  return (
    <div className="p-5 m-auto text-center content img-up">
      <div className="container">
        <h2>Édenkert gyümölcsei</h2>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="row">
            {products.map((product) => (
              <div key={product.fruitId} className="col-md-3 mb-4">
                <div className="p-4 m-auto card">
                  <img src={`img/${product.imageUrl}`} className="card-img-top mx-auto" alt={product.imageUrl} />
                  <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">Price: {product.price} Ft/kg</p>
                    <button type="button" className="btn btn-success btn-rounded" onClick={() => handleAddToCart(product)}>Kosárba</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Fruits;