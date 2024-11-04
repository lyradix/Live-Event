import React from "react";
import {
  StackedCarousel,
  ResponsiveContainer
} from "react-stacked-center-carousel";
import { Button} from 'react-bootstrap';

import "./slide.css";
import { Slide } from "./slide";

const data = [
  {
    image: "image-6.jpg",
    name: "Soprano",
    startTime: "2024-09-13 19:30:00",

  },
  {
    image: "image-8.jpg",
    name: "Lana Del rey",
    startTime: "2024-09-13 21:20:00",
  
  },
  {
    image: "image-10.jpg",
    name: "Burna Boy",
    startTime: "2024-09-13 23:00:00",
   
  },
  {
    image: "image-19.jpg",
    name: "Bruno Mars",
    startTime: "2024-09-14 19:30:00",
    
  },
  {
    image: "image-21.jpg",
    name: "Stromae",
    startTime: "2024-09-14 21:25:00",
   
  },
  {
    image: "image-34.jpg",
    name: "Big Flo & Oli",
    startTime: "2024-09-15 21:20:00",
   
  },
  {
    image: "image-36.jpg",
     name: "Daft Punk",
    startTime: "2024-09-15 23:00:00",
    }
];

// const [data, setData] = useState(null);

//   useEffect(() => {
//     fetch('/db.json')
//       .then(response => response.json())
//       .then(data => setData(data))
//       .catch(error => console.error('Error fetching data:', error));
//   }, []);


const CardExample = (concerts,concert, scène ) => {
  // const filterlineUpDay = concerts.filter((concert)=> concert.scène === 'Scéne eXclammation !')
  const ref = React.useRef(StackedCarousel);
  return (
    <div className="cardImage">
      <div style={{ width: "100%", position: "relative"}}>
        <ResponsiveContainer
          carouselRef={ref}
          render={(width, carouselRef) => {
            return (
              <StackedCarousel
                ref={carouselRef}
                slideComponent={Slide}
                slideWidth={190}
                carouselWidth={width}
                data={data}
                maxVisibleSlide={5}
                disableSwipe
                customScales={[0.5, 0.5, 0, 0]}
                transitionTime={220}
              />
            );
          }}
        />
        <button
          className="btnleft"
        
          onClick={() => ref.current?.goBack()}
        >
          {/* <div style={{ fontSize: 30 }} /> */}
        </button>
        <button
          className="btnright"
      
          onClick={() => ref.current?.goNext()}
        >
          {/* <div style={{ fontSize: 30 }} /> */}
        </button>
      </div>
    </div>
  );
};

export default CardExample;
