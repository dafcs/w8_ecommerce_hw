import styled from "styled-components"

const CategoryList = ({allItems,}) => {

    const categories = allItems.map((item) => {
        return item.category
    })
    
    const parsedList = Array.from(new Set(categories)).map((item,index) => {
        return (
            <>
            <label key={item.name} for={item}>{item}</label>
            <input key ={index} type="checkbox" id={index} name={item} value={item}/>
            </>)
    }
        )
    
    return (

        <ul>
            {parsedList}
        </ul>

    )
}

const parsedUL = styled.ul`
display:flex;
`

export default CategoryList