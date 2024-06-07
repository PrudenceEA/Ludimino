import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import Link from "next/link"; 
// import 'bootstrap-icons/font/bootstrap-icons.css'


export default function MobileHeader() {
  return (
    <div>
      <nav className="nav nav-pills nav-justified bg-danger">
        <div>
          <a className="navbar-brand nav-link" href="/">
            <Image
              src={"/Fichier 1_lowres.png"}
              alt="Ludimino"
              width={100}
              height={73}
            />
          </a>
        </div>
        <nav className="navbar navbar-dark bg-dark">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarToggleExternalContent"
              aria-controls="navbarToggleExternalContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </nav> 
        <div
          className="collapse"
          id="navbarToggleExternalContent"
          data-bs-theme="dark"
        >
          <div className="bg-dark p-4">
            <h5 className="text-body-emphasis h4">Collapsed content</h5>
            <span className="text-body-secondary">
              Toggleable via the navbar brand.
            </span>
          </div>
        </div>
        <div className="container-fluid" data-bs-theme="dark">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li>
                <a className="nav-link" href="#" role="button">
                  {" "}
                  Chicken{" "}
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="nav-link" href="#" role="button">
                  {" "}
                  Beef{" "}
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="nav-link" href="#" role="button">
                  {" "}
                  Sushi{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <a className="nav-link" href="/">
          <i className="bi bi-bag-fill"> </i> Link 
        </a>
        <a
          className="nav-link disabled"
          href={"/https://www.instagram.com/ludimino_jeu/"}
        >
          <Image src={"/insta.png"} alt="Ludimino" width={50} height={50} />
        </a>
      </nav>
    </div>
  );
}
