import React from 'react';
import { BiSearch } from 'react-icons/bi';
import { GiCharacter } from 'react-icons/gi';
import { BsCurrencyDollar } from 'react-icons/bs';
import { AiFillSetting } from 'react-icons/ai';
import NavbarDashboard from '../../pages/NavbarDashboard'

const Dashboard = () => {
    return (
        <div>
            <NavbarDashboard/>
            <div className='px-[100px] grid grid-cols-2'>
                <div>
                    <div className='pt-14 max-w-6xl mx-[100px]'>
                        <div className='border border-gray-300 rounded w-[900px] flex py-3 items-center px-3'>
                            <BiSearch className='mr-2' />
                            <input type="text" className='flex-1 bg-white' placeholder='Search'></input>
                        </div>

                    </div>
                    <h3 className='text-3xl font-bold  text-indigo-700 my-12 mx-[100px]'>
                        Welcome Back User!
                    </h3>
                </div>
                <div className='flex px-[475px] pt-14 py-[140px] space-x-20'>
                    <button>
                        <BsCurrencyDollar size={30}></BsCurrencyDollar>
                    </button>
                    <button>
                        <AiFillSetting size={30}></AiFillSetting>
                    </button>
                    <button>
                        <GiCharacter size={30}></GiCharacter>
                    </button>
                </div>
            </div>
            <div className='grid grid-rows-3 grid-flow-col'>
                <div className='mx-[200px] my-[-25px] text-5xl font-bold '>
                    Overview
                </div>
                <div className='flex flex-row-2'>
                    <div className='text-[#008000] mx-[200px] my-[-30px] text-7xl font-bold box-content h-20 w-flex p-4 border-4'>
                        $2000
                    </div>
                </div>

                <div className='text-2xl font-light mx-[200px] my-[25px]'>
                    Remaining from a $5000 budget
                </div>
            </div>



        </div>





    )
}

export default Dashboard