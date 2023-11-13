import { Link } from "react-router-dom";

export default function SignUp() {
    const onSubmit = (e) => {
        e.preventDefault();
    };
    return (
        <div className="login-signup-form animated fadeInDown">
            <div className="form">
                <form onSubmit={onSubmit}>
                    <h1 className="title">Register a new account</h1>
                    <input type="text" placeholder="First & Last name" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <input type="password" placeholder="Re-Enter password" />
                    <button className="btn btn-block">Register</button>
                    <p className="message">
                        Already have an account?{" "}
                        <Link to="/login">Login here!</Link>
                    </p>
                </form>
            </div>
        </div>
    );
}
