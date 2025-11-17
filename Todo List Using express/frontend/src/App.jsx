import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "../src/app.css";

const App = () => {
  const [data, setData] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [edit, setEdit] = useState(null);

  const API = "http://localhost:7000/api";

  // Get data
  const fetchDataFromServer = async () => {
    const res = await axios.get(`${API}/get`);
    setData(res.data);
  };

  // Post new data and Update data
  const addNewData = async () => {
    if (title === "" && description === "" && dueDate === "") {
      toast.warning("All field most be filled ! ");
      return;
    }

    if (edit === null) {
      await axios.post(`${API}/post`, {
        id: data.length > 0 ? data[data.length - 1].id + 1 : 1,
        title: title,
        description: description,
        status: "pending",
        dueDate: dueDate,
        date: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString(),
      });

      toast.success("New todo added successfully !");
    } else {
      await axios.put(`${API}/update/${edit}`, {
        title,
        description,
        dueDate,
      });

      toast.success("Data updated successfully !");
      setEdit(null);
    }

    setTitle("");
    setDescription("");
    setDueDate("");
    fetchDataFromServer();
  };

  // Delete data
  const deleteData = async (id) => {
    await axios.delete(`${API}/delete/${id}`);
    toast.error("Todo deleted successfully !");
    fetchDataFromServer();
  };

  // Assign data values to input fields
  const datasValueToInputFields = async (todo) => {
    setEdit(todo.id);
    setTitle(todo.title);
    setDescription(todo.description);
    setDueDate(todo.dueDate);
  };

  useEffect(() => {
    fetchDataFromServer();
  }, []);

  return (
    <div>
      <h1>Todo List</h1>

      <div className="todoContainer">
        <div className="Inputs">
          <label htmlFor="">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <label htmlFor="">Description</label>
          <textarea
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <label htmlFor="">Date</label>
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />

          <button onClick={addNewData}>Add todo</button>
        </div>

        {data.map((el, i) => (
          <div className="todoContent">
            <div className="todoTop">
              <span>{el.time}</span>
              <div className="line"></div>
              <span>{el.date}</span>
            </div>

            <h3>Title : {el.title}</h3>
            <p>Description : {el.description}</p>
            <p>Due-Date : {el.dueDate}</p>

            <div className="actionBtns">
              <button className="deleteBtn" onClick={() => deleteData(el.id)}>
                delete
              </button>
              <button
                className="editBtn"
                onClick={() => datasValueToInputFields(el)}
              >
                edit
              </button>
            </div>
          </div>
        ))}
      </div>

      <ToastContainer />
    </div>
  );
};

export default App;
