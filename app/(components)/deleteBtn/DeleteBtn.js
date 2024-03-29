"use client";

export default function DeleteBtn({ title, id }) {
  const deleteHandler = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      id: id,
    });

    const requestOptions = {
      method: "DELETE",
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
      <button onClick={deleteHandler}>{title}</button>
    </div>
  );
}
