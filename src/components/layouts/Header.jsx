// Css import
import "../../assets/css/components/layout/header.css";

const Header = () => {
  return (
    <header>
      <div className="header-row row">
        <p className="text-center mt-1">
          Profitez du meilleur de la guitare à super prix !
        </p>
      </div>

      <div className="header-row row">
        <div className="col-md-12 text-lg-end my-3">MON COMPTE</div>
      </div>

      <div className="header-row row justify-content-around align-items-center">
        <div className="col-md-4">
          <a className="d-flex" href="callto:+33768247100">
            <div>
              <i className="fa-solid fa-phone"></i>
            </div>

            <div>
              <p>CONCTATEZ NOUS</p>
              <p className="fw-bold">+33 7 68 24 71 00</p>
            </div>
          </a>
        </div>

        <div className="col-md-4 d-flex justify-content-center">
          <img
            className="header-logo"
            src="/assets/img/logo-guitarmaniac.png"
            alt="LOGO"
          />
        </div>

        <div className="col-md-4 d-flex justify-content-end">
          <div>
            <i className="fa-solid fa-cart-shopping"></i>
          </div>

          <div>
            <p>MON PANIER</p>
            <p className="fw-bold">0 PRODUITS</p>
          </div>
        </div>
      </div>

      <nav className="header-navbar header-row row py-4">
        <ul className="m-0 d-flex justify-content-center col-md-12">
          <li>
            <a href="#">GUITARES</a>
          </li>
          <li>
            <a href="#">BASSES</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
