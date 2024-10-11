import Posters from "./posters";

import {Carousel} from 'react-bootstrap';
const Home = () => {

    

       return ( 
        <div className="Home">

           
        <Carousel>
        <Posters/>
        </Carousel>
        <div className="carroussel">
            <div class="poster">

                <h3>Nom de l'artiste</h3>
                <h4>Jour</h4>
                <h4>date</h4>
            </div>  
        </div>
      

        <div className="partners">
        </div> 
    

        <article class="descriptif">
            <h2>Qui nous sommes...</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla est purus, ultrices in porttitor 
                in, accumsan non quam. Nam consectetur porttitor rhoncus. Curabitur eu est et leo feugiat 
                auctor vel quis lorem. Ut et ligula dolor, sit amet consequat lorem. Aliquam porta eros sed 
                velit imperdiet egestas. Maecenas tempus eros ut diam ullamcorper id dictum libero 
                tempor. Donec quis augue quis magna condimentum lobortis. Quisque imperdiet ipsum vel 
                magna viverra rutrum. Cras viverra molestie urna, vitae vestibulum turpis varius id. 
                Vestibulum mollis, arcu iaculis bibendum varius, velit sapien blandit metus, ac posuere lorem 
                nulla ac dolor. Maecenas urna elit, tincidunt in dapibus nec, vehicula eu dui. Duis lacinia 
                fringilla massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur 
                ridiculus mus. Ut consequat ultricies est, non rhoncus mauris congue porta. Vivamus viverra 
                suscipit felis eget condimentum. Cum sociis natoque penatibus et magnis dis parturient 
                montes, nascetur ridiculus mus. Integer bibendum sagittis ligula, non faucibus nulla volutpat 
                vitae. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.  
                In aliquet quam et velit bibendum accumsan.</p>
        </article>


  
    <footer>

    </footer>
        </div>
    );
}
 
export default Home;