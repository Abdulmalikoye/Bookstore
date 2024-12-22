import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const UpdateBook = () => {
  const { id } = useParams();
  const [book, setBook] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`http://localhost:3001/getBook/` + id)
      .then((result) => {
        console.log(result);
        setBook(result.data.book);
        setDescription(result.data.description);
        setPrice(result.data.price);
      })
      .catch((err) => console.log(err));
  }, []);
  const Update = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:3001/updateBook/` + id, {
        book,
        description,
        price,
      })
      .then((result) => {
        console.log(result);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
        <div className="w-50 bg-white rounded p-3">
          <form action="" onSubmit={Update}>
            <h2>Update book</h2>
            <div className="mb-2">
              <label htmlFor="">Book</label>
              <input
                type="text"
                placeholder="Enter name of book"
                className="form-control"
                value={book}
                onChange={(e) => setBook(e.target.value)}
              />
            </div>
            <div className="mb-2">
              <label htmlFor="">Description</label>
              <input
                type="text"
                placeholder="Enter description"
                className="form-control"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="mb-2">
              <label htmlFor="">Price</label>
              <input
                type="text"
                placeholder="Enter price"
                className="form-control"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <button className="btn btn-success">Update</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateBook;
