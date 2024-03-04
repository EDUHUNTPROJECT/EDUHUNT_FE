
import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, Button, useDisclosure, Input} from "@nextui-org/react";
import { useRouter } from "next/navigation";
import {useState} from "react"

export default function MentorModal(prop) {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const [question, setQuestion] = useState();
    const router = useRouter();
    let role;
    if (typeof window !== "undefined") {
        role = localStorage.getItem("role");
    }

    const submit = (e) => {
        e.preventDefault();
    
        const url = "https://localhost:7292/api/QAs/Create";
        let urlAnswer = "https://localhost:7292/api/QAs/Edit"
    
        let payload = {
            askerId: prop.askerID,
            answerId: prop.answerID,
            question: question,
            answer: "",
        };

        let payload2 = {
            id: prop.theID,
            askerId: prop.askerID,
            answerId: prop.answerID,
            question: prop.question,
            answer: question,
        }

        console.log(payload2);

        let options;
        if(role == 'Mentor') {
            urlAnswer += ("/" + prop.theID);
            options = {
                headers: {
                    "Content-Type": "application/json",
                    },
                    method: "PUT",
                body: JSON.stringify(payload2),
            };
            fetch(urlAnswer, options)
        } else {
            options = {
                headers: {
                    "Content-Type": "application/json",
                    },
                    method: "POST",
                body: JSON.stringify(payload),
            };
            fetch(url, options)
        }
    
        
      };

    return (
        <div>
        <button onClick={onOpen}>
            {
                (role == "Mentor") ? 
                <div className="mt-1 p-1 rounded" style={{backgroundColor: "red"
                , color: "white"}}>Answer</div> :
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                </svg> 
            }
            
        </button>

        <Modal
            isOpen={isOpen} 
            onOpenChange={onOpenChange}
            placement="center"
            className="w-[50vw] h-[30vh]"
            style = {{backgroundColor: "grey", color: "white"}}
        >
            <ModalContent>
            {(onClose) => (
                <>
                <ModalHeader className="flex flex-col gap-1 text-center mt-5 text-xl">INSERT QUESTION</ModalHeader>
                <ModalBody>
                    <p className="ml-2">Input your question</p>
                    <form action="" onSubmit={submit}>
                        <Input
                        autoFocus
                        placeholder="Enter your question to this mentor"
                        variant="bordered"
                        onChange={(e) => {setQuestion(e.target.value)}} 
                        style={{color: "black"}}
                        />
                        <div className="flex">
                            <Button type="submit" color="primary" style={{backgroundColor: "blue"}} className="w-[20%] h-10 text-center rounded ml-5">
                            Send
                            </Button>
                            <Button color="danger" variant="flat" onPress={onClose} style={{backgroundColor: "red"}} className="w-[20%] h-10 text-center rounded ml-5">
                            Close
                            </Button>
                        </div>
                    </form>
                </ModalBody>
                </>
            )}
            </ModalContent>
        </Modal>
        </div>
    );
}