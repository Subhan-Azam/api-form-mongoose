import User from "@/schema/userschema/User";
import React from "react";
import DeleteBtn from "../(components)/deleteBtn/DeleteBtn";
import Modal from "../(components)/modal/Modal";
import axios from "axios";

const getData = async () => {
  let res = await axios.get("http://localhost:3000/api/userApi");
  let data = res.data.body;
  console.log(data);
  return data;
};

export default async function Dashboard() {
  let data = await getData();
  console.log(data);
  return (
    <>
      <h1 className="font-bold text-4xl">Dashboard</h1>
      {data.map((item) => {
        return (
          <div>
            <span>{item.name}</span>
            <span>{item.lastname}</span>
            <DeleteBtn title="delete" id={item._id} />
            <Modal obj={item} />
          </div>
        );
      })}
      {/* <Modal/> */}
    </>
  );
}
