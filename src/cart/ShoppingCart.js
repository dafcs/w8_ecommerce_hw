import styled from "styled-components";
const ShoppingCart = ({cartList,}) => {

    // const handleRemoveClick = (event) => {
    //     const item = cartList[event.target.value-1]
    //     selectedItem(item)
    // }

    let list;
    if (cartList) {
      list = cartList.map((item) => {
        return (        
        <LiContainer key={item.id}>
            {/* <ItemImg src={require('../home/placeholder.jpg')} alt={item.name} /> */}
            <ItemDetails>
                <Box>
                    <ItemTitle>{item.name}</ItemTitle>
                    <ItemDetail>Price: £{item.price}</ItemDetail>
                    <ItemDetail>Stock: {item.stock}</ItemDetail>
                </Box>
                <Box>
              {/* <ItemDetail>Description: {item.description}</ItemDetail> */}
                    <ItemDetail>Category: {item.category}</ItemDetail>
                </Box>
            {/* <button value={item.id} onClick={handleRemoveClick}>Add</button> */}
            </ItemDetails>
        </LiContainer>)
      });
    } else {
      list = null;
    }

    return (
        <ul>
            {list}
        </ul>
    )
}

const UlContainer = styled.ul`
display:flex;
flex-direction:column;
flex-wrap:wrap;
`

const LiContainer = styled.li`
display:flex;
margin-bottom:1rem;
border:solid thin black;
`
const ItemTitle = styled.h3`
margin:0;
`

const ItemImg = styled.img`
width:30%;
height:5rem;
`
const ItemDetails = styled.div`
display:flex;
gap:1rem;
width:15rem;
height:10rem;
`
const ItemDetail = styled.p`
padding:0;
margin:0;
`
const Box = styled.div`
display:flex;
flex-direction:column;
gap:10px;
`
export default ShoppingCart