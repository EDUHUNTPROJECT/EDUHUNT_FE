'use client'
import Link from "next/link"
import { useState } from "react";

const Avatars = () => {
    const [state, setState] = useState(false);
    let overflowStyle = {
        
    };
    if(state == false) {
        overflowStyle = {
            overflow: "hidden"
        }
    } else {
        overflowStyle = {
            overflow: "visible"
        }
    }
    return (
        <div className="max-h-12 grid place-items-center" style={overflowStyle}>
            <div className="mb-1 pt-1 pb-1 " onClick={() => {setState(!state)}}>
                <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-white avatarImage"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                />
            </div>
            <div className="w-40 rounded text-xl shadow-md"  style={{background: "rgb(141, 232, 250)"}}>
                    <div className="hover:bg-black loginNavBar pb-1">
                        <Link href={"/login"} className="ml-4">Login</Link>
                    </div>
                    <div className="loginNavBar pb-1">
                        <Link href={"/login"} className="ml-4">Sign Up</Link>
                    </div>
            </div>
        </div>
    )
}

export default Avatars