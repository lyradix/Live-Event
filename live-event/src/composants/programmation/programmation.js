import { useState} from "react";
import { Button,Stack} from 'react-bootstrap';
import ConcertList from "./ConcertList";
import Timetable from "./timetable";
import FetchData from "../fetchData";


const Programmation = () => {


 //Les usessates pour afficher les contenus, les boutons, le menu-déroulant
    const[toggle, setToggle] = useState (null);
    const[button, setButton] = useState (null);
    const[stages, setStages] = useState (null);
    const[overlay, setOverlay] = useState(null);



    const {data:concerts, pending, error} = FetchData('http://localhost:8000/concerts'); 
  
  

// filtres pour les listes des concerts selon les scenes
    const extasia = [concerts && <Timetable concerts={concerts.filter((concert)=> concert.scene === 'eXtasia' &&  concert.startTime.startsWith('2025-09-12'))} scene et jour = "eXtasia et vendredi"/>,
                                 concerts && <Timetable concerts={concerts.filter((concert)=> concert.scene === 'eXtasia' &&  concert.startTime.startsWith('2025-09-13'))} scene et jour = "eXtasia et samedi"/>,
                                 concerts && <Timetable concerts={concerts.filter((concert)=> concert.scene === 'eXtasia' &&  concert.startTime.startsWith('2025-09-14'))} scene et jour = "eXtasia et dimanche"/>
                                 ]
    const exodius = [concerts && <Timetable concerts={concerts.filter((concert)=> concert.scene === 'eXodius'&&  concert.startTime.startsWith('2025-09-12'))} scene et jour = "eXodius et vendredi"/>,
                                concerts && <Timetable concerts={concerts.filter((concert)=> concert.scene === 'eXodius'&&  concert.startTime.startsWith('2025-09-13'))} scene et jour = "eXodius et samedi"/>,
                                concerts && <Timetable concerts={concerts.filter((concert)=> concert.scene === 'eXodius'&&  concert.startTime.startsWith('2025-09-14'))} scene et jour = "eXodius et dimanche"/>
                                ]

    const experienza = [concerts && <Timetable concerts={concerts.filter((concert)=> concert.scene === ' eXperienza'&&  concert.startTime.startsWith('2025-09-12'))} scene et jour = "eXperienza et vendredi"/>,
                                    concerts && <Timetable concerts={concerts.filter((concert)=> concert.scene === ' eXperienza'&&  concert.startTime.startsWith('2025-09-13'))} scene et jour = "eXperienza et samedi"/>,
                                    concerts && <Timetable concerts={concerts.filter((concert)=> concert.scene === ' eXperienza'&&  concert.startTime.startsWith('2025-09-14'))} scene et jour = "eXperienza et dimanche"/>
                            ]
    const extravaganza= [concerts && <Timetable concerts={concerts.filter((concert)=> concert.scene === 'eXtravaganza !'&&  concert.startTime.startsWith('2025-09-12'))} scene et jour = "eXtravaganza ! et vendredi"/>,
                                    concerts && <Timetable concerts={concerts.filter((concert)=> concert.scene === 'eXtravaganza !'&&  concert.startTime.startsWith('2025-09-13'))} scene et jour = "eXtravaganza ! et samedi"/>,
                                    concerts && <Timetable concerts={concerts.filter((concert)=> concert.scene === 'eXtravaganza !'&&  concert.startTime.startsWith('2025-09-14'))} scene et jour = "eXtravaganza ! et dimanche"/>
                                        ]
    const expassa = [concerts && <Timetable concerts={concerts.filter((concert)=> concert.scene === 'eXpassa'&&  concert.startTime.startsWith('2025-09-12'))} scene et jour = "eXpassa et vendredi"/>,
                                    concerts && <Timetable concerts={concerts.filter((concert)=> concert.scene === 'eXpassa'&&  concert.startTime.startsWith('2025-09-13'))} scene et jour = "eXpassa et samedi"/>,
                                    concerts && <Timetable concerts={concerts.filter((concert)=> concert.scene === 'eXpassa'&&  concert.startTime.startsWith('2025-09-14'))} scene et jour = "eXpassa et dimanche"/>
                                    ]


    const filterLineUp = concerts && <ConcertList concerts={concerts.filter((concert)=> concert.scene === 'eXtravaganza !')} scene = "filtre pour jour"/>
    const filterFriday = concerts && <ConcertList concerts={concerts.filter(concert=> concert.startTime.startsWith('2025-09-12'))} jour = "filtre pour jour"/>
    const filterSaturday = concerts && <ConcertList concerts={concerts.filter((concert)=> concert.startTime.startsWith('2025-09-13'))} jour = "filtre pour jour"/>
    const filterSunday = concerts && <ConcertList concerts={concerts.filter((concert)=> concert.startTime.startsWith('2025-09-14'))} jour = "filtre pour jour"/>

     
//Les boutons selon les jours vendredi, samedi et dimanche + le Line-Up
  const buttonDays =     <Stack  className="btnDays" direction="horizontal" gap={2}>
                        <Button className="btnLineUp"  onClick={() => {setToggle(filterLineUp);             
                            }}>Line-Up</Button>
                        <Button className="btnFriday" onClick={() => setToggle(filterFriday)}>Vendredi</Button>
                        <Button className="btnSaturday" onClick={() => setToggle(filterSaturday)}>Samedi</Button>
                        <Button className="btnSunday" onClick={() => setToggle(filterSunday)}>Dimanche</Button>
                        </Stack>

const btnDaysOff = <Stack className = "btnDays" style={{opacity:"0"}}></Stack>


const timetable = <div className="timetable">
<h1 className="textTimetable">e&#129419;tasia</h1>
<p>{extasia}</p> 


<h1 className="textTimetable">e&#129419;odius</h1>
<p>{exodius}</p>        


<h1 className="textTimetable">e&#129419;perienza</h1>
<p>{experienza}</p>        


<h1 className="textTimetable">e&#129419;travaganza !</h1>
<p>{extravaganza}</p>        


<h1 className="textTimetable">e&#129419;passa</h1>
<p>{expassa}</p>        

</div> 


const extasiaOnly = <div className="timetable">
                <h1 className="textTimetable">e&#129419;tasia</h1>
                <p>{extasia}</p> </div>

const experienzaOnly = <div className="timetable">
                    <h1 className="textTimetable">e&#129419;perienza</h1>
                    <p>{experienza}</p> </div>

const exodiussOnly = <div className="timetable">
                    <h1 className="textTimetable">e&#129419;odius</h1>
                    <p>{exodius}</p> </div>

const eXtravaganzaOnly = <div className="timetable">
                    <h1 className="textTimetable">e&#129419;travaganza !</h1>
                    <p>{extravaganza}</p> </div>  

const eXpassaOnly = <div className="timetable">
                    <h1 className="textTimetable">e&#129419;passa</h1>
                    <p>{expassa}</p> </div>

const scenes =  <div className="filterScene" onClick={()=>{ 
    setStages(!scenes);
    setOverlay(!overlayBox);
    setButton(btnDaysOff)
    }}>
           
                    <li className="textMenu" onClick={()=>{setToggle(extasiaOnly);}}>eXtasia</li>
                    <li className="textMenu" onClick={()=>{setToggle(experienzaOnly);}}>experienza</li>
                    <li className="textMenu" onClick={()=>{setToggle(exodiussOnly);}}>exodius</li>
                    <li className="textMenu" onClick={()=>{setToggle(eXtravaganzaOnly);}}>eXtravaganza</li>
                    <li className="textMenu" onClick={()=>{setToggle(eXpassaOnly);}}>eXpassa</li>
        
                </div>

    const overlayBox = <div className="overlayBox" onClick={()=>{ 
        setStages(!scenes);
        setOverlay(!overlayBox);
   
        }}></div>



    return ( 
        
    <div className="programmation">
            { error && <div className="text">{error}</div>}
            { pending && <div className="text">En chargement...</div>}
            <div className='programmationBox'>
        <h1 className='programmationText'>Programmation</h1>
        </div>
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
                }}>Horaires</Button>

                <div class="dropdown">
                <Button className="dropbtn" onClick={() => {
                
                        /*appuie sur le bouton scenes, affiche scenes, click back => n'affiche pas de scenes
                        setStage de stage non-null, return scenes, else return scenes false*/
                        setStages(!stages?scenes:!scenes);
                        setOverlay(overlayBox)
                        
                     
                    }}><div></div>scenes</Button>
                <div className="dropdown-content">{stages}</div> 
               
                </div>

        </Stack>

        <div className="btnDays">
        <div>{!button?buttonDays:button}</div>
        </div>

        <div className="main">
          
            <div>{!toggle?filterLineUp:toggle}</div> 
         </div>

    
    </div>  
    );
}
 
export default Programmation;