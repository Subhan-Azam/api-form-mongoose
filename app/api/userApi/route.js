import dbConnect from "@/config/dbConnect";
// import  User  from "@/schema/user/User";
import User from "../../../schema/userschema/User";
import { NextResponse } from "next/server";

dbConnect();
export const POST = async (req) => {
  try {
    let body = await req.json();
    // console.log(body);
    if (body.name && body.lastname) {
      let newUser = new User(body);
      await newUser.save();
    }
    return NextResponse.json({ massage: "data successfully add" });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ massage: "Something wrong" });
  }
};

export const DELETE = async (req) => {
  try {
    let body = await req.json();
    if (body.id) {
      await User.deleteOne({
        _id: body.id,
      });
    }

    return NextResponse.json({ message: "successfully Deleted" });
  } catch (error) {
    return NextResponse.json({ message: "something wrong" });
  }
};

export const PUT = async (req) => {
  try {
    let body = await req.json();
    if (body.name && body.lastname) {
      let result = await User.findByIdAndUpdate(
        { _id: body.id },
        {
          name: body.name,
          lastname: body.lastname,
        }
      );
      console.log(result);
      return NextResponse({ message: "Successfully updated" });
    }
  } catch (error) {
    return NextResponse({ message: "somthing wrong" });
  }
};
