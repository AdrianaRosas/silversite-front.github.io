import React from 'react';
import ReactDOM from 'react-dom';
// import logoHeader from './stuff/logo-tuvamex.png';

// const logoHeader = require('./stuff/logo-tuvamex.png')

class Header extends React.Component {
    render(
    ) {
        return (
            <div className="header-cointainer">
              <div className="logo-contact">
                  {/* <img src=""/> */}
                  </div> 
                  <div className="header-contact">
                      <div className="cotiza">
                        <img src=""/>
                          <div className="info-cotiza">
                             <p>800 3679764</p>
                             <p>COTIZA AHORA</p>
                          </div>
                       </div>
                          
                      <div className="llamanos">
                      <div className="cotiza">
                          <img src=""/>
                          <div className="info-cotiza">
                          <p>LLAMANOS:</p>
                          <h1>55 5749-3539</h1>
                          <h1>Whatsapp: 55 2563 6863</h1>
                          </div>
                      </div>
                      </div>
                  </div>
              <style jsx>{`
              div,
            .header-container{
                width: 100%;
                height: 100%;
                display:flex;
                background-color: green;
            },
            .logo-contact{
                width: 50%;
                height: 90%;
                background-color: pink;
            },
            .header-contact {
                width: 45%;
                height: 90%;
                background-color: orange;
            },
            .cotiza, .llamanos {
                width: 70%;
                height: 90%;
                display:flex
                justify-content: center;
                align-items: center;
                background-color: red;
            },
            .cotiza img{
                width: 90px;
                height: 90px;
            }
            .info-cotiza {
                width: 40%;
                height: 90%;
                display: flex;
                flex-direction: column;  
                background-color: gray;
            }
            .info-cotiza p:first-child {
                width: 80%;
                color: white;
                font-size: 0.5rem;
                background-color: black;
            },
            .info-cotiza p:nth-child(1) {
                width: 80%;
                font-size: 0.5rem;
                color: pink;
            }

            
         `}</style>
            </div>
        )
    }
}
   
export default Header;