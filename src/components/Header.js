import React from 'react'
import Pic from './Pic.jpg' ;
import './style.css';

export default function Header() {
  return (
    <div>
        <div className="row">
              <div className="col-lg-8 offset-lg-2 col-md-4 offset-md-4
              col-sm-6 offset-sm-3 justify-self-center">
                 <img className="img-fluid styl2"  src={Pic} alt="Logo" />
              </div>
        </div>
    </div>
  )
}
