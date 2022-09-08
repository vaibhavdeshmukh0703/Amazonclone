import React,{ useState, useEffect} from 'react'
import IMAGE_UPLOAD from './UploadProduct_ImageUpload'
import './UploadProduct.css';   
import Picture from '../../image/profile.jpeg'
import { red } from '@material-ui/core/colors';
function UploadProduct() {
    const categorys = ['Food','Electronics','Grocery','Medicine'];
    const fileObjects = [];
    const fileArray=[];
     const [category, setCategory] = useState('');
     const [productName, setProductName] = useState('');
     const [quantity, setProductQuantity] = useState('');
     const [price, setProductPrice] = useState('');
     const [shopName, setShopName] = useState('');
     const [productReturnable, setProductReturnable] = useState('')
    
    const handleSubmit =(e)=>{
        e.preventDefault();
       console.log(category,productName,quantity,price,shopName,productReturnable);
    }
   return (
        <div className='UploadProduct'>

            <div className='UploadProduct__header'>
                <span className='UploadProduct__headerName'>Upload Product</span>
            </div>

            <div className='UploadProduct__form'>
               
                <form method='POST' onSubmit={handleSubmit}>
                    
                    <div className='upload__shopName'>
                        <label> Shop Name </label><br />
                        <input type="text" name="shopName" placeholder="Enter Shop Name" onChange={(e)=>{
                            setShopName(e.target.value)}} />  
                    </div>

                   <div className='upload__category'>
                        <label> Category </label><br />
                        <select  id=''  className='upload__productCategory' onClick={(e)=>{setCategory(e.target.value) }}>
                            <option defaultValue>Select Category</option>
                            { categorys.map((category,index) => {
                            return (<option key={index} value={category}>{category}</option>);
                            })}
                         </select>                        
                    </div>
                   
                    <div className='upload__productName'>
                        <label> Product Name </label><br />
                        <input type="text" name="productName" placeholder="Enter Product Name" onChange={(e)=>{
                            setProductName(e.target.value)}} />  
                    </div>

                    <div className='upload__quantity'>
                        <label> Product quantity </label><br />
                        <input type="number" name="productQuantity" placeholder="Enter Product Quantity" onChange={(e)=>{
                            setProductQuantity(e.target.value)}} />  
                    </div>

                    <div className='upload__price'>
                        <label> Product Price</label><br />
                        <input type="number" name="productPrice" placeholder="Enter Product Price" onChange={(e)=>{
                            setProductPrice(e.target.value)}} />  
                    </div>

                    <div className='upload__IsProductReturnable'>
                        <label>Product Returnable</label><br />
                        <input type="text" name="productReturnable" placeholder="Enter Returnable or Not" onChange={(e)=>{
                            setProductReturnable(e.target.value)}} />  
                    </div>

                    <button>SUBMIT</button>
                    
                </form>

                <div className='uploadProduct__preview'>
                    <h3>Uploaded Image Preview</h3>
                    <h5 style={{color: "red"}}><strong>NOTE :</strong> Insert max 4 Images Per Product</h5>
                    
                    {/* { images.length ? 
                        images.map((image,index)=>{
                            return ( <div key={index} className='uploadProduct__imagePreview'>
                                <img  src={image} alt='Selected Pic'/>
                              </div>)
                        }) : <div className="uploadProduct__notImage"><label>Please select an Image for Preview</label></div>} */}
                     <IMAGE_UPLOAD/>
                </div>
            </div>
            
        </div>
    )
}

export default UploadProduct;
