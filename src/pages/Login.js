import '../css/login.css'
import {useState} from "react";
import {useNavigate} from "react-router-dom";
const Login = ({onLogin}) => {
    let navigate = useNavigate();

    // Form state
    const [email, setEmail] = useState('admin@gmail.com');
    const [password, setPassword] = useState('admin')

   function handleLoginUser(e) {
      e.preventDefault();
       onLogin();
       navigate("/profile");
    }
    return (
        <div className="container">
            <div className="login border">
                <form>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                        <input type="email" className="form-control"
                               value={email}  onChange={(e)=>setEmail(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type="password" className="form-control" onChange={(e)=>setPassword(e.target.value)}
                               value={password} />
                    </div>
                    <button className="btn btn-success btn-block" onClick={(e) =>handleLoginUser(e)}>Sign in</button>
                </form>
            </div>
        </div>
    );
};

export default Login
