"use client";
import React, { useState } from "react";
import axios from "axios";
import schoolGirl from "../../../public/images/schoolGirl.png";
import { usePasswordReset } from "../../hooks/useResetPassword";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [step, setStep] = useState(0);
  const { send, verify, reset } = usePasswordReset();

  const theImage = schoolGirl.src;

  const sendEmail = async (e) => {
    e.preventDefault();
    try {
      await send(email);

      setStep(1);
    } catch (err) {
      console.error(err);
    }
  };

  const verifyCode = async (e) => {
    e.preventDefault();
    try {
      const response = await verify(email, code);

      if (response.status === 200) setStep(2);
    } catch (err) {
      alert("The verification code is incorrect");
    }
  };

  const resetPassword = async (e) => {
    e.preventDefault();
    try {
      await reset(email, password);
      window.location.href = "/login";
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div
        className="flex justify-center items-center  w-[100%] h-[100vh] "
        style={{ backgroundColor: "#BEE9F2" }}
      >
        <div className="h-[85vh] w-[80vw] flex">
          <div
            className="h-[100%] w-[46%] bg-no-repeat mr-[8%] rounded-3xl"
            style={{
              background: `url(${theImage})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div
            className="h-[50%] w-[46%] rounded-3xl items-center flex mt-[20vh]"
            style={{ background: "white" }}
          >
            <div className="bg-white rounded-lg p-8 w-[100%]">
              <div className="w-[80%] mx-auto">
                <h1 className="text-2xl font-semibold mb-4 text-center">
                  Reset Password
                </h1>
                <form
                  onSubmit={
                    step === 0
                      ? sendEmail
                      : step === 1
                      ? verifyCode
                      : resetPassword
                  }
                >
                  {step === 0 && (
                    <div>
                      <span className="text-[#333] text-sm">Email address</span>
                      <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your Email here"
                        className="border rounded-lg w-full px-3 py-2 mb-4"
                      />
                    </div>
                  )}

                  {step === 1 && (
                    <div>
                      <span className="text-[#333] text-sm">
                        Verification Code
                      </span>
                      <input
                        type="text"
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        placeholder="Enter the code sent to your email"
                        className="border rounded-lg w-full px-3 py-2 mb-4"
                      />
                    </div>
                  )}

                  {step === 2 && (
                    <div>
                      <span className="text-[#333] text-sm">New Password</span>
                      <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your new password"
                        className="border rounded-lg w-full px-3 py-2 mb-4"
                      />
                    </div>
                  )}

                  <button
                    type="submit"
                    className="bg-[#67D0FD] text-white w-full py-2 rounded-[40px] mt-4"
                  >
                    {step === 0
                      ? "Send Email"
                      : step === 1
                      ? "Verify Code"
                      : "Reset Password"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
