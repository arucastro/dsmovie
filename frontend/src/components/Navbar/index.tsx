import {ReactComponent as GithubLogo} from "assets/img/GithubLogo.svg"
import "./styles.css"
function Navbar(){
    return (
        <header>
          <nav className="container">
            <div className="dsmovie-nav-content">
              <h1>DSMovie</h1>
              <a href="https://github.com/arucastro" target="_blank" rel="noreferrer">
                <div className="dsmovie-contact-container">
                  <GithubLogo/>
                  <p className="dsmovie-contact-link">/arucastro</p>
                </div>
                </a>
            </div>
          </nav>
        </header>
      );
}

export default Navbar