import "./style.css";
import logoNav from "../../assets/logo-site-com-sigla-branco-e1697733233806.png";
import imgSair from "../../assets/saiir.png";
import imgLogo from "../../assets/logo-ce-sedih.png";
import MainPanel from "../MainPanel/MainPanel";
import { Link } from "react-router-dom";

export default function Panel() {
  return (
    <>
      <header className="header-container">
        <nav className="nav-container">
          <img className="img-logo-sedih" src={logoNav} alt="Logo SEDIH" />
          <Link to="/">
            <a href="#home">
              <img className="img-sair" src={imgSair} alt="Sair" />
            </a>
          </Link>
        </nav>
      </header>
      <main>
        <section id="section-main">
          <div className="p-card-title"> PLANEJAMENTO e GESTÃO - SEDIH </div>
          <MainPanel />
        </section>
      </main>
      <footer>
        <div className="footer-container">
          <a
            className="container-f-img"
            href="http://WWW.DIREITOSHUMANOS.CE.GOV.BR"
          >
            <img src={imgLogo} alt="Logo Ceará - SEDIH" />
          </a>
          <div className="container-f">
            <p>
              <br/>
              Sede da Secretaria dos Direitos Humanos
              <br />
              Rua Valdetário Mota, 970 - Papicu
              <br />
              Fortaleza, CE
              <br />
              CEP: 60175-742
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
