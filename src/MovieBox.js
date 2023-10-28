import { Modal,show,Button} from 'react-bootstrap';
import React, {useState} from 'react';

const MovieBox =({imdbID,Title,Poster,Year})=>{
    
    const [show, setShow]=useState(false);

    const handleShow=()=>setShow(true);
    const handleClose=()=>setShow(false);
    
    return(
        <div className="card text-center bg-secondary mb-3">
            <div className="card-body">
              <img className="card-img-top" src={Poster} />
              <div className="card-body">
                  <button type="button" className="btn btn-dark" onClick={handleShow} >View More</button>
                  <Modal show={show} onHide={handleClose}>
                      <Modal.Header closeButton>
                        <Modal.Title></Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                      <img className="card-img-top" style={{width:'14rem'}}src={Poster} />
                      <h3>{Title}</h3>
                      <h4>IMDb: {imdbID}</h4>
                      <h5>Release Date: {Year}</h5>
                      <br></br>
                     
                      </Modal.Body>
                      <Modal.Footer>
                          <Button variant="secondary" onClick={handleClose}>Close</Button>
                      </Modal.Footer>
                  </Modal>
              </div>
            </div>
        </div>
    )
}

export default MovieBox;