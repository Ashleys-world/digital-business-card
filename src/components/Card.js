import React from 'react'
import Footer from './Footer';
import Header from './Header';
import Info from './Info';
import Intro from './Intro';

export default function Card() {
  return (
    <div className="container-fluid bg-s ">
        <div className="row">
          <div className="col-lg-3 offset-lg-4 bg-d mt-2 mb-2 rounded
             col-md-4 offset-md-4 col-sm-6 offset-sm-3 ">
           <Header/>
           <Intro/>
           <Info/>
           <Footer/>
        </div>
      </div>
    </div>
  )
}
