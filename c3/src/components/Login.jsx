import { useContext, useState } from "react";
import { AuthContext } from "../Context/authContext";


export const Login = () => {
  const [user, setUser] = useState({username:"", password:""});
    const {toggleAuth, isLogin, setIsLogin} = useContext(AuthContext);
    const [token, setToken] = useState("");

    const handleChange = (e)=>{
        let {name, value} = e.target;
        setUser({...user, [name]:value});
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        fetch(`https://reqres.in/api/login`, {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((res) => res.json())
            .then((res) => {
                if (res.token) {
                    setIsLogin(true);
                    setToken(res.token);
                    console.log(token)
                    toggleAuth(true);
                    alert("login Successful")
                    

                } 
            })
    }
   

  return (
    <form className="loginform" onSubmit={handleSubmit}>
      <input
        name="username"
        type="text"
        placeholder="Enter username"
        className="login_username"
        onChange={handleChange}
        
      />
      <input
        name="password"
        type="text"
        placeholder="Enter password"
        className="login_password"
        onChange={handleChange}
        
      />
      <input type="submit" value="SIGN IN" className="login_submit" />
    </form>
  );
};
