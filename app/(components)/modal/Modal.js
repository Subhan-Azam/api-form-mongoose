// import React from "react";

// export default function Modal() {
//   return (
//     <div>
//       <div className="main_div">
//         <div className="form">
//           <div className="close_btn">
//             <button onClick={onclose}>close</button>
//           </div>
//           <form onSubmit={update}>
//             <div>
//               <label htmlFor="">name</label>
//               <input
//                 type="text"
//                 name="name"
//                 value={formdata.name}
//                 onChange={(e) => {
//                   setFormdata({ ...formdata, name: e.target.value });
//                 }}
//               />
//             </div>
//             <div>
//               <label htmlFor="">email</label>
//               <input
//                 type="email"
//                 name="email"
//                 value={formdata.email}
//                 onChange={(e) => {
//                   setFormdata({ ...formdata, email: e.target.value });
//                 }}
//               />
//             </div>

//             <div>
//               <button type="submit">submit</button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// 'use client'
// import { useState } from 'react';

// export default function Modal() {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const openModal = () => {
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <div>
//       <h1>Next.js Modal Example</h1>
//       <button onClick={openModal}>Open Modal</button>
//       {isModalOpen && (
//         <div className="modal">
//           <div className="modal-content">
//             <span className="close" onClick={closeModal}>&times;</span>
//             <h2>Modal Content</h2>
//             <p>This is the content of the modal.</p>
//             <button onClick={closeModal}>Close Modal</button>
//           </div>
//         </div>
//       )}
//       <style jsx>{`
//         .modal {
//           display: block;
//           position: fixed;
//           z-index: 1;
//           left: 0;
//           top: 0;
//           width: 100%;
//           height: 100%;
//           overflow: auto;
//           background-color: rgba(0, 0, 0, 0.4);
//         }

//         .modal-content {
//           background-color: #fefefe;
//           margin: 15% auto;
//           padding: 20px;
//           border: 1px solid #888;
//           width: 80%;
//         }

//         .close {
//           color: #aaa;
//           float: right;
//           font-size: 28px;
//           font-weight: bold;
//         }

//         .close:hover,
//         .close:focus {
//           color: black;
//           text-decoration: none;
//           cursor: pointer;
//         }
//       `}</style>
//     </div>
//   );
// }

"use client";
import "./Modal.css";

import { useState } from "react";

export default function Modal({ obj }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState(obj.name);
  const [lastname, setLastname] = useState(obj.lastname);

  const submitHandler = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      id: obj._id,
      name: name,
      lastname: lastname,
    });

    const requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://localhost:3000/api/userApi", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
  };

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const saveModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button onClick={openModal}>Update</button>
      {isModalOpen && (
        <div className="modal">
          <div className="modal_content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <div className="update_inputs">
              <label>First Name:</label>
              <input type="text" value={name} onChange={(e)=> setName(e.target.value)} />
              <label>Last Name:</label>
              <input type="text" value={lastname} onChange={(e)=> setLastname(e.target.value)} />
              <button id="saveBtn" onClick={submitHandler}>
                Save
              </button>
              <button id="cancelBtn" onClick={closeModal}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
