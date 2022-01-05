import React, { useEffect } from 'react'
import fcmbLogo from '../img/FCMB_Logo.png'
import { ChevronDown, ChevronLeft, ChevronRight } from 'react-feather'
import {FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCaretDown} from "@fortawesome/free-solid-svg-icons"

const SideBar2 = () => {

    useEffect(() => {
        Array.from(document.querySelectorAll(".sidebar-active-ul li")).forEach(element => {
            element.addEventListener("click",() => {
                    if(!element.classList.contains("active")) {
                        document.querySelector(".sidebar-active-ul li.active").classList.remove("active")
                        element.classList.add("active")
                    }
                } )
        })
    }, [])
    return (
        <div className='h-screen w-52 basis-52 bg-white py-7 px-6'>
            <div className=" flex items-center space-x-2 mb-7">
                <ChevronLeft className=' h-4 w-4'/>
                <img src={fcmbLogo} alt="" className=" w-5 " />
                <h2 className=" text-ellipsis w-24 whitespace-nowrap overflow-hidden font-bold text-xs text-Sidebar2Text">FCMB: Mobile Bank</h2>
            </div>
            <h2 className=" text-xs mb-2 text-Sidebar2MenuText">Workflows</h2>
            <div className=" rounded-lg bg-gray-100 flex justify-between px-3 items-center h-8 text-xs mb-6">
                <span className=' text-Sidebar2Text'>Product dev</span>
                <ChevronDown className=' text-Sidebar2Icon' />
            </div>
            <div className="">
                <ul className=" space-y-3">
                    <li className="">
                        <div className=" flex justify-between items-center mb-3">
                            <span className=" text-xs text-Sidebar2TextSelected font-medium">Overview</span>
                            <FontAwesomeIcon  icon={faCaretDown} className=' text-Sidebar2TextSelected '/>
                        </div>
                        <ul className="sidebar-active-ul relative space-y-2">
                            <li className="active text-xs text-Sidebar2MenuText hover:text-Sidebar2TextSelected pl-4 border-l-2 border-transparent py-1 font-medium hover:border-Sidebar2TextSelected">Project Stats</li>
                            <li className="text-xs text-Sidebar2MenuText hover:text-Sidebar2TextSelected pl-4 border-l-2 border-transparent py-1 font-medium hover:border-Sidebar2TextSelected">Planning</li>
                            <li className="text-xs text-Sidebar2MenuText hover:text-Sidebar2TextSelected pl-4 border-l-2 border-transparent py-1 font-medium hover:border-Sidebar2TextSelected">Teamwork</li>
                            <li className="text-xs text-Sidebar2MenuText hover:text-Sidebar2TextSelected pl-4 border-l-2 border-transparent py-1 font-medium hover:border-Sidebar2TextSelected">Team health</li>
                            <li className="text-xs text-Sidebar2MenuText hover:text-Sidebar2TextSelected pl-4 border-l-2 border-transparent py-1 font-medium hover:border-Sidebar2TextSelected">Investment</li>
                        </ul>
                    </li>
                    <li className="text-xs text-Sidebar2MenuText hover:text-Sidebar2TextSelected  font-medium cursor-pointer">Action center</li>
                    <li className="text-xs text-Sidebar2MenuText hover:text-Sidebar2TextSelected  font-medium cursor-pointer">Apps</li>
                    <li className="text-xs text-Sidebar2MenuText hover:text-Sidebar2TextSelected  font-medium cursor-pointer">Tasks</li>
                    <li className="text-xs text-Sidebar2MenuText hover:text-Sidebar2TextSelected  font-medium cursor-pointer">Code Review</li>
                    <li className="text-xs text-Sidebar2MenuText hover:text-Sidebar2TextSelected  font-medium cursor-pointer">QA Review</li>
                    <li className="text-xs text-Sidebar2MenuText hover:text-Sidebar2TextSelected  font-medium cursor-pointer">Notes</li>
                </ul>
            </div>
        </div>
    )
}

export default SideBar2
