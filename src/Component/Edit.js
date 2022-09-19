import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
//import { addMovie } from "../js/actions/actions";
import { addMovie, updateMovie } from "../js/features/moviesSlice";
import { Link, useNavigate, useParams } from "react-router-dom";
function Edit() {
  const {id} =useParams();

  const movie = useSelector(state =>state.movieReducer.movies.find(el=>el._id==id))
  console.log(movie)
  const [show, setShow] = useState(false);
const dispatch = useDispatch();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [editMovie, setEditMovie] = useState( movie);
  const navigate=useNavigate();
  const handleClick = () => {
    if (editMovie.Title.length == 0) {
      alert("Please entrer un titre");
      return;
    }
    dispatch(updateMovie(editMovie));
    navigate(-1);
    // // setNewMovie({
    //   Genre: {
    //     Name: "",
    //   },
    //   Title: "",
    //   Description: "",
    //   ImageURL: "",
    //   Rating: 0,
    // });
    // handleClose();
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Edit Movie
      </Button>

      <Modal show={true} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="add title name"
                autoFocus
                Value={movie.Title}
                onChange={(e) =>
                  setEditMovie({ ...editMovie, Title: e.target.value })
                }
              />
            </Form.Group>
              
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Rating</Form.Label>
              <Form.Control
                type="number"
                placeholder="add Rating"
                Value={movie.Rating}
                onChange={(e) =>
                  setEditMovie({ ...editMovie, Rating: +e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Genre</Form.Label>
              <Form.Control 
              type="text" placeholder="add  genre name" 
              Value={movie.Genre.Name}/>
            </Form.Group>
            
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClick}>
            Save Change
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Edit;
