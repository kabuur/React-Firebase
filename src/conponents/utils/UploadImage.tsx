import React, { useState } from 'react';
import {  ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '../../firebaseConfig';


function UploadImage() {
  const [uploadedImage, setUploadedImage] = useState<File>();

  const handleImageUpload = (e:any) => {
    setUploadedImage(e.target.files[0]);
  };


  const UploadFile = () => {
    if(!uploadedImage) return
    const imageRef = ref(storage, `Cagbile/images/${uploadedImage.name}`)
    uploadBytes(imageRef, uploadedImage).then((snapshoot)=>
    getDownloadURL(snapshoot.ref).then((url)=>{
      console.log(url)
    }

    )
    )
  }

  return (
    <div>
      <input type="file" onChange={handleImageUpload} />
      <button onClick={()=>UploadFile()}>Submit</button>
    </div>
  );
}

export default UploadImage;