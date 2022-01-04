import React from 'react'
import { ChevronDown, ChevronRight, ChevronUp, CreditCard, GitPullRequest, Home, Inbox, Search, Users } from 'react-feather'

const SideBar1 = () => {
    return (
        <nav className=' h-screen  w-20 basis-20 bg-SideBar1Bg py-5 flex flex-col justify-between'>
            <div className="">
                <div className=" flex flex-col items-center space-y-4">
                    <div className=" h-8 w-8 bg-Sidebar1icon1Bg rounded-full flex flex-col justify-center items-center">
                        <ChevronUp className=' text-white h-4 -mb-2' />
                        <ChevronDown className=' text-white h-4 ' />
                    </div>
                    <div className=" h-8 w-8 rounded-lg bg-Sidebar1icon2Bg flex justify-center items-center">
                        <Search className=' text-Sidebar1icon1 h-4' />
                    </div>
                </div>
                <div className=' flex flex-col items-center space-y-1 py-7'>
                    <div className="h-8 w-8 rounded-lg bg-transparent hover:bg-Sidebar1NavHover flex justify-center items-center">
                        <Home className=' text-white w-4' />
                    </div>
                    <div className="h-8 w-8 rounded-lg bg-transparent hover:bg-Sidebar1NavHover flex justify-center items-center">
                        <Inbox className=' text-gray-50 w-4' />
                    </div>
                    <div className="h-8 w-8 rounded-lg bg-transparent hover:bg-Sidebar1NavHover flex justify-center items-center">
                        <GitPullRequest className=' text-gray-50 w-4' />
                    </div>
                    <div className="h-8 w-8 rounded-lg bg-transparent hover:bg-Sidebar1NavHover flex justify-center items-center">
                        <Users className=' text-gray-50 w-4' />
                    </div>
                    <div className="h-8 w-8 rounded-lg bg-transparent hover:bg-Sidebar1NavHover flex justify-center items-center">
                        <CreditCard className=' text-gray-50 w-4' />
                    </div>
                </div>
                <div className=" flex flex-col items-center border-t border-Sidebar1Nav2Border border-b py-7 space-y-4">
                    <div className="flex justify-center items-center h-6 w-6 rounded-full bg-blue-400 text-white uppercase text-xxs  ">
                        pn
                    </div>
                    <div className="flex justify-center items-center h-6 w-6 rounded-full bg-green-400 text-white uppercase text-xxs  ">
                        ji
                    </div>
                    <div className="flex justify-center items-center h-6 w-6 rounded-full bg-indigo-400 text-white uppercase text-xxs  ">
                        lg
                    </div>
                    <div className="flex justify-center items-center h-6 w-6 rounded-full bg-red-400 text-white uppercase text-xxs  ">
                        aw
                    </div>
                </div>
            </div>

            <div className=" flex justify-center">
                <div className=" h-10 w-10 rounded-full bg-Sidebar1icon1Bg flex justify-center items-center">
                    <ChevronRight className=' text-blue-600 ' />
                </div>
            </div>
        </nav>
    )
}

export default SideBar1
