import React from "react";

export default function PsDash() {
    return (
        <>
        <h3 className="text-3xl text-center my-20  font-bold  text-[#4151c7] ">Account Informations</h3>
        <div class="overflow-x-auto rounded relative sm:rounded-lg">
        <table class="w-4/6 text-sm mx-auto text-left text-gray-500 rounded dark:text-gray-400">
            <caption class="p-5 text-lg font-semibold rounded text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
                Last Expenses
                <p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
                    Table of your own expenses by Categories (Utilities, School, Groceries,Rent, Clothes, Subscriptions, Miscellaneous, Entertainment) and amount of each category.</p>
            </caption>
            <thead class="rounded text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" class="py-3 px-6">
                        Category
                    </th>
                    <th scope="col" class="py-3 px-6">
                        Amount
                    </th>
                    <th scope="col" class="py-3 px-6">
                        <span class="sr-only">Edit</span>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Utilities
                    </th>
                    <td class="py-4 px-6">
                        $2999
                    </td>
                    <td class="py-4 px-6 text-right">
                        <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                    </td>
                </tr>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        School
                    </th>
                    <td class="py-4 px-6">
                        $1999
                    </td>
                    <td class="py-4 px-6 text-right">
                        <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                    </td>
                </tr>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Groceries
                    </th>
                    <td class="py-4 px-6">
                        $1999
                    </td>
                    <td class="py-4 px-6 text-right">
                        <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                    </td>
                </tr>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Rent
                    </th>
                    <td class="py-4 px-6">
                        $1999
                    </td>
                    <td class="py-4 px-6 text-right">
                        <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                    </td>
                </tr>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Clothes
                    </th>
                    <td class="py-4 px-6">
                        $1999
                    </td>
                    <td class="py-4 px-6 text-right">
                        <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                    </td>
                </tr>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Subscriptions
                    </th>
                    <td class="py-4 px-6">
                        $1999
                    </td>
                    <td class="py-4 px-6 text-right">
                        <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                    </td>
                </tr>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Miscellaneous
                    </th>
                    <td class="py-4 px-6">
                        $1999
                    </td>
                    <td class="py-4 px-6 text-right">
                        <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                    </td>
                </tr>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Entertainment
                    </th>
                    <td class="py-4 px-6">
                        $1999
                    </td>
                    <td class="py-4 px-6 text-right">
                        <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                    </td>
                </tr>
                <tr class="bg-white dark:bg-gray-800">
                    <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Total
                    </th>
                    <td class="py-4 px-6">
                        $XXXX
                    </td>
                    <td class="py-4 px-6 text-right">
                        <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                    </td>
                </tr>
            </tbody>
        </table>
</div>
        <h3 className="text-3xl text-center my-20  font-bold  text-[#4151c7] ">HouseHold Informations</h3>
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
        </div>
        </>
    )
}