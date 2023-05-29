import styled from "styled-components";
import NavButtons from "./NavButtons";
import NavSearch from "./NavSearch";


const NavBar = ({onMouseEnter,onMouseLeave,handleChange}) => {    


  return (
    <NavContainer>
    <NavButtons 
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    />
    <NavSearch onChange={handleChange}/>
    </NavContainer>
  );
}

const NavContainer = styled.div`
display:flex;
align-items:center;
height:3rem;
background: rgb(195,132,34);
background: radial-gradient(circle, rgba(195,132,34,1) 0%, rgba(161,35,53,0.8169861694677871) 100%);
`
export default NavBar;