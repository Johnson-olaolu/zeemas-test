import { faCaretDown, faEllipsisH } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { AlertCircle, ArrowDown, ArrowUp, ChevronDown } from 'react-feather'
import SideBar1 from '../components/SideBar1'
import SideBar2 from '../components/SideBar2'
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, } from 'recharts';

const data = [
    {
        name: 'Coding',
        Idle: 100,
        Productive: 40,
    },
    {
        name: 'Code Review',
        Idle: 40,
        Productive: 80,
    },
    {
        name: 'QA Review',
        Idle: 30,
        Productive: 100,
    }
];

const chartData = [
    {
        "New work": 25,
        "Rework": 15,
        "Refactor": 40,
        "Bugs": 20,
    }
];


const circleData = [
    { name: 'Coding', value: 4 },
    { name: 'Code Review', value: 8 },
    { name: 'QA Review', value: 1 },
    { name: 'Idle Time', value: 3 },
    { name: 'Deployment', value: 1 },
];
const circleColors = [
    "#6DBB9A", "#56B0E3", "#0F283B", "#DF6340", "#7E6BF1"
]

const Dashboard = () => {
    return (
        <div className=' h-screen overflow-hidden'>
            <section className="flex">
                <div className="sidebar flex">
                    <SideBar1 />
                    <SideBar2 />
                </div>
                <div className=" flex-grow overflow-auto bg-gray-100 h-screen px-12 py-8">
                    <div className=" text-right mb-9">
                        <FontAwesomeIcon icon={faEllipsisH} className=' text-Sidebar2MenuText' />
                    </div>
                    <div className="flex justify-between items-center mb-3">
                        <span className=" font-bold">Project stats</span>
                        <div className=" rounded-lg bg-white flex justify-between px-3 items-center h-10  space-x-8">
                            <span className=' text-Sidebar2Text text-xs'>All time</span>
                            <FontAwesomeIcon icon={faCaretDown} className='text-Sidebar2Icon ' />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-24">
                        <div className=" grid grid-cols-2 gap-4">
                            <div className="col-span-1  bg-white rounded-lg px-4 pb-4">
                                <div className="flex items-center h-12 border-b border-gray-100 space-x-2 mb-7">
                                    <span className=' text-xs text-Sidebar2MenuText'>Average PR Size</span>
                                    <AlertCircle className=' w-3 text-Sidebar2MenuText' />
                                </div>
                                <div className=" grid grid-cols-2 mb-7">
                                    <div className=" space-y-1">
                                        <p className="space-x-1">
                                            <span className=" font-bold ">968</span>
                                            <span className=" text-xxs text-Sidebar2MenuText">lines</span>
                                        </p>
                                        <p className="text-xs text-Sidebar2MenuText">Line Change</p>
                                    </div>
                                    <div className=" space-y-1">
                                        <p className="space-x-1">
                                            <span className=" font-bold ">240</span>
                                            <span className=" text-xxs text-Sidebar2MenuText">kb</span>
                                        </p>
                                        <p className="text-xs text-Sidebar2MenuText">Size</p>
                                    </div>
                                </div>
                                <div className=" h-7 rounded bg-green-100 w-16 px-2 flex items-center justify-between text-green-700">
                                    <ArrowUp className='h-4 w-4' />
                                    <span className=' text-xs font-medium'>24%</span>
                                </div>
                            </div>
                            <div className="col-span-1 bg-white rounded-lg px-4 pb-4">
                                <div className="flex items-center h-12 border-b border-gray-100 space-x-2 mb-7">
                                    <span className=' text-xs text-Sidebar2MenuText'>Average Ticket Duration</span>
                                    <AlertCircle className=' w-3 text-Sidebar2MenuText' />
                                </div>
                                <div className="mb-7">
                                    <div className=" space-y-1">
                                        <p className="space-x-1">
                                            <span className=" font-bold ">36</span>
                                            <span className=" text-xxs text-Sidebar2MenuText">hours</span>
                                        </p>
                                        <p className="text-xs text-Sidebar2MenuText">Hours worked</p>
                                    </div>
                                </div>
                                <div className=" h-7 rounded bg-red-100 w-16 px-2 flex items-center justify-between text-red-700">
                                    <ArrowDown className='h-4 w-4' />
                                    <span className=' text-xs font-medium'>79%</span>
                                </div>
                            </div>
                            <div className=" col-span-2 bg-white rounded-lg px-4 pb-4">
                                <div className="flex items-center h-12 border-b border-gray-100 space-x-2 mb-5">
                                    <span className=' text-xs text-Sidebar2MenuText'>Cycle Time</span>
                                    <AlertCircle className=' w-3 text-Sidebar2MenuText' />
                                </div>
                                <div className=" flex">
                                    <div className=" h-7 rounded bg-red-100 w-16 px-2 flex items-center justify-between text-red-700 self-end">
                                        <ArrowDown className='h-4 w-4' />
                                        <span className=' text-xs font-medium'>79%</span>
                                    </div>
                                    <div className=" grid grid-cols-2">
                                        <div className=" relative mb-3">
                                            <PieChart width={172} height={172} className=' relative'>
                                                <Pie
                                                    data={circleData}
                                                    cx={"50%"}
                                                    cy={"50%"}
                                                    innerRadius={56}
                                                    outerRadius={80}
                                                    fill="#8884d8"
                                                    dataKey="value"
                                                >
                                                    {circleData.map((entry, index) => (
                                                        <Cell key={`cell-${index}`} fill={circleColors[index % circleColors.length]} />
                                                    ))}
                                                </Pie>
                                            </PieChart>
                                            <div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                                                <span className=' text-xs font-bold'>17 hrs</span>
                                                <p className=' w-24 text-xxs text-Sidebar2MenuText'>Average across 50 tickets in 4 weeks</p>
                                            </div>
                                        </div>
                                        <div className="py-3 pl-10">
                                            <ul className=" h-full flex flex-col justify-between ">
                                                <li className="flex ">
                                                    <div className=" h-4 w-4 rounded-full mr-3" style={{ backgroundColor: "#6DBB9A" }}></div>
                                                    <span className=" text-xs font-medium mr-2">4hrs</span>
                                                    <span className=" text-xs text-Sidebar2MenuText">Coding</span>
                                                </li>
                                                <li className="flex ">
                                                    <div className=" h-4 w-4 rounded-full mr-3" style={{ backgroundColor: "#56B0E3" }}></div>
                                                    <span className=" text-xs font-medium mr-2">8hrs</span>
                                                    <span className=" text-xs text-Sidebar2MenuText">Code Review</span>
                                                </li>
                                                <li className="flex ">
                                                    <div className=" h-4 w-4 rounded-full mr-3" style={{ backgroundColor: "#0F283B" }}></div>
                                                    <span className=" text-xs font-medium mr-2">1hrs</span>
                                                    <span className=" text-xs text-Sidebar2MenuText">QA Review</span>
                                                </li>
                                                <li className="flex ">
                                                    <div className=" h-4 w-4 rounded-full mr-3" style={{ backgroundColor: "#DF6340" }}></div>
                                                    <span className=" text-xs font-medium mr-2">3hrs</span>
                                                    <span className=" text-xs text-Sidebar2MenuText">Idle Time</span>
                                                </li>
                                                <li className="flex ">
                                                    <div className=" h-4 w-4 rounded-full mr-3" style={{ backgroundColor: "#7E6BF1" }}></div>
                                                    <span className=" text-xs font-medium mr-2">1hrs</span>
                                                    <span className=" text-xs text-Sidebar2MenuText">Deployment</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="grid gap-4">
                            <div className="col-span-1  bg-white rounded-lg px-4 pb-4">
                                <div className="flex items-center h-12 border-b border-gray-100 space-x-2 mb-7">
                                    <span className=' text-xs text-Sidebar2MenuText'>Work Breakdown</span>
                                    <AlertCircle className=' w-3 text-Sidebar2MenuText' />
                                </div>
                                <div className="flex  mb-7 space-x-6">
                                    <p className="space-x-1">
                                        <span className=" font-bold ">968</span>
                                        <span className=" text-xxs text-Sidebar2MenuText">lines</span>
                                    </p>
                                    <p className="space-x-1">
                                        <span className=" font-bold ">54</span>
                                        <span className=" text-xxs text-Sidebar2MenuText">tickets</span>
                                    </p>
                                    <p className="space-x-1">
                                        <span className=" font-bold ">4</span>
                                        <span className=" text-xxs text-Sidebar2MenuText">total weeks worked</span>
                                    </p>
                                </div>
                                <div className=" h-8 mb-6">
                                    <ResponsiveContainer height={"100%"} width={"100%"}>
                                        <BarChart
                                            barCategoryGap="0%"
                                            layout="vertical"
                                            data={chartData}
                                            margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
                                        >
                                            <XAxis type="number" hide domain={["dataMin", "dataMax"]} />
                                            <YAxis type="category" hide domain={["dataMin", "dataMax"]} />
                                            <Bar dataKey="New work" stackId="a" fill="#6DBB9A" />
                                            <Bar dataKey="Rework" stackId="a" fill="#56B0E3" />
                                            <Bar dataKey="Refactor" stackId="a" fill="#0F283B" />
                                            <Bar dataKey="Bugs" stackId="a" fill="#DF6340" />
                                            <Bar dataKey="test" stackId="a" fill="#f2cc8f" />
                                        </BarChart>
                                    </ResponsiveContainer>
                                </div>
                                <div className=" grid grid-cols-2 gap-y-4">
                                    <div className="flex ">
                                        <div className=" h-4 w-4 rounded-full mr-3" style={{ backgroundColor: "#6DBB9A" }}></div>
                                        <span className=" text-xs font-medium mr-2">25%</span>
                                        <span className=" text-xs text-Sidebar2MenuText">New work</span>
                                    </div>
                                    <div className="flex ">
                                        <div className=" h-4 w-4 rounded-full mr-3" style={{ backgroundColor: "#56B0E3" }}></div>
                                        <span className=" text-xs font-medium mr-2">15%</span>
                                        <span className=" text-xs text-Sidebar2MenuText">Rework</span>
                                    </div>
                                    <div className="flex ">
                                        <div className=" h-4 w-4 rounded-full mr-3" style={{ backgroundColor: "#0F283B" }}></div>
                                        <span className=" text-xs font-medium mr-2">40%</span>
                                        <span className=" text-xs text-Sidebar2MenuText">Refactor</span>
                                    </div>
                                    <div className="flex ">
                                        <div className=" h-4 w-4 rounded-full mr-3" style={{ backgroundColor: "#DF6340" }}></div>
                                        <span className=" text-xs font-medium mr-2">20%</span>
                                        <span className=" text-xs text-Sidebar2MenuText">Bugs</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-1  bg-white rounded-lg px-4 pb-4">
                                <div className="flex items-center h-12 border-b border-gray-100  mb-7 justify-between">
                                    <div className="space-x-2 flex items-center">
                                        <span className=' text-xs text-Sidebar2MenuText'>Idle Time Breakdown</span>
                                        <AlertCircle className=' w-3 text-Sidebar2MenuText' />
                                    </div>
                                    <div className=" flex">
                                        <div className="flex ">
                                            <div className=" h-4 w-4 rounded-full mr-3" style={{ backgroundColor: "#f3f4f6" }}></div>
                                            <span className=" text-xs font-medium mr-2">Idle</span>
                                        </div>
                                        <div className="flex ">
                                            <div className=" h-4 w-4 rounded-full mr-3" style={{ backgroundColor: "#6DBB9A" }}></div>
                                            <span className=" text-xs font-medium mr-2">Production</span>
                                        </div>
                                    </div>
                                </div>
                                <div className=" h-24 bar-chart">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <BarChart
                                            width={20}
                                            height={300}
                                            data={data}
                                            barGap={8}
                                            barCategoryGap={40}
                                            margin={{
                                                top: 5,
                                                right: 30,
                                                left: 20,
                                                bottom: 5,
                                            }}>
                                            <XAxis dataKey="name" className='' />
                                            <Tooltip />
                                            <Bar dataKey="Idle" fill="#f3f4f6" />
                                            <Bar dataKey="Productive" fill="#6DBB9A" />
                                        </BarChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className="mb-6 flex items-center justify-between">
                            <span className=" font-bold ">Project stats</span>
                            <div className=" rounded-lg bg-white flex justify-between px-3 items-center h-10  space-x-8">
                                <span className=' text-Sidebar2Text text-xs'>All time</span>
                                <FontAwesomeIcon icon={faCaretDown} className='text-Sidebar2Icon ' />
                            </div>
                        </div>
                        <div className="grid grid-cols-4 gap-4">
                            <div className=" h-48 bg-white rounded-lg px-4 ">
                                <div className="flex items-center h-12 border-b border-gray-100 space-x-2 mb-7">
                                    <span className=' text-xs text-Sidebar2MenuText'>New Features Added</span>
                                    <AlertCircle className=' w-3 text-Sidebar2MenuText' />
                                </div>
                            </div>
                            <div className=" h-48 bg-white rounded-lg px-4 ">
                                <div className="flex items-center h-12 border-b border-gray-100 space-x-2 mb-7">
                                    <span className=' text-xs text-Sidebar2MenuText'>Complexity Assurance</span>
                                    <AlertCircle className=' w-3 text-Sidebar2MenuText' />
                                </div>
                            </div>
                            <div className=" h-48 bg-white rounded-lg px-4 ">
                                <div className="flex items-center h-12 border-b border-gray-100 space-x-2 mb-7">
                                    <span className=' text-xs text-Sidebar2MenuText'>Task Accuracy</span>
                                    <AlertCircle className=' w-3 text-Sidebar2MenuText' />
                                </div>
                            </div>
                            <div className=" h-48 bg-white rounded-lg px-4 ">
                                <div className="flex items-center h-12 border-b border-gray-100 space-x-2 mb-7">
                                    <span className=' text-xs text-Sidebar2MenuText'>Refactor Rate</span>
                                    <AlertCircle className=' w-3 text-Sidebar2MenuText' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Dashboard
