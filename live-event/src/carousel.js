import { useState, useEffect } from "react"
import { Button,Stack} from 'react-bootstrap';

const Poster = () => {

   const [index, setIndex] = useState(0);
 
   const[concerts, setConcerts] = useState ([]);
  

   const mod = (n, m) => {
     let result = n % m;
 
     // Return a positive value
     return result >= 0 ? result : result + m;

   };


   useEffect(() => {

    // go and fetch the json data in the localhost
fetch('http://localhost:8000/concerts').then(res => {
    return res.json();
}).then((data) => {
 setConcerts(data);

},3000)
},[index]);


    useEffect(() => {
      setTimeout(() => {
        setIndex((index + 1) % concerts.length);
        console.log(concerts.length);
      },1500);
    }, [concerts]);


    // useEffect(() => {
    //   setTimeout(() => {
      
    //   },1500);
    // }, [index]);


    // useEffect(()=>{
    //   console.log(concerts)
    // },[])




 
    return ( 
    <div className="carousel">
       {/* <img className="poster poster--active" src={image1}alt="imgPoster"></img> 
       <img className="poster poster--left" src={image2} alt="imgPoster"></img> 
       <img className="poster poster--right" src={image3} alt="imgPoster"></img>  */}

{/* <button onClick={()=>{setIndex((index + 1) % concerts.length);}}>clickright</button> */}
<Stack className="btnFilters" direction="horizontal" gap={5}>
{concerts.map((concert, i) => {
  
          const indexLeft = mod(index - 1, concerts.length);
          const indexRight = mod(index + 1, concerts.length);

          let className = "poster";

          if (i === index) {
            className = "poster poster--active";
          } else if (i === indexRight) {
            className = "poster poster--right";
          } else if (i === indexLeft) {
            className = "poster poster--left";
          } else className = "poster poster--invisible";

          return (
            <div  className={className}>
              <h1 className="namePoster">{concert.artist}</h1>  
              <h1 className="datePoster">{concert.startTime.substring(0, 10)}</h1>  
             <img
              key={concert.id}
              className="imgPoster"
              src={`image-${concert.id}.jpg`}
              alt="Comic"
            ></img>
            
             { console.log(concert.length)}
            </div>
          );
        })}
    </Stack>
    </div>

   );
}
 
export default Poster;