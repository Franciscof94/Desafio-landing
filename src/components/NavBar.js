import "../css/navbar.css";
import logo from "../image/logo.png";
import User from "./User";
import Cart from "./CartWidget";
import Search from "./Search"


function NavBar() {
    return (
        <div className="navBar">
			<img src={logo} alt="logo" className="logo" />
            <nav className="navbar navbar-dark bg-primary">
				<ul className="navbar-nav"> 
					<li><a className="nav-item nav-link" href="#">Inicio</a></li>
					<li><a className="nav-item nav-link" href="#">Productos</a></li>
					<li><a className="nav-item nav-link" href="#">Quienes somos</a></li>
					<li><a className="nav-item nav-link" href="#">Como comprar</a></li>
					<li><a className="nav-item nav-link" href="#">Contacto</a></li>
				</ul>
			</nav>
			<div className="iconContainer">
			    <User />
				<Cart />

				<Search />
			</div>
        </div>
    )
}

export default NavBar;