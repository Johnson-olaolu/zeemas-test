import React, { useEffect, useState } from 'react'
import fcmbLogo from '../img/FCMB_Logo.png'
import { ChevronDown, ChevronLeft, ChevronRight } from 'react-feather'
import {FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCaretDown} from "@fortawesome/free-solid-svg-icons"

const SideBar2 = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    useEffect(() => {
        Array.from(document.querySelectorAll(".sidebar-active-ul li")).forEach(element => {
            element.addEventListener("click",() => {
                    if(!element.classList.contains("active")) {
                        document.querySelector(".sidebar-active-ul li.active").classList.remove("active")
                        element.classList.add("active")
                    }
                } )
        })

        Array.from(document.querySelectorAll(".sidebar-menu > li")).forEach(element => {
            element.addEventListener("click",() => {
                    if(!element.classList.contains("menu-active")) {
                        console.log("hello")
                        document.querySelector(".sidebar-menu li.menu-active").classList.remove("menu-active")
                        element.classList.add("menu-active")
                    }
                } )
        })

        if(menuOpen) {
            document.querySelector(".sidebar-active-ul").classList.remove("hidden")
        }else {
            document.querySelector(".sidebar-active-ul").classList.add("hidden")
        }
    }, [menuOpen])
    return (
        <div className='h-screen w-52 basis-52 bg-white py-7 px-6'>
            <div className=" flex items-center space-x-2 mb-7">
                <ChevronLeft className=' h-4 w-4'/>
                <img src={fcmbLogo} alt="" className=" w-5 " />
                <h2 className=" text-ellipsis w-24 whitespace-nowrap overflow-hidden font-bold text-xs text-Sidebar2Text font-Futura tracking-wide">FCMB: Mobile Bank</h2>
            </div>
            <h2 className=" text-xs font-semibold mb-2 text-Sidebar2MenuText">Workflows</h2>
            <div className=" rounded-lg bg-gray-100 flex justify-between px-3 items-center font-semibold h-8 text-sm mb-6">
                <span className=' text-Sidebar2Text'>Product dev</span>
                <ChevronDown className=' text-Sidebar2Icon' />
            </div>
            <div className="">
                <ul className="sidebar-menu space-y-3">
                    <li className="menu-active text-Sidebar2MenuText hover:text-Sidebar2TextSelected">
                        <div className=" flex justify-between items-center mb-3 menu-active ">
                            <span className=" cursor-pointer text-sm  font-semibold"
                            onClick={ () => {setMenuOpen(!menuOpen)}}>Overview</span>
                            <FontAwesomeIcon onClick={ () => {setMenuOpen(!menuOpen)}}  icon={faCaretDown} className=' text-Sidebar2TextSelected cursor-pointer '/>
                        </div>
                        <ul className="sidebar-active-ul relative space-y-2">
                            <li className="active text-sm text-Sidebar2MenuText hover:text-Sidebar2TextSelected pl-4 border-l-2 border-transparent py-1 font-semibold hover:border-Sidebar2TextSelected">Project Stats</li>
                            <li className="text-sm text-Sidebar2MenuText hover:text-Sidebar2TextSelected pl-4 border-l-2 border-transparent py-1 font-semibold hover:border-Sidebar2TextSelected">Planning</li>
                            <li className="text-sm text-Sidebar2MenuText hover:text-Sidebar2TextSelected pl-4 border-l-2 border-transparent py-1 font-semibold hover:border-Sidebar2TextSelected">Teamwork</li>
                            <li className="text-sm text-Sidebar2MenuText hover:text-Sidebar2TextSelected pl-4 border-l-2 border-transparent py-1 font-semibold hover:border-Sidebar2TextSelected">Team health</li>
                            <li className="text-sm text-Sidebar2MenuText hover:text-Sidebar2TextSelected pl-4 border-l-2 border-transparent py-1 font-semibold hover:border-Sidebar2TextSelected">Investment</li>
                        </ul>
                    </li>
                    <li className="text-sm text-Sidebar2MenuText hover:text-Sidebar2TextSelected  font-semibold cursor-pointer" onClick={ () => {setMenuOpen(false)}}>Action center</li>
                    <li className="text-sm text-Sidebar2MenuText hover:text-Sidebar2TextSelected  font-semibold cursor-pointer"  onClick={ () => {setMenuOpen(false)}}>Apps</li>
                    <li className="text-sm text-Sidebar2MenuText hover:text-Sidebar2TextSelected  font-semibold cursor-pointer"  onClick={ () => {setMenuOpen(false)}}>Tasks</li>
                    <li className="text-sm text-Sidebar2MenuText hover:text-Sidebar2TextSelected  font-semibold cursor-pointer"  onClick={ () => {setMenuOpen(false)}}>Code Review</li>
                    <li className="text-sm text-Sidebar2MenuText hover:text-Sidebar2TextSelected  font-semibold cursor-pointer"  onClick={ () => {setMenuOpen(false)}}>QA Review</li>
                    <li className="text-sm text-Sidebar2MenuText hover:text-Sidebar2TextSelected  font-semibold cursor-pointer"  onClick={ () => {setMenuOpen(false)}}>Notes</li>
                </ul>
            </div>
        </div>
    )
}

export default SideBar2
