'use client'
import MainLayout from "../../../components/core/layouts/MainLayout";
import MentorLayout from "../../../components/core/layouts/MentorLayout"
import {useState, useEffect } from "react"
import  useMentor  from "../../../hooks/useMentor"
import Modal from "../../../components/Mentor/Modal"

const Mentor = () => {
    const [qa, setQa] = useState();
    const [mentor, setMentor] = useState();
    const {getQAList, getProfiles} = useMentor();
 
    let id;
    let role;
    if (typeof window !== "undefined") {
        id = localStorage.getItem("userId");
        role = localStorage.getItem("role");
    }

    useEffect(() => {
        const fetchUserList = async () => {
            try {
                const userListData = await getProfiles();
                setMentor(userListData);
            } catch (error) {
                console.error("Error fetching user list:", error);
            }
        };

        fetchUserList();
    }, []);
    console.log(mentor);
    
    const mentorName = mentor?.map((mentor) => {
        let fName = mentor.firstName;
        let sName = mentor.lastName;
        let id = mentor.id;
        if(fName != null && sName != null) {
            return {
                fName,
                sName,
                id
            }
        }
    })

    console.log(mentorName);

    useEffect(() => {
        const fetchUserList = async () => {
            try {
                const userListData = await getQAList();
                setQa(userListData);
            } catch (error) {
                console.error("Error fetching user list:", error);
            }
        };
  
        fetchUserList();
    }, []);

    console.log(qa);

    return (
    <MainLayout>
        <MentorLayout>
            {
                qa?.map((item, key) => {
                    const date = item.createdAt;
                    let isAnswered = "Answering";
                    let answer = false;
                    if(item.answer != "") {
                        isAnswered = "Answered";
                        answer = true;
                    }
                    let text;
                    if(id = item.answerId) {
                        text = "To: "
                        
                    } else {

                    }
                    return (
                        <div className="grid place-items-center" key={key}>
                            <div className="my-5 flex border rounded-lg">
                                <div className="font-bold pr-3 pl-3 border-r">{key + 1}</div>
                                <div className="">
                                    <div className="flex h-[6vh]">
                                        <div className="w-[8vw] border-b border-r text-center font-bold">Question</div>
                                        <div className="pr-3 pl-5 w-[30vw] border-b">{item.question}</div>
                                    </div>
                                    <div className="flex h-[6vh]">
                                        <div className="w-[8vw] border-r text-center font-bold">Answer</div>
                                        <div className="pr-3 pl-5 w-[30vw] ">
                                            {item.answer == "" && role == "Mentor" ?
                                            <Modal theID={item.id} askerID={item.askerId}
                                            answerID={item.answerId} question={item.question} ></Modal> :
                                            item.answer}
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center w-[13vw] border-l">
                                    <div><span className="font-bold">Date: </span> {date.slice(0,date.indexOf('T'))}</div>
                                    <div><span className="font-bold">Status: 
                                    </span> <span className="font-bold" style={{color: answer ? "#ADFF2F" : "red"}}>{isAnswered}</span></div>
                                    <div></div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </MentorLayout>
    </MainLayout>
    );
};



export default Mentor;


