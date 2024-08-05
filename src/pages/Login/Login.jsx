import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import imgLogo from "../../assets/logo-ce-sedih.png";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <body className="body-container">
      <main>
        <section>
          <div className="container">
            <div className="img-logo">
              <img src={imgLogo} alt="Logo Sedih" />
            </div>
            <div className=" mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                E-mail
              </label>
              <input
                type="email"
                className="form-control"
                placeholder="Digite seu e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                placeholder="**********"
                value={password}
                onChange={(p) => setPassword(p.target.value)}
              />
            </div>
            <button type="button" className="btn btn-success">Entrar</button>
          </div>
        </section>
      </main>
    </body>
  );
}
