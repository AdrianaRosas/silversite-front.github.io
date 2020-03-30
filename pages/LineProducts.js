import React from 'react';
import ReactDOM from 'react-dom';

class LineProducts extends React.Component {
    render(
    ) {
        return (
            <div className="products-container">
              <h1>LINEA DE PRODUCTOS</h1>
              <div className="info-products">
                  <div className="card-products">
                      <div className="circle">
                          <img src= "https://image.flaticon.com/icons/svg/1835/1835178.svg" />
                      </div>
                      <div className="info-card">
                         <h2>TUBERIAS</h2>
                         <p>Toda clase de Tubos en PVC, <br /> CPVC, Polietileno Liso y Corrugado.</p>
                         <a href="">Más >></a>
                      </div>
                  </div>
                  <div className="card-products">
                      <div className="circle">
                          <img src= "https://image.flaticon.com/icons/svg/1835/1835178.svg" />
                      </div>
                      <div className="info-card">
                         <h2>CONEXIONES</h2>
                         <p>Conexiones para todo tipo de <br/> Tubos, en PVC, CPVC, Polietileno.</p>
                         <a href="">Más >></a>
                      </div>
                  </div>
                  <div className="card-products">
                      <div className="circle">
                          <img src= "https://image.flaticon.com/icons/svg/1835/1835178.svg" />
                      </div>
                      <div className="info-card">
                         <h2>VALVULAS</h2>
                         <p>Válvulas de todo tipo de <br /> materiales: PVC, CPVC, PPL, PE, <br/> Bola, Mariposa, Compuerta.</p>
                         <a href="">Más >></a>
                      </div>
                  </div>
                  <div className="card-products">
                      <div className="circle">
                          <img src= "https://image.flaticon.com/icons/svg/1835/1835178.svg" />
                      </div>
                      <div className="info-card">
                         <h2>CEMENTOS</h2>
                         <p>Somos distribuidores autorizados <br /> Oatey, Cementos, Primers y <br/> Limpiadores.</p>
                         <a href="">Más >></a>
                      </div>
                  </div>
                  <div className="card-products">
                      <div className="circle">
                          <img src= "https://image.flaticon.com/icons/svg/1835/1835178.svg" />
                      </div>
                      <div className="info-card">
                         <h2>ACCESORIOS</h2>
                         <p>Gran variedad de productos <br/> necesarios para tus proyectos. <br/> Piezas especiales.</p>
                         <a href="">Más >></a>
                      </div>
                  </div>
                  </div>
              <style jsx>{`
              div,
              .products-container{
                width: 98%;
                height: 90%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center; 
                // background: greenyellow;
              }
              h1 {
                font-family: 'Raleway', sans-serif;
                font-weight: lighter;
                color: #484848;
                // background: gray;
              }
              .info-products{
                  width: 100%;
                  height: 90%;
                  display: flex;
                  flex-direction: row;
                  justify-content: center;
                  align-items: center;
                //   background-color: magenta;

              };
              .card-products{
                    font-family: 'Raleway', sans-serif;
                    // background: gold;
              }
              .circle{
                   width: 150px;
                   height: 150px;
                   border-radius: 50%;
                   background: #ffffff;
                   border: 4px solid #1B133C;
              }
              .circle img{
                   width: 70px;
                   height: 70px;
              }
              .info-card {
                  width: 90%;
                  height: 50%;
                  display: flex;
                  flex-direction: column;
                  justify-content: center;
                  align-items: center;
                //   background: red;
              }
              .info-card h2{
                  font-size: 20px;
                  color: #1B133C;
                  font-weight: lighter;
                //   background: orange;
              }
              .info-card p {
                  font-size: 14px;
                  color: #767676;
                  font-weight: lighter;
                  text-align: center;
              }
              .info-card a {
                font-size: 14px;
                text-decoration: none;
                color: #1B133C;
                font-weight: lighter;
                text-align: center;
              }





               
            
         `}</style>
            </div>
        )
    }
}
   
export default LineProducts;