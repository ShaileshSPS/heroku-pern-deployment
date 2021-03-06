import React, { Fragment, useState } from "react";
import { toast } from "react-toastify";

const TodoCreate = ({setTodosChange}) => {
  const [description, setDescription] = useState("");

  const onSubmitForm = async e => {
    e.preventDefault();
    
    try {
      const body = { description };

      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("jwt_token", localStorage.jwt_token);

      const response = await fetch("/dashboard/todos", {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify(body)
      });
      
      toast.error(await response.json());
      setTodosChange(true);
      setDescription("");
      // window.location = "/dashboard";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <h1 className="text-center mt-5">Todo List</h1>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input
          type="text"
          className="form-control"
          value={description}
          placeholder="Add Todo"
          onChange={e => setDescription(e.target.value)}
        />
        <button className="btn btn-success">Add</button>
      </form>
    </Fragment>
  );
};

export default TodoCreate;