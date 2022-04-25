import { useContext, useState } from "react";
import { AuthContext } from "../Context/authContext";


export const Login = () => {
  //  use reqres to log user in.

  // const { toggleAuth } = useContext(AuthContext)
  // const [login, setLogin] = useState({
  //   email: "",
  //   password: "",
  // })
  // const [form, setForm] = useState([]);
  // const handleChange = (e) => {
  //   let { name, value } = e.target;
  //   setLogin({
  //     ...login,
  //     [name]: value
  //   })
  // }
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setForm([...form, login]);
  //   console.log("submit", form);
  //   fetch("https://reqres.in/api/login", {
  //     method: "POST",
  //     body: JSON.stringify(login),
  //     headers: {
  //       "Content-Type": "application/json"
  //     }
  //   })
  //     .then(res => res.json())
  //     .then((res) => {
  //       if (res.error) {
  //         alert("Please give vaild email I'D and password ");
  //       } else {
  //         console.log(res.token);
  //         toggleAuth(res.token);
  //       }
  //     })
  // }

  //onSubmit={handleSubmit} onChange={handleChange}
  return (
    <form className="loginform" >
      <input
        name="username"
        type="text"
        placeholder="Enter username"
        className="login_username"
        
      />
      <input
        name="password"
        type="text"
        placeholder="Enter password"
        className="login_password"
        
      />
      <input type="submit" value="SIGN IN" className="login_submit" />
    </form>
  );
};
