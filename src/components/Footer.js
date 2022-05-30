import React from 'react'
import './style.css';

export default function Footer() {

    const styl = {
        color: "black" 
      }
      
  return (
    <div className="row">
             <div className="d-grid gap-2 d-lg-flex justify-content-lg-center bg-dark rounded-bottom">
               <a className="btn btn-light btn-sm my-2" href="a"><i class="fa fa-tumblr" style={styl}></i></a>
               <a className="btn btn-light btn-sm my-2" href="a"><i class="fa fa-facebook" style={styl}></i></a>
               <a className="btn btn-light btn-sm my-2" href="a"><i class="fa fa-instagram" style={styl}></i></a>
               <a className="btn btn-light btn-sm my-2" href="a"><i class="fa fa-twitter" style={styl}></i></a>
             </div>
    </div>
  )
}
