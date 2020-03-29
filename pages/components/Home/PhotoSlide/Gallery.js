import React, {Component} from 'react';
import { render } from 'react-dom';
import Carousel from 'nuka-carousel';
import prev from '../../../stuff/back.svg'



class Slideshow extends Component {
  render() {
    return(
      <div>
        <Carousel
        //  renderTopCenterControls = { ({ currentSlide }) => (
        //     < div > Diapositiva: { currentSlide } </ div >
        //   ) } 
          renderCenterLeftControls = { ({ previousSlide }) => (
            < button className="controller"  onClick = { previousSlide } > </ button >
          ) } 
          renderCenterRightControls = { ({ nextSlide }) => (
            < button className="controller-two"  onClick = { nextSlide } ></ button >
          ) }
        
          slidesToShow={1}
          autoplay={true} >
          
          <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fgeroneto.com%2Fimages%2Ftubo13.png&f=1&nofb=1" />
        
          <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fadequa.es%2Fwp-content%2Fuploads%2F2015%2F09%2FG-PVC-EDIFICACION-3.jpg&f=1&nofb=1" />

          <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs-media-cache-ak0.pinimg.com%2Foriginals%2F9c%2F45%2F67%2F9c456726e942a039c41968566bb20895.jpg&f=1&nofb=1" />

          <img src="https://especialistaspvc.com.mx/wp-content/uploads/2018/05/AdobeStock_141250485web.jpg" />

          <img src="https://http2.mlstatic.com/tuberia-y-conexiones-pead-D_NQ_NP_980482-MLM25574935515_052017-F.jpg" />
          
        </Carousel>
         
        <style jsx>{`
           div
           {
           height: 92%;    
           width: 98%;
        //    background: green;
            }
           img {
               width: 50vw;
               height: 98vh;
           }
           .controller, .controller-two {
               width: 50px;
               height: 50px;
               border-radius: 50%;
               background-color: white;
               border-style: none;
               border: 2px solid #000000;
               opacity: 1;
           }
           .controller {
            background-image: url("https://image.flaticon.com/icons/svg/860/860790.svg");
            background-size: 20px;  
            background-repeat: no-repeat;
            background-position: center;
        }
           .controller-two {
            background-image: url("https://image.flaticon.com/icons/svg/318/318429.svg");
            background-size: 20px;  
            background-repeat: no-repeat;
            background-position: center;
        }


            
         `}</style>
      </div>
    )
  }
}
export default Slideshow;