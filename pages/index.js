import React from 'react';
import Header from './Home';
import NavBar from './components/Home/NavBar/Nav';
import Slideshow from './components/Home/PhotoSlide/Gallery';
import LinePRoducts from './LineProducts'

export default function Index() {
    return (
      <>
          <section className="header">
              <Header />
              <hr/>
              <NavBar />
              <hr />
          </section>
          <section className = "gallery-section">
            <Slideshow />
          </section>
          <section className = "info-products-section">
             <LinePRoducts />
          </section>
          
        <style jsx>{`
              section,
            .header {
              height: 12vh;
            };
            hr {
              height: 0.5px;
              border-style: none;
              background-color: #BABABA;
            }
            .gallery-section {
              display: flex;
              flex-direction: column;
              align-items:center;
              justify-content: flex-end;
              height: 112vh;
              // background: green;
            }
            .info-products-section{
              height: 100vh;
              display: flex;
              align-items:center;
              justify-content: center;
              background: #C5CAD9;
            }


            
         `}</style>
      </>
    );
  }