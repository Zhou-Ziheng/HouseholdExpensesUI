import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import getMemberData from "../../APIs/getMemberData";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";

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

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
  }, []);

  console.log(perData);
  const getCategoryRow = () => {
    const render = [];
    headers.forEach((header) => {
      console.log(header);
      const entry = perData.categories.find(({ category }) => {
        console.log(category);
        console.log(category.toUpperCase() === header.toUpperCase());
        return category.toUpperCase() === header.toUpperCase();
      });
      console.log(entry);
      const categoryUsed = entry?.totalAmount ?? 0;
      render.push(
        <tr class="bg-gray-800 border-gray-700">
          <th
            scope="row"
            class="py-4 px-6 font-medium whitespace-nowrap text-white"
          >
            {header}
          </th>
          <td class="py-4 px-6">${categoryUsed}</td>
        </tr>
      );
    });
    return render;
  };

  return (
    <>
      {" "}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Expenses</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="ControlInput1">
              <Form.Label>Amount</Form.Label>
            </Form.Group>
            <Form.Control type="text" placeholder="Insert Amount" autoFocus />
            <Form.Group className="mb-3" controlId="ControlInput2">
              <Form.Label>Category</Form.Label>
              <Form.Select aria-label="Select" placeholder="Select A Category">
                <option value="Utilities">Utilities</option>
                <option value="School">School</option>
                <option value="Groceries">Groceries</option>
                <option value="Rent">Rent</option>
                <option value="Clothes">Clothes</option>
                <option value="Subscriptions">Subscriptions</option>
                <option value="Entertainment">Entertainment</option>
                <option value="Miscellaneous">Miscellaneous</option>
              </Form.Select>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <button variant="secondary" onClick={handleClose}>
            Close
          </button>
          <button variant="primary" onClick={handleClose}>
            Add Expenses
          </button>
        </Modal.Footer>
      </Modal>
      <div className="flex flex-col-2">
        <div>
          <h2 className="text-3xl mx-[200px] my-[40px]  font-bold  text-[#7953a9] ">
            Personal Account Information Of
          </h2>
          <h1 className="mx-[200px] my-[-35px] text-5xl font-bold">
            {perData?.name}
          </h1>
          <h3 className="text-2xl font-light mx-[200px] my-[45px]">
            ${perData?.used} used out of ${perData?.allowance}
          </h3>
        </div>
        <div className="mx-auto my-auto">
          <button
            onClick={handleShow}
            className="w-full py-7 px-7 bg-[#8b74bd] hover:bg-[#7953ab] rounded-md text-white font-semibold text-m whitespace-nowrap transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
          >
            Add Expenses
          </button>
        </div>
      </div>
      <div class="my-[-25px] mx-[-175px] rounded relative sm:rounded-lg">
        <table class="w-4/6 text-sm mx-auto text-left rounded text-gray-400">
          <caption class="p-5 text-lg font-semibold rounded text-left text-white bg-[#8b74bd]">
            Expenses
            <p class="mt-1 text-sm font-normal text-gray-200">
              Table of {perData?.name}'s expenses sorted through categories
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
            </tr>
          </thead>
          <tbody>{perData && getCategoryRow()}</tbody>
        </table>
      </div>
    </>
  );
}
