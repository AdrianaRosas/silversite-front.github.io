import React from 'react';
import Header from './Home'

export default function Index() {
    return (
      <div>
          <section className="header">
              <Header />
          </section>
        <p>Hello Next.js</p>
        <style jsx>{`
            section,
            .header {
                width: 100vw;
                height: 20vh;
                background-color: blue;
            }
         `}</style>
      </div>
    );
  }