
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { logoCourse } from '../../Utils/constants';
import { IoCartOutline } from "react-icons/io5";
import Badge from 'react-bootstrap/Badge';
import {useCart} from'../../Context/CartContext';
import './header.css';
const Header=()=>{
    const { cartItems } = useCart();
    return(<div> <Navbar bg="light" data-bs-theme="light">
    <Container  className='header'>

        <div>
      <Navbar.Brand > <img style={{width:'100px'}} src={logoCourse} alt ='logo'/></Navbar.Brand>
      </div>
      <Nav className="me-auto">
      <Nav.Link as={Link} exact activeClassName="active" to="/">Home</Nav.Link>
                    <Nav.Link as={Link} activeClassName="active" to="/courses">Courses</Nav.Link> 
                    <Nav.Link as={Link} activeClassName="active" to="/cart" className='cart'><IoCartOutline style={{ fontSize: '30px' }} />
                    <Badge bg="primary" className="ms-1 badgeCart">{cartItems.length}</Badge></Nav.Link> 
      </Nav>
    </Container>
  </Navbar></div>);
    }
    export default Header;