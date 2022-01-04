import React from 'react'
import SideBar1 from '../components/SideBar1'
import SideBar2 from '../components/SideBar2'

const Dashboard = () => {
    return (
        <div className=' h-screen'>
            <section className="flex">
                <div className="sidebar flex">
                    <SideBar1/>
                    <SideBar2/>
                </div>
            </section>
        </div>
    )
}

export default Dashboard
