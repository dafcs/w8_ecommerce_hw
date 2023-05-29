import styled from "styled-components"

const NavSearch = ({handleChange}) => {


//    const filtereditems = .filter(name => name.includes('J')).map(filteredName => (
//     <li>
//       {filtereditems}
//     </li>
//   ))}


    return (
        <InputStyle type="input" onChange={handleChange}>
        </InputStyle>

    )
}

const InputStyle = styled.input`
border-radius:5px;
width:10rem;
`

export default NavSearch