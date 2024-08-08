import "../../assets/css/components/layout/header.css";

const Header = () => {
  return (
    <header className="row">
      <div>
        <a href="callto:+33768247100">
          <p>CONCTATEZ NOUS</p>
          <p className="fw-bold">+33 7 68 24 71 00</p>
        </a>
      </div>
      <div></div>
      <div></div>
    </header>
  );
};

export default Header;
