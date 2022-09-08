import React, {useState,useEffect} from 'react' 
import './HeaderCategorySelectBox.css'
function HeaderCategorySelectBox({categorys}) {
    
    const [category, setCategory] = useState([]);
      
         useEffect(() => {
            console.log(category);
         }, [category])
    
    return (
        < div className="select">
            <select  id='categorySelect'  className='header__selectbox' onChange={(e)=>{setCategory(e.target.value) }}>
             <option defaultValue>Select Category</option>
            { categorys.map((category,index) => {
            return (<option key={index} value={category}>{category}</option>);
            })}
            </select>
        </div>
    )
}

export default HeaderCategorySelectBox
