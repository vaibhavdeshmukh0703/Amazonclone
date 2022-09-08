import React from 'react'
import './UploadProduct_ImageUpload.css'

import ImageUploading from 'react-images-uploading';
function UploadProduct_ImageUpload() {
    console.log('Inside image upload component')
    const [images, setImages] = React.useState([]);
    const maxNumber = 4;
    
    const uploadImage=()=>{
      alert('Image Uploaded succesfully');
    }
    const handleImageChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };
    return (
        <>
            <ImageUploading
        multiple
        value={images}
        onChange={handleImageChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps
        }) => (
          // write your building UI
          <div className="upload__image-wrapper">
            {/* <input type='file'  name="productImage"  onChange={onImageUpload} multiple/>  */}
            <button
              style={isDragging ? { color: "red" } : null}
              onClick={onImageUpload}
              {...dragProps}
            >
              Select Image
            </button>
            &nbsp;
            {imageList.length ? (<button onClick={onImageRemoveAll}>Remove Images</button> ):<></>}
              &nbsp;
            {imageList.length ? (<button onClick={uploadImage}>Upload Image</button>):<></>}<br/>  
            {}

            {imageList.map((image, index) => (
              <div key={index} className='uploadProduct__imagePreview'>
                <div  className="uploadProduct__image">
                    <img src={image.data_url} alt="" />
                </div>
                <div className="image-item__btn-wrapper">
                    <button onClick={() => onImageUpdate(index)}>Update</button>&nbsp; 
                    <button onClick={() => onImageRemove(index)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </ImageUploading>
        </>
    )
}

export default UploadProduct_ImageUpload
