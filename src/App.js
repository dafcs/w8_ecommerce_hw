import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {

    //listing
  const [allItems,setAllItems] = useState('')
  const [filteredItems,setFilteredItems] = useState('')
  const [categoryList,setCategoryList] = useState('')

    //selection

  const [selectedItem,setSeletecItem] = useState('')

  const handleFilter = () => {
    
  }

  return (
    <Router>
      <Routes>
        <Route/>
      </Routes>
    </Router>
  );
}

export default App;

