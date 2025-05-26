import sp from '../assets/sp.png';

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light ">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img className="mb-2" src={sp} alt="" width="50" />
          <span className="h4"> DreamNest</span>
        </a>
        {/* 
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Features</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Pricing</a>
            </li>
          </ul>
          
        </div>
        */}
        <span className="navbar-text">
            讓我們陪你一起「做」夢
          </span>
      </div>
    </nav>
  );
}

export default Navbar;
