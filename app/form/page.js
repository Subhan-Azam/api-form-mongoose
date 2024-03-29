"use client";
import { useState } from "react";

export default function Form() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");

  const onSubmitHandler = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      name: name,
      lastname: lastName,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://localhost:3000/api/userApi", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
  };

  return (
    <div>
      {/* <form onSubmit={onSubmitHandler}> */}
        <label htmlFor="name">Name</label>
        <input type="text" onChange={(e) => setName(e.target.value)} />
        <label htmlFor="lastName">Last Name</label>
        <input type="text" onChange={(e) => setLastName(e.target.value)} />
        <button onClick={onSubmitHandler}>Submit</button>
      {/* </form> */}
    </div>
  );
}
