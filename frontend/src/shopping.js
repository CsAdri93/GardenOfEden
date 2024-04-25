import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from 'jwt-decode';

export function Shopping()
{
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem(`${jwtDecode(localStorage.getItem("token")).name[0]}`)) || [{ fruitId: 0 }]
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

  const navigate = useNavigate();
  const fruitId = cart.length > 0 ? cart[0].id : 0;

  useEffect(() =>
  {
    if (totalAmount === 0 && cart.length === 0)
    {
      navigate("/");
    }
  }, [totalAmount, cart.length, navigate]);

  return (
    <div className="p-5 m-auto text-center content img-up">
      <div
        id="contact"
        className="container-fluid"
      >
        <h1>Megrendelés</h1>
        <hr></hr>
        <p>Kérem pontosan töltsd ki az adataidat, hogy a választott
          szállítási módon sikeresen tudjuk kézbesíteni a megvásárolt
          terméke(ke)t.</p>
        <p>Bármilyen probléma esetén forduljon hozzánk bizalommal!</p>
        {/*"Megrendelés véglegesítése" gombra kattintva megtörténik a fetch*/}
        <form onSubmit={(event) =>
        {
          event.preventDefault();
          const data = new FormData(event.target);
          const id = 0;
          const username = data.get("username");
          const email = data.get("email");
          const phonenumber = data.get("phonenumber");
          const zipcode = data.get("zipcode");
          const location = data.get("location");
          const street = data.get("street");
          const number = data.get("housenumber");
          const orderType = data.get("ordertype");
          const personalRequest = data.get("personalrequest");
          const totalAmount = totalAmount;

          const selectedFruits = JSON.parse(localStorage.getItem(`${jwtDecode(localStorage.getItem("token")).name[0]}`));
          console.log(selectedFruits);

          const totalFetches = selectedFruits.length;
          let successfulFetches = 0;

          selectedFruits.forEach((product) =>
          {
            const fruitId = product.fruitId;
            const stockNumber = 1;

            const orderDateGet = new Date().toLocaleString("hu-HU", {
              timeZone: "Europe/Budapest",
            });
            const orderDate = new Date(orderDateGet).toISOString();

            fetch("https://localhost:7268/api/Order", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                id,
                username,
                email,
                fruitId,
                stockNumber,
                orderDate,
                phonenumber,
                zipcode,
                location,
                street,
                number,
                orderType,
                personalRequest,
                totalAmount,
              }),
            })
              .then((response) =>
              {
                console.log(id);
                console.log(username);
                console.log(email);
                console.log(fruitId);
                console.log(stockNumber);
                console.log(orderDate);
                console.log(phonenumber);
                console.log(zipcode);
                console.log(location);
                console.log(street);
                console.log(number);
                console.log(orderType);
                console.log(personalRequest);
                console.log(totalAmount);
                console.log(response);
                if (!response.ok)
                {
                  throw new Error(`HTTP error! status: ${response.status}`);
                }
                if (response.ok)
                {
                  successfulFetches++;
                  if (successfulFetches === totalFetches)
                  {
                    localStorage.removeItem(`${jwtDecode(localStorage.getItem("token")).name[0]}`);
                    alert("Sikeres rendelés!");
                    navigate("/");
                    setTimeout(() =>
                    {
                      window.location.reload(true);
                    }, 1000);
                  }
                }
                return response;
              })
              .catch((error) => console.log(error));
          });
        }}
        >
          <div className="row">
            <div className="col-lg-12" id="contact-center">
              <div className="col-lg-12">
                <div className="form-floating form-group mb-3 colorblack">
                  <input type="text" name="username" className="form-control" placeholder="nev" required />
                  <label htmlFor="nev">Teljes név:</label>
                </div>
                <div className="form-floating form-group mb-3 colorblack">
                  <input type="email" name="email" className="form-control" id="email" placeholder="csapatnev@iskola.hu" required />
                  <label htmlFor="email">E-mail cím:</label>
                </div>
                <div className="form-floating form-group mb-3 colorblack">
                  <input type="tel" name="phonenumber" className="form-control" id="phonenumber" placeholder="+36123456789" required />
                  <label htmlFor="phonenumber">Telefonszám:</label>
                </div>
                <div className="row ">
                  <div className="col-md-3 form-floating form-group mb-3 colorblack">
                    <input type="text" name="zipcode" className="form-control" id="iranyitoszam" placeholder="3521" required />
                    <label htmlFor="iranyitoszam">Irányítószám:</label>
                  </div>
                  <div className="col-md-3 form-floating form-group mb-3 colorblack">
                    <input type="text" name="location" className="form-control" id="lakhely" placeholder="Miskolc" required />
                    <label htmlFor="lakhely">Település:</label>
                  </div>
                  <div className="col-md-3 form-floating form-group mb-3 colorblack">
                    <input type="text" name="street" className="form-control" id="utca" placeholder="AranyJanosutca" required />
                    <label htmlFor="utca">Közterület típusa:</label>
                  </div>
                  <div className="col-md-3 form-floating form-group mb-3 colorblack">
                    <input type="text" name="housenumber" className="form-control" id="hazszam" placeholder="11" required />
                    <label htmlFor="hazszam">Házszám:</label>
                  </div>
                </div>
                <div className="form-floating mb-3 colorblack">
                  <select className="form-select" name="ordertype" title="dropdownmenu" id="floatingInput" defaultValue={
                    "Válasszon szállítási módot:"
                  }
                    required>
                    <option disabled defaultValue={""}>Válasszon szállítási módot:</option>
                    <option value="futarszolgalat">Futárszolgálat</option>
                    <option value="csomagautomata">Csomagautomata</option>
                    <option value="postan_marado_csomag"> Postán átvehető csomag</option>
                  </select>
                </div>
                <div className="form-floating form-group mb-3 colorblack">
                  <textarea className="form-control" name="personalrequest" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: "100px" }}></textarea>
                  <label htmlFor="egyedikeres">Megjegyzés:</label>
                </div>
              </div>

              <h2>Megrendelésre váró gyümölcs/gyümölcsök:</h2>
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <ul className="list-group list-group-flush">
                      {cart.map((product, index) => (
                        <li className="list-group-item" key={index}>
                          <div className="row">
                            <div className="col-md-4">
                              <img src={"img/" + `${product.imageUrl}`} alt={product.name} style={{ maxHeight: "150px" }} className="img-fluid rounded-start d-flex align-items-center" />
                            </div>
                            <div className="col-md-8">
                              <h4 className="card-title colorblack">{product.name}</h4>
                              <p className="card-text colorblack">Ár: {product.price} Ft</p>
                              <button className="btn btn-danger" onClick={() => removeFromCart(index)}>Törlés</button>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <br></br>
              <h3>Teljes végösszeg: {totalAmount} Ft</h3>
              <hr></hr>
              <div className="col-auto">
                <button type="submit" value="Send" className="btn btn-primary">Megrendelés véglegesítése</button>
              </div>
            </div>
          </div>
        </form>

        <a target="blank" title="facebook" className="left" href="https://www.facebook.com/kandomiskolc">
          <i className="bi bi-facebook" style={{ fontSize: "30px", padding: "5px 5px 5px 5px" }}></i>
        </a>
        <a target="blank" title="gmail" className="left" href="mailto:gardenofeden@gmail.com">
          <i className="bi bi-envelope-at" style={{ fontSize: "30px" }}></i>
        </a>
      </div>
    </div>
  );
}

export default Shopping;
