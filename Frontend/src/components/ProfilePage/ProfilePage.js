import React, { useEffect, useState, useRef } from 'react';
import Header from "../Header/Header";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import VanillaTilt from 'vanilla-tilt';
import './ProfilePage.css';

import {CheckCircleIcon} from "@heroicons/react/outline";

function Tilt(props) {
    const { options, ...rest } = props;
    const tilt = useRef(null);
  
    useEffect(() => {
      VanillaTilt.init(tilt.current, options);
    }, [options]);
  
    return <div ref={tilt} {...rest} />;
  }

const ProfilePage = () => {
    const [profile, setProfile] = useState(null);
    // useEffect(()=>{
    //     fetch("http://127.0.0.1:8000/api/getUser/aniketkulkarni").then(res=>res.json())
    //     .then(res=>setProfile(res))
    // }, [])

    const options = {
        scale: 1.04,
        speed: 1000,
        max: 2,
      };

    return (
        <>
            <Header/>
            <div className="profile-page__main">
                <div className="flex w-screen h-screen justify-around items-center">
                    <div className="flex-col" style={{marginTop: 200}}>
                        {/* {profile && */}
                        <Tilt options={options}>
                        <Card className="w-[80vh] pt-6 pb-12 my-10 px-[15%] text-center">
                                      <img style={{width: 150, height: 150, marginLeft: "33%", borderRadius: 100}}
                                        src="https://thumbs.dreamstime.com/b/rainbow-love-heart-background-red-wood-60045149.jpg" alt=""/>


                            <h1 className="profile-page__heading mb-12 mt-6">Suraj Shah</h1>


                            <span className="flex justify-left text-left font-[iceland] certified-lead"><CheckCircleIcon
                                className="my-auto inline h-10 px-4"/> Certified Lead<Button
                                className="self-end ml-auto my-auto">50 pts.</Button></span>

                            <hr className="mt-3 w-[100%] border-2 border-black"/>
                            
                            <div className="flex-col gap-[40px] justify-between mt-10">
                                <p className="text-left font-[Montserrat] my-4 font-[400]">Email id</p>
                                <span className="block text-left profile-description p-3">surajshah.bombay@gmail.com</span>
                                <p className="text-left font-[Montserrat] my-2 font-[400]">Twitter ID</p>
                                <span className="block text-left profile-description p-3">MajaMaNathi</span>
                                <p className="text-left font-[Montserrat] my-2 font-[400]">Tags Interested</p>
                                <span className="block text-left profile-description p-3">Finance, Loans</span>

                            </div>
                            


                        </Card>
                        </Tilt>
{/* } */}

                    </div>

                </div>

            </div>
        </>
);
};

export default ProfilePage;