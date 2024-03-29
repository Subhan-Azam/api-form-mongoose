import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <>
      <ul className="bg-slate-400 flex gap-7 p-5 text-xl font-bold">
        <li>
          <Link href="/form">Form</Link>
        </li>
        <li>
          <Link href="/dashboard">Dashboard</Link>
        </li>
      </ul>
    </>
  );
}
