import React, { useEffect, useState } from "react";
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
const fadeImages=[
   { url: "https://content3.jdmagicbox.com/comp/jaipur/l8/0141px141.x141.180316163542.i9l8/catalogue/seth-g-online-grocery-store-jhotwara-jaipur-online-shopping-websites-r97og.jpg?clr=006666",
  
},
    {
        url:"https://i.pinimg.com/originals/ee/26/80/ee2680013379bc37742f99ed6fee72ea.jpg",
        
    },

   
    {
        url:"https://assets.gqindia.com/photos/608beccb6e6a489a62cd2543/master/pass/ingredients%20from%20the%20Indian%20kitchen%20for%20immunity%20building.jpeg",
        
    },
    {
        url:"https://blog.pureindianfoods.com/wp-content/uploads/category/daals-category-banner.jpg",
        
    },
    {
        url:"https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/01/dried-fruit-nuts-raisins-1296x728-header-1296x728.jpg?w=1155&h=1528",
      
    }
  ]
  let count=0;
export default function ImageChange() {
    
  return (
  <>
      <div  style={{width:"auto",height:600,color:"black",marginTop:50}}>
            
      <div className="slide-container">
      <Fade>
        {fadeImages.map((fadeImage, index) => (
          <div className="each-fade" key={index}>
            <div className="image-container ade-in-image" >
              <img className="img1" width="100%" height="600px"   src={fadeImage.url} />
            </div>
          
          </div>
        ))}
      </Fade>
    </div>
            </div>
  </>
  )
}
