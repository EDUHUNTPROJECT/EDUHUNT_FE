'use client'
import { Modal, Button, Input, Upload } from "antd";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { mutate } from "swr";
import Toasify from "../../components/core/common/Toasify";
import { colors } from "@nextui-org/react";
import Link from "next/link";

const { TextArea } = Input;

const CreateQuestion = (props) => {
    
    const [toasify, setToasify] = useState({ message: "", type: "" });
    const [isVisible, setIsVisible] = useState(false);
    const [question, setQuestion] = useState();
    const [attachedFile, setAttachedFile] = useState(null);
    const [subject, setSubject] = useState();
    let role;
    if (typeof window !== "undefined") {
        role = localStorage.getItem("role");
    }

    const submit = async (e) => {
        e.preventDefault();
    
        const formData = new FormData();
        formData.append("file", attachedFile);
        formData.append("upload_preset", "tstdfsn5");
    
        let res;
        try {
          res = await axios.post(
            "https://api.cloudinary.com/v1_1/djnjql4tl/upload",
            formData
          );
        } catch (error) {
          console.error("Failed to upload the file.", error);
          setToasify({
            message: "Failed to upload the file.",
            type: "error",
          });
          return;
        }
    
        const url = "https://localhost:7292/api/QAs/Create";
        let urlAnswer = "https://localhost:7292/api/QAs/Edit";
    
        let payload = {
          askerId: props.askerID,
          answerId: props.answerID,
          question: question,
          subject: subject,
          answer: "",
          answerFile: "",
          askerFile: res.data.secure_url,
        };
    
        let payload2 = {
          id: props.theID,
          askerId: props.askerID,
          answerId: props.answerID,
          question: props.question,
          subject: props.subject,
          answer: question,
          answerFile: res.data.secure_url,
          askerFile: props.askerFile,
        };
    
        let options;
        if (role == "Mentor") {
          urlAnswer += "/" + props.theID;
          options = {
            headers: {
              "Content-Type": "application/json",
            },
            method: "PUT",
            body: JSON.stringify(payload2),
          };
    
          try {
            await fetch(urlAnswer, options);
            mutate(urlAnswer);
          } catch (error) {
            console.error("Error during fetch:", error);
            setToasify({
              message: "Answer updated successfully.",
              type: "success",
            });
          }
        } else {
          options = {
            headers: {
              "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify(payload),
          };
    
          try {
            await fetch(url, options);
            mutate(url);
          } catch (error) {
            console.error("Error during fetch:", error);
            setToasify({
              message: "Question submitted successfully.",
              type: "success",
            });
          }
        }
        setIsVisible(false);
    };

    console.log(props);

    return (
        <div className="w-[100%]">
                {role == "Mentor" ?  
                <div className="h-[60vh] bg-[#d5f1ff] w-[95%] ml-auto mr-auto mt-5 flex items-center">
                    <div className="ml-5">
                        <div className="flex items-center mb-5">
                            <h3 className="w-[5vw]">Subject </h3>
                            <Input
                                readOnly
                                value={props.subject}
                                className="w-[50vw]"
                                autoFocus
                                placeholder={`Enter the ${
                                    role === "Mentor" ? "answer" : "question"
                                } to this ${role === "Mentor" ? "subject" : "mentor"}`}
                            />
                        </div>
                        <div className="flex mb-1">
                            <h3 className="w-[5vw]">Question </h3>
                            <TextArea className="w-[50vw]" rows={4} placeholder="Enter your Question" maxLength={6} value={props.question} readonly/>
                            
                        </div>
                        <div className="flex mb-1">
                            <h3 className="w-[5vw]">Answer </h3>
                            <TextArea className="w-[50vw]" rows={4} placeholder="Enter your Answer" maxLength={6} onChange={(e) => {
                                    setQuestion(e.target.value);}}/>
                            
                        </div>
                        <div className="flex items-center mt-3  ">
                            <h3 className="w-[5vw]">Attach file</h3>
                            <Upload
                                beforeUpload={(file) => {
                                setAttachedFile(file);
                                return false;
                                }}
                            >
                            <Button className="">Click to Upload File</Button>
                            </Upload>
                        </div>
                        <div className="flex h-[6vh]">
                        <div className="w-[5vw] text-center flex items-center">
                            <div>Ask File</div>
                        </div>
                        <div className="pr-3 flex items-center ">
                            <Link href={props.askerFile || "k"} className="" color="" style={{textDecoration: '#000'}}>
                                <Button>
                                    {props.askerFile}
                                </Button>
                            </Link>
                        </div>
                        </div>
                        <button onClick={submit} className="px-3 py-2 bg-[#00277F] rounded mt-3" style={{color: 'white'}}>Submit</button>
                    </div>
                </div>
                : 
                <div className="h-[42vh] bg-[#d5f1ff] w-[95%] ml-auto mr-auto mt-5 flex items-center">
                    <div className="ml-5">
                        <div className="flex items-center mb-5">
                            <h3 className="w-[5vw]">Subject </h3>
                            <Input
                                className="w-[50vw]"
                                autoFocus
                                placeholder={`Enter the ${
                                    role === "Mentor" ? "answer" : "question"
                                } to this ${role === "Mentor" ? "subject" : "mentor"}`}
                                onChange={(e) => {
                                    setSubject(e.target.value);
                            }}
                            />
                        </div>
                        <div className="flex mb-1">
                            <h3 className="w-[5vw]">Question </h3>
                            <TextArea className="w-[50vw]" rows={4} placeholder="Enter your Question" maxLength={6} onChange={(e) => {
                                    setQuestion(e.target.value);}}/>
                        </div>
                        <div className="flex items-center mt-3  ">
                            <h3 className="w-[5vw]">Attach file</h3>
                            <Upload
                                beforeUpload={(file) => {
                                setAttachedFile(file);
                                return false;
                                }}
                            >
                            <Button className="">Click to Upload File</Button>
                            </Upload>
                        </div>
                        <button onClick={submit} className="px-3 py-2 bg-[#00277F] rounded mt-3" style={{color: 'white'}}>Submit</button>
                    </div>
                </div>
                }
        </div>
    )
}

export default CreateQuestion