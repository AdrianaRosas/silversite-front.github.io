import React from 'react';
import ReactDOM from 'react-dom';
import logo from './stuff/logo-tuvamex.png'

class Header extends React.Component {
    render(
    ) {
        return (
            <div className="header-cointainer">
              <div className="logo-contact">
                  <img src={logo}/>
                  </div> 
                  <div className="header-contact">
                      <div className="cotiza">
                        <img src= "https://image.flaticon.com/icons/svg/1034/1034240.svg"/>
                          <div className="info-cotiza">
                             <p>COTIZA AHORA</p>
                             <p>800 3679764</p>
                          </div>
                       </div>
                          
                      {/* <div className="llamanos"> */}
                      <div className="cotiza">
                         <img src= "https://image.flaticon.com/icons/svg/1034/1034236.svg"/> 
                          <div className="info-cotiza">
                          <p>LLAMANOS:</p>
                          <h1>55 5749-3539</h1>
                          <h1>Whatsapp: 55 2563 6863</h1>
                          </div>
                      {/* </div> */}
                      </div>
                  </div>
              <style jsx>{`
              div,
            .header-container{
                height: 100%;
                display:flex;
                align-items: flex-start;
                // background-color: violet;
                // margin-bottom: 1rem;
            },
            .logo-contact{
                width: 55%;
                height: 90%;
                margin: 0 8% 0 2%;
                // background-color: pink;
            },
            .logo-contact img{
                width: 30%;
                height: 100%;
                // background: gray;
            }
            .header-contact {
                width: 40%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: flex-end;
                // background-color: black;
            },
            .cotiza{
                width: 60%;
                height: 80%;
                display:flex
                justify-content: center;
                align-items: center;
                // background-color: gray;
            },
            .cotiza img{
                width: 45px;
                height: 45px;
            }
            .info-cotiza {
                display: flex;
                justify-content: center;
                align-items: flex-start;
                flex-direction: column;  
                // background-color: yellow;
            }
            .info-cotiza p:first-child {
                display: flex;
                align-items: center;
                font-family: 'Raleway', sans-serif;
                height: 50%;
                width: 90%;
                color: #000;
                font-size: 0.8rem;
            },
            .info-cotiza h1 {
                // background-color: violet;
                display: flex;
                align-items: center;
                font-family: 'Raleway', sans-serif;
                height: 60%;
                width: 100%;
                font-size: 0.8rem;
                font-weight: lighter;
                color: #000;
            }

            
         `}</style>
            </div>
        )
    }
}
   
export default Header;