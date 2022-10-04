import React, { useState } from 'react';
import { TbUsers } from 'react-icons/tb';
import { MdOutlineManageSearch } from 'react-icons/md';
import { FiLogOut } from 'react-icons/fi';
import { NavLink, Outlet } from 'react-router-dom';
import Navbar from './Share/Navbar';

const Dashboard = () => {
    return (
        <div>
            <div className="min-h-screen bg-custom-gray">
                <Navbar />
                <section className="flex w-full">
                    <div
                    className='whitespace-nowrap mt-7'
                    >
                        <div className="md:mx-2 lg:mx-4">
                            <NavLink to="home">
                                {({ isActive }) => (
                                    <span
                                        className={
                                            isActive
                                                ? "flex bg-red-500  my-4 px-6 p-2 duration-300 transition cursor-pointer rounded text-white"
                                                : "hover:bg-custom-gray flex  my-4 px-6 p-2"
                                        }
                                    >
                                        <span className='flex items-center gap-2'> <TbUsers/>Add Student</span>
                                    </span>
                                )}
                            </NavLink>
                            <NavLink to="manage-student">
                                {({ isActive }) => (
                                    <span
                                        className={
                                            isActive
                                                ? "flex bg-red-500  my-4 px-6 p-2 duration-300 transition cursor-pointer rounded text-white"
                                                : "hover:bg-custom-gray flex  my-4 px-6 p-2"
                                        }
                                    >
                                        <span className='flex items-center gap-2'><MdOutlineManageSearch/>Manage Student</span>
                                    </span>
                                )}
                            </NavLink>
                            <NavLink to="logout">
                                {({ isActive }) => (
                                    <span
                                        className={
                                            isActive
                                                ? "flex bg-red-500  my-4 px-6 p-2 duration-300 transition cursor-pointer rounded text-white"
                                                : "hover:bg-custom-gray flex  my-4 px-6 p-2"
                                        }
                                    >
                                        <span className='flex items-center gap-2'><FiLogOut/>Logout</span>
                                    </span>
                                )}
                            </NavLink>
                        </div>
                    </div>
                    <div className="px-3 overflow-auto w-full">
                        <Outlet />
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Dashboard;