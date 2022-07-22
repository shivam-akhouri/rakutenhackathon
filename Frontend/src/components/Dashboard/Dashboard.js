import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from "../Header/Header";
import Card from "../UI/Card/Card";
import Profile from "../Profile/Profile";
import HeadphonesIcon from '@mui/icons-material/Headphones';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import SpeakerIcon from '@mui/icons-material/Speaker';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import skull from '../Assets/toxic (1).png'
import heart from '../Assets/love (1).png'
import car from '../Assets/toy-car.png'
import home from '../Assets/home.png'
import Banner from "../UI/Banner/Banner";
import {PaperAirplaneIcon, PaperClipIcon} from "@heroicons/react/outline";
import './Dashboard.css';
import {ChatBot} from "../UI/ChatBot/ChatBot"
import {
    PieChart,
    Pie,
    Legend,
    ResponsiveContainer,
    BarChart,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Bar,
    Cell
} from "recharts";
import { width } from '@mui/system';

const Dashboard = () => {
    const sentiments = [
        {name: 'Positive', students: 400, fill: '#7A86B6' },
        {name: 'Negative', students: 700, fill: '#A8A4CE' },
        {name: "Neutral", students: 200, fill: "#C8B6E2"}
    ]

    const data = [
        {name: 'Smartphones', students: 400, fill: '#F806CC'},
        {name: 'Headphones', students: 700, fill: '#570A57'},
        {name: 'Cars', students: 200, fill: '#A91079'},
        {name: 'Speakers', students: 1000, fill: '#2E0249'}
    ];

    const segregatedData = [
        {
            "name": "Life Insurance",
            "positive": 4000,
            "negative": 2400
        },
        {
            "name": "Home Insurance",
            "positive": 3000,
            "negative": 1398
        },
        {
            "name": "Automobile Insurance",
            "positive": 2000,
            "negative": 9800
        },
        {
            "name": "Health Insurance",
            "positive": 2780,
            "negative": 3908
        }
      ]
    const [insuranceData, setInsuranceData] = useState([
        {name: 'Positive', students: 1, fill: 'green' },
        {name: 'Negative', students: 1, fill: 'red' },
        {name: "Neutral", students: 1, fill: "yellow"}
    ]);
    const [chartData, setchartData] = useState(null);
    const [collective, setCollective] = useState([
        {name: 'SmartPhones', students: 0, fill: '#D61C4E' },
        {name: 'HeadPhones', students: 0, fill: '#F77E21' },
        {name: 'Cars', students: 0, fill: '#FAC213' },
        {name: 'Speakers', students: 0, fill: '#66BFBF' }
    ])
    const [lifeInsurance, setLifeInsurance] = useState(null);
    const [healthInsurance, setHealthInsurance] = useState(null);
    const [homeInsurance, setHomeInsurance] = useState(null);
    const [carInsurance, setCarInsurance] = useState(null);
    const [lifeInsuranceUsers, setLifeInsuranceUsers] = useState(null);
    const [healthInsuranceUsers, setHealthInsuranceUsers] = useState(null);
    const [carInsuranceUsers, setCarInsuranceUsers] = useState(null);
    const [homeInsuranceUsers, setHomeInsuranceUsers] = useState(null);
    const [item, setItem] = useState(0);
    useEffect(()=>{
        fetch("http://127.0.0.1:8000/api/getTwitterSentiments/life-insurance")
        .then(res=>res.json())
        .then(res=>{
            setLifeInsurance(res['data']);
            setLifeInsuranceUsers(res['users']);
            setCollective([
                ...collective,
                collective[0].students = res['data'].length
            ]);
        })
        // .then(life)
        fetch("http://127.0.0.1:8000/api/getTwitterSentiments/health-insurance")
        .then(res=>res.json())
        .then(res=>{
            setHealthInsurance(res['data'])
            setHealthInsuranceUsers(res['users']);
            setCollective([
                ...collective,
                collective[1].students = res['data'].length
            ])
            
    })
    fetch("http://127.0.0.1:8000/api/getTwitterSentiments/insurance")
    .then(res=>res.json())
    .then(res=>{
        setCarInsurance(res['data']);
        setCarInsuranceUsers(res['users']);
        setCollective([
            ...collective,
            collective[2].students = res['data'].length
        ])
        
    })
    fetch("http://127.0.0.1:8000/api/getTwitterSentiments/finance")
    .then(res=>res.json())
    .then(res=>{
            setHomeInsurance(res['data'])
            setHomeInsuranceUsers(res['users']);
            setCollective([
                ...collective,
                collective[3].students = res['data'].length
            ])
    }).then(()=>console.log(collective))

    }, [collective])

    return (
        <div>
            <Header/>
            <div className="home__section overflow-hidden px-10 py-5">
                <span className="dashboard-heading__main px-5">Dashboard</span>
                <div className="flex">
                    <div className="flex flex-col gap-5">
                        <Card className="card py-4 my-5 w-[20rem]">

                            <span className="subheading px-3">
                                Potential Leads
                            </span>
                            <hr/>
                            <div className="h-[68vh] flex-grow overflow-y-scroll">
                                <div className="flex justify-center py-3">
                                    <button className="toggle-button" onClick={()=>setItem(0)}>
                                        <a href="#" title="Header" data-toggle="popover" data-placement="top"
                                           data-content="Content"><SmartphoneIcon/></a>
                                 
                                    </button>

                                    <button className="toggle-button" onClick={()=>setItem(1)}>
                                    <a href="#" title="Header" data-toggle="popover" data-placement="bottom"
                                       data-content="Content"><HeadphonesIcon/></a>
                                  
                                    </button>

                                    <button className="toggle-button" onClick={()=>setItem(2)} >
                                    <a href="#" title="Header" data-toggle="popover" data-placement="left"
                                       data-content="Content"><DirectionsCarIcon/></a>
                                       
                                    </button>

                                    <button className="toggle-button" onClick={()=>setItem(3)} >
                                    <a href="#" title="Header" data-toggle="popover" data-placement="right"
                                       data-content="Content"><SpeakerIcon/></a>
                                       
                                    </button>
                                </div>
                                {
                                    item ===0 && lifeInsuranceUsers && 
                                    lifeInsuranceUsers.map(data=>(<Profile authorId={"1381371098193747974"} type="square" name={data.name}/>))
                                }
                                {
                                    item ===1 && healthInsuranceUsers && 
                                    healthInsuranceUsers.map(data=>(<Profile type="square" name={data.name}/>))
                                }
                                {
                                    item ===2 && carInsuranceUsers && 
                                    carInsuranceUsers.map(data=>(<Profile type="square" name={data.name}/>))
                                }
                                {
                                    item ===3 && homeInsuranceUsers && 
                                    homeInsuranceUsers.map(data=>(<Profile type="square" name={data.name}/>))
                                }
                            </div>
                        </Card>
                    </div>
                    <div className="block flex flex-grow px-5 justify-evenly my-5 ">

                        <div>
                            <span
                                className="block dashboard-heading__chart px-5 text-center">Insurance Sentiments</span>
                            <ResponsiveContainer width={500} height="80%">
                                <PieChart width={200} height={200}>
                                    <Legend verticalAlign="bottom" align="center"/>
                                    <Pie data={sentiments} dataKey="students" outerRadius={200} fill="#8884d8" label/>
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                        <div>
                            <span
                                className="block dashboard-heading__chart px-5 text-center">Insurance Distributions</span>
                            <ResponsiveContainer width={500} height="85%">
                                <PieChart width={200} height={200}>
                                    <Legend verticalAlign="bottom" align="center" />
                                    <Pie data={data} dataKey="students" outerRadius={200} fill="#8884d8" label/>
                                </PieChart>
                            </ResponsiveContainer>
                        </div>

                    </div>
                </div>


            </div>
            <div className="flex flex-grow px-5 justify-end bg-[#B9E5FF]">

                <div style={{marginRight: 20}}>
                    <span className="block dashboard-heading__chart px-5 text-center" >Segregagted Sentiments</span>
                    <BarChart width={1000} height={500} data={segregatedData}>
                        <CartesianGrid strokeDasharray="3 3"/>
                        <XAxis dataKey="name"/>
                        <YAxis/>
                        <Tooltip/>
                        <Legend/>
                        <Bar dataKey="negative" fill="#F94C66"/>
                        <Bar dataKey="positive" fill="#5A8F7B"/>
                    </BarChart>
                </div>
            </div>
             <ChatBot><Link to="/dashboard">ChatBot</Link></ChatBot>
        </div>
    );
};

export default Dashboard;