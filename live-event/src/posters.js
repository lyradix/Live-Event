
import $ from 'jquery';



let $num = $('.cardImage').length;

let $even = $num / 2;
let $odd = ($num + 1) / 2;

if ($num % 2 == 0) {
  $('.cardImage:nth-child(' + $even + ')').addClass('active');
  $('.cardImage:nth-child(' + $even + ')').prev().addClass('prev');
  $('.cardImage:nth-child(' + $even + ')').next().addClass('next');
} else {
  $('.cardImage:nth-child(' + $odd + ')').addClass('active');
  $('.cardImage:nth-child(' + $odd + ')').prev().addClass('prev');
  $('.cardImage:nth-child(' + $odd + ')').next().addClass('next');
}

$('.cardImage').click(function() {
 let $slide = $('.active').width();
  console.log($('.active').position().left);
  
  if ($(this).hasClass('next')) {
    $('.container').stop(false, true).animate({left: '-=' + $slide});
  } else if ($(this).hasClass('prev')) {
    $('.container').stop(false, true).animate({left: '+=' + $slide});
  }
  
  $(this).removeClass('prev next');
  $(this).siblings().removeClass('prev active next');
  
  $(this).addClass('active');
  $(this).prev().addClass('prev');
  $(this).next().addClass('next');
});

// Keyboard nav
$('html body').keydown(function(e) {
  if (e.keyCode == 37) { // left
    $('.active').prev().trigger('click');
  }
  else if (e.keyCode == 39) { // right
    $('.active').next().trigger('click');
  }

});



const Posters = () => {




 return ( 

  <div className="posters">
   
   
<div className="container">


  
  <div className="cardImage"><img src="image-6.jpg" className="imgPoster" alt="artist"/>  

  </div>  

    <div className="cardImage"><img src="image-8.jpg" className="imgPoster" alt="artist" />  

  </div>       
               
  
  <div className="cardImage"> <img className="imgPoster"src="image-19.jpg" alt="artist"/>

  </div> 

  <div className="cardImage"> <img src="image-21.jpg" className="imgPoster" alt="artist"/>

  </div> 
  
  <div className="cardImage"><img src="image-34.jpg" className="imgPoster" alt="artist"/>

  </div> 

  <div className="cardImage"><img src="image-36.jpg"className="imgPoster" alt="artist"/>

  </div> 


  
</div>


    </div> 

    );
}
 

export default Posters;