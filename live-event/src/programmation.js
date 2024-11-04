import { useState, useEffect, useRef } from "react";
import { Button,Stack} from 'react-bootstrap';
import ConcertList from "./ConcertList";
import Timetable from "./timetable";
import FlatList from "flatlist-react"
import TouchableOpacity from 'react-touchableopacity'
import FilterToggle from "./showFilterToggle";


const Programmation = () => {








        
 
    
    const [pending, setpending] = useState(true);
    const[concerts, setConcerts] = useState (null);
    const[toggle, setToggle] = useState (null);
    const[button, setButton] = useState (null);





    
     useEffect(() => {
        setTimeout(() => {
            // go and fetch the json data in the localhost
        fetch('http://localhost:8000/concerts').then(res => {
            return res.json();
        }).then((data) => {
            setConcerts(data);
            setpending(false)
        })
        })
        
    },[])

  


    const exageras = [concerts && <Timetable concerts={concerts.filter((concert)=> concert.scène === 'Scène eXageras' &&  concert.startTime.startsWith('2024-09-13'))} scène et jour = "exageras et vendredi"/>,
                                 concerts && <Timetable concerts={concerts.filter((concert)=> concert.scène === 'Scène eXageras' &&  concert.startTime.startsWith('2024-09-14'))} scène et jour = "exageras et samedi"/>,
                                 concerts && <Timetable concerts={concerts.filter((concert)=> concert.scène === 'Scène eXageras' &&  concert.startTime.startsWith('2024-09-15'))} scène et jour = "exageras et dimanche"/>
                                 ]
    const exodius = [concerts && <Timetable concerts={concerts.filter((concert)=> concert.scène === 'Scéne eXodius'&&  concert.startTime.startsWith('2024-09-13'))} scène et jour = "exageras et vendredi"/>,
                                concerts && <Timetable concerts={concerts.filter((concert)=> concert.scène === 'Scéne eXodius'&&  concert.startTime.startsWith('2024-09-14'))} scène et jour = "exageras et samedi"/>,
                                concerts && <Timetable concerts={concerts.filter((concert)=> concert.scène === 'Scéne eXodius'&&  concert.startTime.startsWith('2024-09-15'))} scène et jour = "exageras et dimanche"/>
                                ]

    const experienza = [concerts && <Timetable concerts={concerts.filter((concert)=> concert.scène === 'Scène eXperienza'&&  concert.startTime.startsWith('2024-09-13'))} scène et jour = "eXperienza et vendredi"/>,
                                    concerts && <Timetable concerts={concerts.filter((concert)=> concert.scène === 'Scène eXperienza'&&  concert.startTime.startsWith('2024-09-14'))} scène et jour = "eXperienza et samedi"/>,
                                    concerts && <Timetable concerts={concerts.filter((concert)=> concert.scène === 'Scène eXperienza'&&  concert.startTime.startsWith('2024-09-15'))} scène et jour = "eXperienza et dimanche"/>
                            ]
    const eXclammation = [concerts && <Timetable concerts={concerts.filter((concert)=> concert.scène === 'Scéne eXclammation !'&&  concert.startTime.startsWith('2024-09-13'))} scène et jour = "eXclammation et vendredi"/>,
                                    concerts && <Timetable concerts={concerts.filter((concert)=> concert.scène === 'Scéne eXclammation !'&&  concert.startTime.startsWith('2024-09-14'))} scène et jour = "eXclammation et samedi"/>,
                                    concerts && <Timetable concerts={concerts.filter((concert)=> concert.scène === 'Scéne eXclammation !'&&  concert.startTime.startsWith('2024-09-15'))} scène et jour = "eXclammation et dimanche"/>
                                        ]
    const eXpassa = [concerts && <Timetable concerts={concerts.filter((concert)=> concert.scène === 'Scène eXpassa'&&  concert.startTime.startsWith('2024-09-13'))} scène et jour = "eXpassa et vendredi"/>,
                                    concerts && <Timetable concerts={concerts.filter((concert)=> concert.scène === 'Scène eXpassa'&&  concert.startTime.startsWith('2024-09-14'))} scène et jour = "eXpassa et samedi"/>,
                                    concerts && <Timetable concerts={concerts.filter((concert)=> concert.scène === 'Scène eXpassa'&&  concert.startTime.startsWith('2024-09-15'))} scène et jour = "eXpassa et dimanche"/>
                                    ]

    const filterLineUp = concerts && <ConcertList concerts={concerts.filter((concert)=> concert.scène === 'Scéne eXclammation !')} scene = "filtre pour jour"/>
    const filterFriday = concerts && <ConcertList concerts={concerts.filter(concert=> concert.startTime.startsWith('2024-09-13'))} jour = "filtre pour jour"/>
    const filterSaturday = concerts && <ConcertList concerts={concerts.filter((concert)=> concert.startTime.startsWith('2024-09-14'))} jour = "filtre pour jour"/>
    const filterSunday = concerts && <ConcertList concerts={concerts.filter((concert)=> concert.startTime.startsWith('2024-09-15'))} jour = "filtre pour jour"/>

    // const filterSunday = concerts && <ConcertList concerts={concerts.filter((concert)=> concert.jour === 'Dimanche')} jour = "filtre pour jour"/>



  

  const buttonDays =     <Stack  className="btnDays" direction="horizontal" gap={2}>
                        <Button className="btnLineUp"  onClick={() => {setToggle(filterLineUp);             
                            }}>Line-Up</Button>
                        <Button className="btnFriday" onClick={() => setToggle(filterFriday)}>Vendredi</Button>
                        <Button className="btnSaturday" onClick={() => setToggle(filterSaturday)}>Samedi</Button>
                        <Button className="btnSunday" onClick={() => setToggle(filterSunday)}>Dimanche</Button>
                        </Stack>

const btnDaysOff = <Stack className = "btnDays" style={{opacity:"0"}}></Stack>



const horaireOff = <Stack className="timetable" style={{opacity:"0", position:"absolute"}}></Stack>

const buttonRef = useRef(null);

const timetable = <div className="timetable">
<h1 className="text">e&#129419;geras</h1>
<p>{exageras}</p> 


<h1 className="text">e&#129419;odius</h1>
<p>{exodius}</p>        


<h1 className="text">e&#129419;perienza</h1>
<p>{experienza}</p>        


<h1 className="text">e&#129419;clammation !</h1>
<p>{eXclammation}</p>        


<h1 className="text">e&#129419;passa</h1>
<p>{eXpassa}</p>        

</div> 



    return ( 
        
    <div className="programmation">


      <Stack className="btnFilters" direction="horizontal" gap={2}>
            <Button  className="btnArtist"  onClick={() => { setButton(buttonDays);
             setToggle(filterLineUp);
             }}>Artistes</Button>


            <Button className="btnHoraires" onClick={() => {
         
           
                setButton(btnDaysOff);
                setToggle(timetable);
               
                }}>Horaires</Button>


        </Stack>

        <div>


        <div>{!button?buttonDays:button}</div>
    
         <div>{!toggle?filterLineUp:toggle}</div> 
         </div>

    
    </div>  
    );
}
 
export default Programmation;