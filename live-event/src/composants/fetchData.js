import { useState, useEffect} from "react";



const FetchData = (url) => {

 
    const[data, setData] = useState (null);
    const[pending, setpending] = useState (null);
    const[error, setError] = useState (null);


     useEffect(() => {
        setTimeout(() => {
            // go and fetch the json data in the localhost
        fetch(url).then(res => {
            if(!res.ok) 
                {throw Error('Impossible de charger la page');

                }
            return res.json();
        }).then((data) => {
            setData(data);
            setpending(false);
            setError(null)
        }).catch(err =>{
            setpending(false);
            setError(err.message);
        })      
    });
},[url])

  
return{data, pending, error}
}
 
export default FetchData;