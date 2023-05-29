import styled from "styled-components";
import ItemList from "./ItemList";
import CategoryList from "./CategoryList";

const Home = ({allItems,onItemClicked}) => {


  return (
  <HomeContainer>
    {/* <CategoryList allItems={allItems} /> */}
    <ItemList allItems={allItems} onItemClicked={onItemClicked}/>
  </HomeContainer>
  )
};

const HomeContainer = styled.div`
display:flex;
`
export default Home;
