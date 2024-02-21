"use client";
import Link from "next/link";
import { useState } from "react";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { redirect } from "next/navigation";

const Avatars = () => {
  const [state, setState] = useState(false);
  const { data: session } = useSession();
  var id = null;
  var email = null;

  const router = useRouter();

  if (typeof window !== "undefined") {
    id = localStorage.getItem("userId");
    email = localStorage.getItem("userEmail");
  }

  let overflowStyle = {};

  if (state == false) {
    overflowStyle = {
      overflow: "hidden",
    };
  } else {
    overflowStyle = {
      overflow: "visible",
    };
  }

  // if ((session && session.user) || (email && id != "null")) {
  return (
    <div className="max-h-12 grid place-items-center" style={overflowStyle}>
      <div
        className="mb-1 pt-1 pb-1 "
        onClick={() => {
          setState(!state);
        }}
      >
        <img
          className="inline-block h-10 w-10 rounded-full ring-2 ring-white avatarImage"
          src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ8NDQ0NFREWFhURFRUYHSggGBonHRUVITEhJSkrLi4uFx8zODMsNygtLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAOAA4AMBIgACEQEDEQH/xAAaAAEAAwEBAQAAAAAAAAAAAAAAAQUGBAMC/8QANBABAAIBAgMGAwcDBQAAAAAAAAECAwQRBSFBEjFRYXGRIjJSBhNCYoGxwSPh8DM0cpLR/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AN6AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACx03CMt+dtsdfzc59gVw0WHg2Gvzdq8+c7R7Q6a6DBHdip7bgyg1dtBhnvxU9tnPl4Pht3dqk+U7x7SDOCy1PB8tOdNskeXK3srZgAAAAAAAAAAAAAAAAAAB6afBbJaK0jeZ9ojxl846Ta0VrG8zO0R5tRoNHXDTaOdp+a3jIPjQ8Ophjf5r9bTHd6eDtAAAAABya7QUzRz+G/S8Rz/AF8XWAyOq098VuzeOfSekx4w8Ws1ulrmp2bcp/DbrWWWzYrUtNbRtMTtIPgAAAAAAAAAAAAAACI35R3z+4LrgGl5Tmn/AI1/mV08tPijHStI/DER+r1BCQAEJABAJAAVHHtLvWMsd9eVvOvit3xlpF62rPdaJiQY4fV6zWZrPfEzE+sPkAAAAAAAAAAAAB0cOp2s2OPzRPtzc7s4T/r4/Wf2BqAABCQAAAAAQCQAZbi1Ns+Tznf3hyO/jf8AuLelf2cAAAAAAAAAAAAAD30V+zlx28Lx7PABtBz6LP8AeYqX6zG0+sd7oBCQAQJABAJAAB5anNGOlrz+GJn1npAM1xO/az5J/Nt7cnKTO/Oe+QAAAAAAAAAAAAAAFrwLV9m04rTyvzr5W8F+xcNJwriEZa9m3LJWP+0eMAsAAAAAAAAFHx7V7zGGs8o539ekO7ievjDXaOeS3dHh5yzVpmZmZneZ5zPiCAAAAAAAAAAAAAAAAE1tMTExMxMc4mO+ELHR8IyZNpv/AE6+cfFP6A7NBxiJ+HN8Nul+k+vgtoc+m0OLF8tY3+qednSCEoSAAAqtdxetd64trW+r8Nf/AFaubU6HFl+asb/VHKQZa95tM2tMzM85me+XystZwjJj3mn9SvlG1o/RWgAAAAAAAAAAAAAAPvDite0VpG8z0Tgw2yWilY3mf83abQ6OuGu0c7T81usg8eH8Mpi2tba2Tx6V9FghIAAAhIAAAACv4hwymXe1dq5PHpb1WADHZsVsdpreNpjo+Gq12irmrtPK0fLbrDM58NsdppaNpj/NweYAAAAAAAAACYiZmIjnM8ojzQuOBaPefvrRyjlT16yDv4Zoow05/Pb5p8PJ2gAAAACEgAAAAAAA4uJ6KM1OXK9flnx8naAxkxMTtPKY5THghccd0e0/fV7p5X9ekqcAAAAAAAAHpp8M5L1pHfadvTza3FjilYrXlFY2hT/Z/T7zbLPT4a+vVdgAAAAAACEgAAAAAAAA+MuOL1mtucWjaWS1GGcd7Ut31nb1jxbBSfaDT7TXLHX4bevSQUwAAAAAAPbSY+3lpXxtG/p1BpeH4fu8VK9dt59Z5ukAAAAAAAQkAAAAAAAAAHNxDD95ivXrtvHrHN0gMWPbWY+xkvXwtO3o8QAAAAFhwOm+eJ+mtp/hXrf7O1+PJPhWI95/sC9AAABCQAABCUJAAAAAAAAAABm+OU2zzP1VrP8ACvW/2ir8eOfGto9p/uqAAAf/2Q=="
          alt=""
        />
      </div>
      <div
        className="w-40 rounded text-xl boxshadow-parent-div"
        style={{ background: "white" }}
      >
        <div className="loginNavBar rounded m-3 pb-1 text-center boxshadow-child-div hov-bg-grey hov-text-white">
          <Link href={"/profile"} className="">
            Profile
          </Link>
        </div>
        <div className="loginNavBar rounded m-3 pb-1 text-center boxshadow-child-div hov-bg-grey hov-text-white">
          <button
            onClick={() => {
              if (session && session.user) {
                signOut();
                router.replace("http://localhost:3000/login");
              } else {
                localStorage.removeItem("userEmail");
                localStorage.removeItem("userId");
                router.replace("http://localhost:3000/login");
              }
            }}
          >
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
}; //else {
//     redirect("http://localhost:3000/login")
// }
// };

export default Avatars;
