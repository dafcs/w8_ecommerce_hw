import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyData from './MyData';
import NavBar from './components/nav/NavBar';
import Home from './components/home/Home';
import ItemDetail from './components/detail/ItemDetail';
import ErrorPage from './ErrorPage';
import ShoppingCart from './cart/ShoppingCart';


function App() {

  //listing
  const [allItems,setAllItems] = useState(MyData.products)
  const [filteredItems,setFilteredItems] = useState([])
  const [categoryList,setCategoryList] = useState([])
  const [cartList,setCartList] = useState([])
   
  //selection


  //Nav handling
  const [isHover,setIsHover] = useState(false)
  const [searchItem,setSearchItem] = useState('')
  const [selectedItem,setSelectedItem] = useState('')
  const [selectedCategory,setSelectedCategory] = useState('')

  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const handleChange = (event) => {
      setSearchItem(event.target.value);
    };
  
  const onItemClicked = function(selectedItem) {
    // console.log(selectedItem)
    if (selectedItem) {
    let newcartList
    if (cartList) {
      newcartList = [...cartList, selectedItem];
      setCartList(newcartList);}
    else {
      setCartList([])
    }
    } else{
      setSelectedItem(null)
    }
  }

  return (
    <Router>
      <NavBar 
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      />
      <Routes>
        <Route 
        path='/' 
        element={<Home 
        allItems={allItems} 
        onChange={handleChange}
        onItemClicked={onItemClicked}
        />}/>
        <Route 
        path='/cart' 
        element={<ShoppingCart cartList={cartList}/>}
        />
        <Route 
        path='/items/:item' 
        element={<ItemDetail/>}
        />
        <Route 
        path="*" 
        element={< ErrorPage />}
        />
      </Routes>
    </Router>

  );
}

export default App;


  
  // const filteredResults = useMemo(() => allItems.filter((item)=> {
    
    
  //   if (!selectedCategory) {
  //     return (item.name.toLowerCase().includes(searchItem.toLowerCase()))
  //   } else (selectedCategory) => {
  //     return (item.category === selectedCategory)
  //   }
  // }), [SelectedCategory,searchItem])

//   const filteredCountries = useMemo(() => countries.filter((country) => {
//     return country.name.common.toLowerCase().includes(searchTerm.toLowerCase());
//   }), [countries, searchTerm])

//   return (
//     <FilteredSearchWrapper>
//       <div>
//         Search: <SearchInput type="text" onChange={handleSearch} value={searchTerm} />
//       </div>
//       <CountryList countries={filteredCountries}></CountryList>
//     </FilteredSearchWrapper>
//   );
// }