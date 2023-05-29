import styled from "styled-components";
import { Link } from "react-router-dom";


const NavButtons = () => {    

  return (
    <NavUl>
      <Link style={LogoStyle} to='/'>SaleSlash</Link>
    <NavLi>
      <Link style={LinkStyle} to="/">Home</Link>
    </NavLi>
    <NavLi>
      <Link style={LinkStyle} to="/cart">Cart</Link>
    </NavLi>
    </NavUl>
  );
}

const NavUl = styled.ul`
display:flex;
list-style-type: style none;
justify-content:space-between;
`
const NavLi = styled.li`
display:flex;
align-items:center;
`

const LinkStyle = {
  color: 'black',
  fontWeight:'800',
  textDecoration:'none',
  marginLeft: '10px',
}

const LogoStyle = {
  background: "rgb(195,132,34)",
  background: "radial-gradient(circle, rgba(195,132,34,1) 0%, rgba(161,35,53,0.8169861694677871) 100%)",
  borderRadius: "9px",
  fontWeight:"800",
  color:"white",
  textDecoration:"none",
  padding:"5px",
  border:"solid thin white",
  borderStyle:"8px",
}
export default NavButtons;