import { useState, useEffect, useRef } from "react";




const FetchData = (url) => {

    
 
    const[data, setData] = useState (null);
    const[pending, setpending] = useState (null);



    
     useEffect(() => {
        setTimeout(() => {
            // go and fetch the json data in the localhost
        fetch(url).then(res => {
            return res.json();
        }).then((data) => {
            setData(data);
            setpending(false)
    })
        })
        
    },[url])

  
return{data}
}
 
export default FetchData;