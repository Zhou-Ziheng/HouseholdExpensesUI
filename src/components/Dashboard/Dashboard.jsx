import React from "react";
import { BiSearch } from "react-icons/bi";
import { GiCharacter } from "react-icons/gi";
import { BsCurrencyDollar } from "react-icons/bs";
import { AiFillSetting } from "react-icons/ai";
import { makeHousehold } from "../../MockData/MockData";

const Dashboard = () => {
  const data = makeHousehold();
  const { admins } = data;
  const headers = [
    "Users",
    "Status",
    "Utilities",
    "School",
    "Groceries",
    "Rent",
    "Clothes",
    "Subscriptions",
    "Entertainment",
    "Miscellaneous",
  ];

  const getTable = (users) => {
    const data = [];

    for (let i = 0; i < users.length; i++) {
      data.push(getMemberRow(users[i], i));
    }

    return data;
  };

  const getMemberRow = (user, index) => {
    const data = [];
    const id = user.id;
    data.push(
      <td class="p-3 text-sm text-gray-700">
        <a href="#" class="font-bold text-blue-500 hover:underline">
          {user.name}
        </a>
      </td>
    );
    if (admins.find((value) => value.id === id)) {
      data.push(
        <td>
          <span class="p-1.5 text-xs font-medium uppercase tracking-wider text-red-800 bg-red-200 rounded-lg bg-opacity-50">
            Owner
          </span>
        </td>
      );
    } else {
      data.push(
        <td>
          <span class="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">
            Member
          </span>
        </td>
      );
    }

    for (let i = 2; i < headers.length; i++) {
      const amount =
        user.expenses.find(({ category }) => category === headers[i])?.total ??
        0;
      data.push(<td class="p-3 text-sm text-gray-700">{amount.toFixed(2)}</td>);
    }
    return <tr class={index % 2 ? "bg-[#c8b7e9]" : "bg-gray-200"}>{data}</tr>;
  };

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
              {headers.map((header) => (
                <th class="p-3 text-sm font-semibold tracking-wide">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>{getTable(data.members)}</tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
