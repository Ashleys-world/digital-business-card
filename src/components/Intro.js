import React from 'react'

export default function Intro() {
  return (
    <div>
        <h4 className="text-center text-light mb-1">Siya Kolisi</h4>
            <h5 className="text-center text-light my-1">Rugby Player</h5>
            <p className="text-center text-light my-0 pt-0">Gqeberha</p>
            <div className="row ">
              <div className="d-grid gap-2 d-lg-flex justify-content-lg-center mt-1">
                <a className="btn btn-light btn-sm" href="a">Email</a>
                <a className="btn btn-light btn-sm ml-1" href="b">LinkedIn</a>
              </div>
            </div>
    </div>
  )
}
