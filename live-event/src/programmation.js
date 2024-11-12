import { useState, useEffect, useRef } from "react";
import { Button,Stack} from 'react-bootstrap';
import ConcertList from "./ConcertList";
import Timetable from "./timetable";
import FlatList from "flatlist-react"
import TouchableOpacity from 'react-touchableopacity'
import FilterToggle from "./showFilterToggle";
import FetchData from "./fetchData";


const Programmation = () => {

    
    const [pending, setpending] = useState(true);

    const[toggle, setToggle] = useState (null);
    const[button, setButton] = useState (null);
    const[stages, setStages] = useState (null);
    const[overlay, setOverlay] = useState(null);



    const {data:concerts} = FetchData('http://localhost:8000/concerts'); 
    //  useEffect(() => {
    //     setTimeout(() => {
    //         // go and fetch the json data in the localhost
    //     fetch('http://localhost:8000/concerts').then(res => {
    //         return res.json();
    //     }).then((data) => {
    //         setConcerts(data);
    //         setpending(false)
    //     })
    //     })
        
    // },[])

  


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


const exagerasOnly = <div className="timetable">
                <h1 className="text">e&#129419;geras</h1>
                <p>{exageras}</p> </div>

const experienzaOnly = <div className="timetable">
                    <h1 className="text">e&#129419;perienza</h1>
                    <p>{experienza}</p> </div>

const exodiussOnly = <div className="timetable">
                    <h1 className="text">e&#129419;odius</h1>
                    <p>{exodius}</p> </div>

const eXclammationOnly = <div className="timetable">
                    <h1 className="text">e&#129419;clammation !</h1>
                    <p>{eXclammation}</p> </div>  

const eXpassaOnly = <div className="timetable">
                    <h1 className="text">e&#129419;passa</h1>
                    <p>{eXpassa}</p> </div>

const scenes =  <div className="filterScene" onClick={()=>{ 
    setStages(!scenes);
    setOverlay(!overlayBox);
    setButton(btnDaysOff)
    }}>
                <ul>
                    <li className="text" onClick={()=>{setToggle(exagerasOnly);}}>exageras</li>
                    <li className="text" onClick={()=>{setToggle(experienzaOnly);}}>experienza</li>
                    <li className="text" onClick={()=>{setToggle(exodiussOnly);}}>exodius</li>
                    <li className="text" onClick={()=>{setToggle(eXclammationOnly);}}>eXclammation</li>
                    <li className="text" onClick={()=>{setToggle(eXpassaOnly);}}>eXpassa</li>
                </ul>
                </div>

    const overlayBox = <div className="overlayBox" onClick={()=>{ 
        setStages(!scenes);
        setOverlay(!overlayBox);
   
        }}></div>



    return ( 
        
    <div className="programmation">
        <div>{overlay}</div>
      <Stack className="btnFilters" direction="horizontal" gap={2}>
            <Button  className="btnArtist"  onClick={() => { setButton(buttonDays);
             setToggle(filterLineUp);
             setStages(!scenes);
             setOverlay(!overlayBox)
             }}>Artistes</Button>


            <Button className="btnHoraires" onClick={() => {
         
           
                setButton(btnDaysOff);
                setToggle(timetable);
                setStages(!scenes);
                setOverlay(!overlayBox); 
                // setButton(!overlayBoxDropbtn)
              
                }}>Horaires</Button>

                <div class="dropdown">
                <Button className="dropbtn" onClick={() => {
                
                        setStages(!stages?scenes:!scenes);
                        setOverlay(overlayBox)
                        
                     
                    }}><div></div>Scènes</Button>
                <div className="dropdown-content">{stages}</div> 
               
                </div>

        </Stack>

        <div>


        <div>{!button?buttonDays:button}</div>
    
         <div>{!toggle?filterLineUp:toggle}</div> 
         </div>

    
    </div>  
    );
}
 
export default Programmation;