import React from 'react'
import Navbar from './Navbar'

const Form = () => {
  return (
    <div>
      <Navbar/>
      <br />
      <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
              <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">Title</label>
                    <input type="text" className="form-control" placeholder='enter title'/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">Thumbnail</label>
                    <input type="text" className="form-control" placeholder='enter thumbnail' />
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">Image url</label>
                    <input type="text" className="form-control" placeholder='enter url' /><br />
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                  <button className="btn btn-primary">Submit</button>
                </div>
              </div>  
            </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Form
