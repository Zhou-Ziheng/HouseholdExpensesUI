import React from "react";
import { BiSearch } from "react-icons/bi";
import { GiCharacter } from "react-icons/gi";
import { BsCurrencyDollar } from "react-icons/bs";
import { AiFillSetting } from "react-icons/ai";

const Dashboard = () => {
  return (
    <div>
      <div className="px-[100px] grid grid-cols-2">
        <div>
          <div className="pt-14 max-w-6xl mx-[100px]">
            <div className="border border-gray-300 rounded w-[900px] flex py-3 items-center px-3">
              <BiSearch className="mr-2" />
              <input
                type="text"
                className="flex-1 bg-white"
                placeholder="Search"
              ></input>
            </div>
          </div>
          <h3 className="text-3xl font-bold  text-[#7953a9] my-12 mx-[100px]">
            Welcome Back User!
          </h3>
        </div>
        <div className="flex px-[475px] pt-14 py-[140px] space-x-20">
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
      <div className="grid grid-rows-3 grid-col-2">
        <div className="mx-[200px] my-[-25px] text-5xl font-bold ">
          Overview
        </div>
        <div className="flex flex-row-2">
          <div className="text-[#008000] mx-[200px] my-[-30px] text-7xl font-bold box-content h-20 w-flex p-4 border-4">
            $2000
          </div>
        </div>

        <div className="flex text-2xl font-light mx-[200px] my-[25px]">
          Remaining from a $5000 budget
        </div>
        <table class="mx-[200px] w-[900px]">
          <thead class="bg-gray-50 border-b-2 border-gray-200">
            <tr>
              <th class="p-3 text-sm font-semibold tracking-wide">Users</th>
              <th class="p-3 text-sm font-semibold tracking-wide">Status</th>
              <th class="p-3 text-sm font-semibold tracking-wide">Utilities</th>
              <th class="p-3 text-sm font-semibold tracking-wide">School</th>
              <th class="p-3 text-sm font-semibold tracking-wide">Groceries</th>
              <th class="p-3 text-sm font-semibold tracking-wide">Rent</th>
              <th class="p-3 text-sm font-semibold tracking-wide">Clothes</th>
              <th class="p-3 text-sm font-semibold tracking-wide">Subscriptions</th>
              <th class="p-3 text-sm font-semibold tracking-wide">Entertainment</th>
              <th class="p-3 text-sm font-semibold tracking-wide">Miscellaneous</th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-[#c8b7e9]">
              <td class="p-3 text-sm text-gray-700">
                <a href="#" class="font-bold text-blue-500 hover:underline">User1</a>
              </td>
              <td>
                <span class="p-1.5 text-xs font-medium uppercase tracking-wider text-red-800 bg-red-200 rounded-lg bg-opacity-50">Owner</span>
              </td>
              <td class="p-3 text-sm text-gray-700">$$$</td>
              <td class="p-3 text-sm text-gray-700">$$$</td>
              <td class="p-3 text-sm text-gray-700">$$$</td>
              <td class="p-3 text-sm text-gray-700">$$$</td>
              <td class="p-3 text-sm text-gray-700">$$$</td>
              <td class="p-3 text-sm text-gray-700">$$$</td>
              <td class="p-3 text-sm text-gray-700">$$$</td>
              <td class="p-3 text-sm text-gray-700">$$$</td>
            </tr>
            <tr class="bg-gray-200">
              <td class="p-3 text-sm text-gray-700">
                <a href="#" class="font-bold text-blue-500 hover:underline">User2</a>
              </td>
              <td>
                <span class="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">Member</span>
              </td>
              <td class="p-3 text-sm text-gray-700">$$$</td>
              <td class="p-3 text-sm text-gray-700">$$$</td>
              <td class="p-3 text-sm text-gray-700">$$$</td>
              <td class="p-3 text-sm text-gray-700">$$$</td>
              <td class="p-3 text-sm text-gray-700">$$$</td>
              <td class="p-3 text-sm text-gray-700">$$$</td>
              <td class="p-3 text-sm text-gray-700">$$$</td>
              <td class="p-3 text-sm text-gray-700">$$$</td>
            </tr>
            <tr class="bg-[#c8b7e9]">
              <td class="p-3 text-sm text-gray-700">
                <a href="#" class="font-bold text-blue-500 hover:underline">User3</a>
              </td>
              <td>
                <span class="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">Member</span>
              </td>
              <td class="p-3 text-sm text-gray-700">$$$</td>
              <td class="p-3 text-sm text-gray-700">$$$</td>
              <td class="p-3 text-sm text-gray-700">$$$</td>
              <td class="p-3 text-sm text-gray-700">$$$</td>
              <td class="p-3 text-sm text-gray-700">$$$</td>
              <td class="p-3 text-sm text-gray-700">$$$</td>
              <td class="p-3 text-sm text-gray-700">$$$</td>
              <td class="p-3 text-sm text-gray-700">$$$</td>
            </tr>
            <tr class="bg-gray-200">
              <td class="p-3 text-sm text-gray-700">
                <a href="#" class="font-bold text-blue-500 hover:underline">User4</a>
              </td>
              <td>
                <span class="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">Member</span>
              </td>
              <td class="p-3 text-sm text-gray-700">$$$</td>
              <td class="p-3 text-sm text-gray-700">$$$</td>
              <td class="p-3 text-sm text-gray-700">$$$</td>
              <td class="p-3 text-sm text-gray-700">$$$</td>
              <td class="p-3 text-sm text-gray-700">$$$</td>
              <td class="p-3 text-sm text-gray-700">$$$</td>
              <td class="p-3 text-sm text-gray-700">$$$</td>
              <td class="p-3 text-sm text-gray-700">$$$</td>
            </tr>
            <tr class="bg-[#c8b7e9]">
              <td class="p-3 text-sm text-gray-700">
                <a href="#" class="font-bold text-blue-500 hover:underline">User5</a>
              </td>
              <td>
                <span class="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">Member</span>
              </td>
              <td class="p-3 text-sm text-gray-700">$$$</td>
              <td class="p-3 text-sm text-gray-700">$$$</td>
              <td class="p-3 text-sm text-gray-700">$$$</td>
              <td class="p-3 text-sm text-gray-700">$$$</td>
              <td class="p-3 text-sm text-gray-700">$$$</td>
              <td class="p-3 text-sm text-gray-700">$$$</td>
              <td class="p-3 text-sm text-gray-700">$$$</td>
              <td class="p-3 text-sm text-gray-700">$$$</td>
            </tr>
            <tr class="bg-gray-200">
              <td class="p-3 text-sm text-gray-700">
                <a href="#" class="font-bold text-blue-500 hover:underline">User6</a>
              </td>
              <td>
                <span class="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">Member</span>
              </td>
              <td class="p-3 text-sm text-gray-700">$$$</td>
              <td class="p-3 text-sm text-gray-700">$$$</td>
              <td class="p-3 text-sm text-gray-700">$$$</td>
              <td class="p-3 text-sm text-gray-700">$$$</td>
              <td class="p-3 text-sm text-gray-700">$$$</td>
              <td class="p-3 text-sm text-gray-700">$$$</td>
              <td class="p-3 text-sm text-gray-700">$$$</td>
              <td class="p-3 text-sm text-gray-700">$$$</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
