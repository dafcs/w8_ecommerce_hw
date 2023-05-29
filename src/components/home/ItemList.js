import styled from 'styled-components'

const ItemList = ({allItems,onItemClicked}) => {

  const handleClick = function(event) {
    // console.log(event.target.value)
    const id = event.target.value -1
    // console.log(allItems)
    const item = allItems[id]
    // console.log(item)
    onItemClicked(item)
  }


    const myItems = allItems.map(item => (
        <LiContainer key={item.id}>
            <ItemImg src={require('./placeholder.jpg')} alt={item.name} />
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
            <button value={item.id} onClick={handleClick}>Add</button>
            </ItemDetails>
        </LiContainer>
      ))
    return (
        <UlContainer>
        {myItems}
        </UlContainer>
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



export default ItemList