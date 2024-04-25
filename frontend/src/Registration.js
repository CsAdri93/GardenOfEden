import { useNavigate } from "react-router-dom";
import "./App.css";
import { toast } from "react-toastify";

function GenerateSalt()
{
  let salt = "";
  let possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < 64; i++)
  {
    salt += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return salt;
}

export function Registration()
{

  const navigate = useNavigate();
  return (
    <div className="p-5 m-auto text-center content img-up">
      <div className="login-registration-form ">
        <h2>Regisztráció</h2>
        <form
          onSubmit={(event) =>
          {
            event.persist();
            event.preventDefault();

            fetch(`https://localhost:7256/auth/register`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                username: event.target.elements.username.value,
                password: event.target.elements.password.value,
                fullname: event.target.elements.fullname.value,
                email: event.target.elements.email.value,

              }),
            })
              .then((response) =>
              {
                if (!response.ok)
                {
                  throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response;
              })
              .then((data) =>
              {
                console.log(data);
                if (data.ok)
                {
                 
                  toast.success("Sikeres regisztrálció!", { autoClose: 4000 });
                  toast.success("Kérem hitelesítse regisztrálcióját e-mail fiókjába kapott e-mailen!", { autoClose: 4000 });
                  navigate("/");
                } else
                {
                }
              })
              .catch((error) => console.log(error));
          }}
        >
          <div className="form-group">
            <label htmlFor="registration-username">Teljes név:</label>
            <input title="fullname" type="text" name="fullname" className="form-control" required />
          </div>
          <div className="form-group">
            <label htmlFor="registration-email">Email cím:</label>
            <input title="email" type="email" name="email" className="form-control" required />
          </div>
          <div className="form-group">
            <label htmlFor="registration-username">Felhasználónév:</label>
            <input title="username" type="text" name="username" className="form-control" required />
          </div>
          <div className="form-group">
            <label htmlFor="registration-password">Jelszó:</label>
            <input title="password" type="password" name="password" className="form-control" required />
          </div>
          <button type="submit">Regisztráció</button>
        </form>
      </div>
    </div>
  );
}

export default Registration;
