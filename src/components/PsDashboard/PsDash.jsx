import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import getMemberData from "../../APIs/getMemberData";

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

export default function PsDash({ loggedin, id }) {
  const [perData, setPerData] = useState();

  const navigate = useNavigate();
  useEffect(() => {
    const fetch = async () => {
      const user = await getMemberData(id);
      setPerData(await user.json());
    };
    if (loggedin) {
      fetch();
    } else {
      navigate("../signin", { replace: true });
    }
  });

  return (
    <>
      <h2 className="text-3xl mx-[200px] my-[40px]  font-bold  text-[#7953a9] ">
        Personal Account Information Of
      </h2>
      <h1 className="mx-[200px] my-[-35px] text-5xl font-bold">
        {perData?.name}
      </h1>
      <h3 className="text-2xl font-light mx-[200px] my-[45px]">
        ${perData?.used} used out of ${perData?.allowance}
      </h3>
      <div class="my-[-25px] mx-[-175px] rounded relative sm:rounded-lg">
        <table class="w-4/6 text-sm mx-auto text-left rounded text-gray-400">
          <caption class="p-5 text-lg font-semibold rounded text-left text-white bg-[#8b74bd]">
            Expenses
            <p class="mt-1 text-sm font-normal text-gray-200">
              Table of MemberFirst's expenses sorted through categories
              (Utilities, School, Groceries, Rent, Clothes, Subscriptions,
              Entertainment, Miscellaneous) and amount of each category.
            </p>
          </caption>
          <thead class="rounded text-xs uppercase bg-gray-700 text-gray-400">
            <tr>
              <th scope="col" class="py-3 px-6">
                Category
              </th>
              <th scope="col" class="py-3 px-6">
                Used
              </th>
              <th scope="col" class="py-3 px-6">
                Allocated
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-gray-800 border-gray-700">
              <th
                scope="row"
                class="py-4 px-6 font-medium whitespace-nowrap text-white"
              >
                Utilities
              </th>
              <td class="py-4 px-6">$2999</td>
              <td class="py-4 px-6 text-right">
                <a href="#" class="font-medium text-blue-500 hover:underline">
                  Edit
                </a>
              </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                School
              </th>
              <td class="py-4 px-6">$1999</td>
              <td class="py-4 px-6 text-right">
                <a
                  href="#"
                  class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </a>
              </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Groceries
              </th>
              <td class="py-4 px-6">$1999</td>
              <td class="py-4 px-6 text-right">
                <a
                  href="#"
                  class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </a>
              </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Rent
              </th>
              <td class="py-4 px-6">$1999</td>
              <td class="py-4 px-6 text-right">
                <a
                  href="#"
                  class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </a>
              </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Clothes
              </th>
              <td class="py-4 px-6">$1999</td>
              <td class="py-4 px-6 text-right">
                <a
                  href="#"
                  class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </a>
              </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Subscriptions
              </th>
              <td class="py-4 px-6">$1999</td>
              <td class="py-4 px-6 text-right">
                <a
                  href="#"
                  class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </a>
              </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Entertainment
              </th>
              <td class="py-4 px-6">$1999</td>
              <td class="py-4 px-6 text-right">
                <a
                  href="#"
                  class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </a>
              </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Miscellaneous
              </th>
              <td class="py-4 px-6">$1999</td>
              <td class="py-4 px-6 text-right">
                <a
                  href="#"
                  class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </a>
              </td>
            </tr>
            <tr class="bg-white dark:bg-gray-800">
              <th
                scope="row"
                class="py-4 px-6 font-bold text-xl text-gray-900 whitespace-nowrap dark:text-white "
              >
                TOTAL
              </th>
              <td class="py-4 px-6 font-bold text-xl">$XXXX</td>
              <td class="py-4 px-6 text-right">
                <a></a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* <h3 className="text-3xl text-center my-20  font-bold  text-[#4151c7] ">HouseHold Informations</h3>
            <div class="overflow-x-auto rounded relative sm:rounded-lg">
                <table class="w-4/6 text-sm mx-auto text-left text-gray-500 rounded dark:text-gray-400">
                    <caption class="p-5 text-lg font-semibold rounded text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
                        Household Last Expenses
                        <p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
                            Table of each members of the family by name and amount spent.</p>
                    </caption>
                    <thead class="rounded text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="py-3 px-6">
                                Familly members
                            </th>
                            <th scope="col" class="py-3 px-6">
                                Amount
                            </th>
                            <th scope="col" class="py-3 px-6">
                                Last update
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                name1
                            </th>
                            <td class="py-4 px-6">
                                $2999
                            </td>
                            <td class="py-4 px-6 text-right">
                                <div class="font-medium text-blue-600 dark:text-blue-500">date</div>
                            </td>
                        </tr>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                name2
                            </th>
                            <td class="py-4 px-6">
                                $1999
                            </td>
                            <td class="py-4 px-6 text-right">
                                <div class="font-medium text-blue-600 dark:text-blue-500">date</div>
                            </td>
                        </tr>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                name3
                            </th>
                            <td class="py-4 px-6">
                                $1999
                            </td>
                            <td class="py-4 px-6 text-right">
                                <div class="font-medium text-blue-600 dark:text-blue-500 ">date</div>
                            </td>
                        </tr>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                name4
                            </th>
                            <td class="py-4 px-6">
                                $1999
                            </td>
                            <td class="py-4 px-6 text-right">
                                <div class="font-medium text-blue-600 dark:text-blue-500">date</div>
                            </td>
                        </tr>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                name5
                            </th>
                            <td class="py-4 px-6">
                                $1999
                            </td>
                            <td class="py-4 px-6 text-right">
                                <div class="font-medium text-blue-600 dark:text-blue-500 ">date</div>
                            </td>
                        </tr>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                name5
                            </th>
                            <td class="py-4 px-6">
                                $1999
                            </td>
                            <td class="py-4 px-6 text-right">
                                <div class="font-medium text-blue-600 dark:text-blue-500 ">date</div>
                            </td>
                        </tr>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                name6
                            </th>
                            <td class="py-4 px-6">
                                $1999
                            </td>
                            <td class="py-4 px-6 text-right">
                                <div class="font-medium text-blue-600 dark:text-blue-500">date</div>
                            </td>
                        </tr>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                name7
                            </th>
                            <td class="py-4 px-6">
                                $1999
                            </td>
                            <td class="py-4 px-6 text-right">
                                <div class="font-medium text-blue-600 dark:text-blue-500 ">date</div>
                            </td>
                        </tr>
                        <tr class="bg-white dark:bg-gray-800">
                            <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Total Household
                            </th>
                            <td class="py-4 px-6">
                                $XXXX
                            </td>
                            <td class="py-4 px-6 text-right">
                                <div class="font-medium text-blue-600 dark:text-blue-500">date</div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div> */}
    </>
  );
}
