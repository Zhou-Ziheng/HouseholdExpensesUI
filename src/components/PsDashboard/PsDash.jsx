import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import getMemberData from "../../APIs/getMemberData";
import Modal from "react-bootstrap/Modal";
import { FaEdit, FaIcons } from "react-icons/fa";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import { makeItem } from "../../APIs/makeItem";
import { addOneToCategory } from "../../APIs/addOneToCategory";
import { addNewToCategory } from "../../APIs/addNewCategory";
import { changeMemberAllowance } from "../../APIs/changeMemberAllowance";

const headers = [
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

  const [show, setShow] = useState(false);

  const [allowance, setAllowance] = useState(0);
  const [allowanceModal, setAllowanceModal] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState(0);

  const map = useRef();
  const [history, setHistory] = useState([]);
  const [head, setHead] = useState("");

  const [utilitiesShow, setUtilitiesShow] = useState(false);
  const handleUtilitiesClose = () => setUtilitiesShow(false);
  const handleUtilitiesShow = (header) => {
    setHistory(map.current.get(header.toUpperCase()));
    setHead(header);
    setUtilitiesShow(true);
  };

  useEffect(() => {
    const fetch = async () => {
      const user = await getMemberData(id);
      const data = await user.json();
      setPerData(data);
      const dict = new Map();
      headers.forEach((header) => dict.set(header.toUpperCase(), []));
      data.categories.forEach((category) =>
        dict.set(category.category.toUpperCase(), category.items)
      );

      map.current = dict;
    };
    if (loggedin) {
      setTimeout(() => fetch(), 500);
    } else {
      navigate("../signin", { replace: true });
    }
  }, [id, loggedin, navigate, show]);

  useEffect(() => {
    const fetch = async () => {
      const user = await getMemberData(id);
      const data = await user.json();
      setPerData(data);
      const dict = new Map();
      headers.forEach((header) => dict.set(header.toUpperCase(), []));
      data.categories.forEach((category) =>
        dict.set(category.category.toUpperCase(), category.items)
      );
      map.current = dict;
    };
    if (loggedin) {
      fetch();
    } else {
      navigate("../signin", { replace: true });
    }
  }, [id, loggedin, navigate, show, allowanceModal]);

  const getCategoryRow = () => {
    const render = [];
    headers.forEach((header) => {
      const entry = perData.categories.find(({ category }) => {
        return category.toUpperCase() === header.toUpperCase();
      });
      const categoryUsed = entry?.totalAmount ?? 0;
      render.push(
        <tr class="bg-gray-800 border-gray-700">
          <th
            scope="row"
            class="py-4 px-6 font-medium whitespace-nowrap text-white"
          >
            <a
              onClick={() => handleUtilitiesShow(header)}
              className="font-bold text-white"
            >
              {header}
            </a>
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
      <Modal show={show} onHide={handleClose} className="w-screen h-screen">
        <Modal.Header closeButton>
          <Modal.Title>Add Expenses</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="" controlId="ControlInput2">
              <Form.Label>Title</Form.Label>
            </Form.Group>
            <Form.Control
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              placeholder="Insert Title"
              autoFocus
            />

            <Form.Group className="mt-3" controlId="ControlInput3">
              <Form.Label>Description</Form.Label>
            </Form.Group>
            <Form.Control
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              as="textarea"
              rows={5}
            />

            <Form.Group className="mt-3" controlId="ControlInput1">
              <Form.Label>Amount</Form.Label>
            </Form.Group>
            <Form.Control
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              type="number"
              placeholder="Insert Amount"
              autoFocus
            />

            <Form.Group className="mt-3" controlId="ControlInput4">
              <Form.Label>Category</Form.Label>
              <Form.Select
                aria-label="Select"
                placeholder="Select A Category"
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="" disabled selected>
                  Select A Category
                </option>
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
          <button
            className="bg-[#8b74bd] px-3 py-3 rounded text-white"
            variant="secondary"
            onClick={handleClose}
          >
            Close
          </button>
          <button
            className="bg-[#8b74bd] px-3 py-3 rounded text-white"
            variant="primary"
            onClick={async () => {
              handleClose();
              const item = await makeItem(title, desc, amount, Date.now());
              const response = await item.json();
              const itemId = response._id;

              const cat = perData.categories.find(
                (ca) => ca.category.toUpperCase() === category.toUpperCase()
              );

              if (cat !== undefined) {
                await addOneToCategory(itemId, cat._id);
              } else {
                console.log(category, itemId, id);
                await addNewToCategory(category, itemId, id);
              }
            }}
          >
            Add Expenses
          </button>
        </Modal.Footer>
      </Modal>
      <Modal show={utilitiesShow} onHide={handleUtilitiesClose}>
        <Modal.Header closeButton>
          <Modal.Title>{head} Expenses</Modal.Title>
        </Modal.Header>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Title</th>
              <th scope="col">Cost</th>
              <th scope="col">Date</th>
            </tr>
          </thead>
          <tbody>
            {history.map((item, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{item.title}</td>
                <td>${item.cost}</td>
                <td>{item.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
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
            <button className="px-5 transition hover:scale-110 ease-in-out duration-100">
              <FaEdit size={25} onClick={() => setAllowanceModal(true)} />
              <Modal
                show={allowanceModal}
                onHide={() => setAllowanceModal(false)}
              >
                <Modal.Header closeButton>
                  <Modal.Title>Change Allowances</Modal.Title>
                </Modal.Header>

                <Form>
                  <Form.Group className="mt-3" controlId="ControlInput1">
                    <Form.Label>Allowance</Form.Label>
                  </Form.Group>
                  <Form.Control
                    value={allowance}
                    onChange={(e) => setAllowance(e.target.value)}
                    type="number"
                    placeholder="Insert Amount"
                    autoFocus
                  />
                </Form>
                <Modal.Footer>
                  <button
                    className="bg-[#8b74bd] px-3 py-3 rounded text-white"
                    variant="secondary"
                    onClick={() => setAllowanceModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-[#8b74bd] px-3 py-3 rounded text-white"
                    variant="primary"
                    onClick={async () => {
                      await changeMemberAllowance(id, allowance);
                      setAllowanceModal(false);
                    }}
                  >
                    Set
                  </button>
                </Modal.Footer>
              </Modal>
            </button>
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
