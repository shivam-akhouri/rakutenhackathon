import React, { useEffect, useState } from 'react';
import './Home.css';
import {auth, db} from "../../firebase";
import {Navigate} from "react-router-dom";
import { useSelector } from "react-redux";
import { selectChannelId, selectChannelName } from "../../features/channelSlice";
import {useAuthState} from "react-firebase-hooks/auth";
import Profile from "../Profile/Profile";
import Header from "../Header/Header";
import Card from "../UI/Card/Card";
// import firebase from "firebase";
import {useCollection} from "react-firebase-hooks/firestore";
import Banner from "../UI/Banner/Banner";
import Chat from "../Chat/Chat";
import {PaperAirplaneIcon, PaperClipIcon} from "@heroicons/react/outline";
import { useRef } from "react";
import { addDoc, collection, query } from 'firebase/firestore/lite';
import { doc, getDocs, onSnapshot } from 'firebase/firestore';

const Home = () => {
    // const [user] = useAuthState(auth);
    // // for displaying through firebase
    // const channelId = useSelector(selectChannelId);
    // const channelName = useSelector(selectChannelName);
    const q = query(collection(db, "message/user1/user2"));
    const [message, setMessage] = useState("")
    const [messages, setMessages] = useState(null);
    function handleSubmit(){
        addDoc(q, {
            text: message,
            sender: "user1",
            receiver: "user2",
            createdAt: new Date()
        }).then(val=>setMessage(""))
    }
    useEffect(()=>{
        const unsubscribe = onSnapshot(q, snapshot=>{
            setMessages(snapshot.docs.map(data =>data.data()));
            // console.log(snapshot.docs[0].data())
        })
    }, [])

    return (
        <>
            <Header/>
            <div className="home__section h-[91vh] overflow-hidden pt-3">

                {/*{!user && <Navigate replace to="/"/>}*/}
                {/*<div className="flex h-56 bg-[#000000] text-white">fnsjkfjksnjksff</div>*/}
                <div className="flex">
                    <div className="flex flex-col gap-5">
                        <Card className="card py-6 ml-5 w-[20rem]">

                    <span className="subheading px-6">
                        Chat
                    </span>
                            <hr/>
                            <div className="h-[20vh] flex-grow overflow-y-scroll">
                                <Profile type="square" name="dude 1"/>
                                <Profile type="square" name="dude 2"/>
                                <Profile type="square" name="dude 3"/>
                                <Profile type="square" name="dude 4"/>
                                <Profile type="square" name="dude 4"/>
                                <Profile type="square" name="dude 4"/>
                            </div>
                        </Card>

                        <Card className="card py-6 ml-5 w-[20rem]">
                    <span className="subheading px-6">
                        Circles
                    </span>
                            <hr/>
                            <div className="h-[42vh] flex-grow overflow-y-scroll">
                                <Profile type="rounded-full" name="Circle 1"/>
                                <Profile type="rounded-full" name="Circle 2"/>
                                <Profile type="rounded-full" name="Circle 3"/>
                                <Profile type="rounded-full" name="Circle 4"/>
                                <Profile type="rounded-full" name="Circle 5"/>
                                <Profile type="rounded-full" name="Circle 6"/>
                                <Profile type="rounded-full" name="Circle 7"/>
                                <Profile type="rounded-full" name="Circle 7"/>
                                <Profile type="rounded-full" name="Circle 7"/>
                                <Profile type="rounded-full" name="Circle 7"/>
                            </div>

                            {/*for displaying through firebase*/}
                            {/*{channels?.docs.map((doc)=>(*/}
                            {/*    <Channel key={doc.id} id={doc.id} channelName={}/>*/}
                            {/*))}*/}

                        </Card>
                    </div>
                    <div className="flex px-5">

                        <Card className="absolute card flex flex-col overflow-y-auto pb-6 h-[88vh]">

                            <Banner heading="Circle 1"/>

                                <div
                                    className="sticky top-5 bottom-20 chat__input-section flex items-center p-2.5 mx-8
                                    mb-4">

                                    <PaperClipIcon className="h-10 mr-5 text-[#72767d]"/>

                                    <div className="flex items-center chat__input w-full">
                                        <input type="text" placeholder="Search"
                                               className="focus:outline-none w-full bg-transparent p-4"
                                               value={message} onChange={(e)=>setMessage(e.target.value)}
                                        />
                                        <button type="submit" onClick={handleSubmit}>
                                            <PaperAirplaneIcon className="h-10 text-[#72767d] mr-1 rotate-90"/>
                                        </button>

                                    </div>
                                </div>
                            <div className="flex flex-col gap-2">
                                {messages != null && messages.map(({text, sender})=>(
                                        <Chat text={text} isUser={"user1" == sender}/>
                                ))}
                            </div>
                        </Card>
                    </div>
                </div>


            </div>
        </>
    );
};

export default Home;