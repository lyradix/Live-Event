import {Stack} from 'react-bootstrap';
const Timetable = ({concerts}) => {
    

    return ( 


    <div className="concert">
  

    <div>{concerts.slice(0, 1).map((concert) => (
       <div className="boxTitle">
         <p className="headTitle">{concert.startTime.substring(0, 10)}</p>
      </div>
       )) }
    </div>
       
         {concerts.map((concert) => (

          
            <div key = {concert.id}>   
         
            <div>
              <div className='box'>

                <p >{concert.artist}</p>
                <Stack  className="btnDays" direction="horizontal" gap={2}>
                <p>{concert.startTime.substring(10, 16)}</p>
                <p>&rarr;</p>
                <p>{concert.endTime.substring(10, 16)}</p>
                </Stack>
              </div>      
            </div>
           
      </div>
      ))}

        </div>
     );
}
 
export default Timetable;