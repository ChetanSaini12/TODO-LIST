import React from "react";
import Task from "./Task";

let allTask = [
  {
    id: 1,
    task: "Give dog a bath",
    complete: true,
  },
  {
    id: 2,
    task: "Do laundry",
    complete: true,
  },
  {
    id: 3,
    task: "Vacuum floor",
    complete: false,
  },
  {
    id: 4,
    task: "Feed cat",
    complete: true,
  },
  {
    id: 5,
    task: "Change light bulbs",
    complete: false,
  },
  {
    id: 6,
    task: "Go to Store",
    complete: true,
  },
  {
    id: 7,
    task: "Fill gas tank",
    complete: true,
  },
  {
    id: 8,
    task: "Change linens",
    complete: false,
  },
  {
    id: 9,
    task: "Rake leaves",
    complete: true,
  },
  {
    id: 10,
    task: "Bake Cookies",
    complete: false,
  },
  {
    id: 11,
    task: "Take nap",
    complete: true,
  },
  {
    id: 12,
    task: "Read book",
    complete: true,
  },
  {
    id: 13,
    task: "Exercise",
    complete: false,
  },
  {
    id: 14,
    task: "Give dog a bath",
    complete: false,
  },
  {
    id: 15,
    task: "Do laundry",
    complete: false,
  },
  {
    id: 16,
    task: "Vacuum floor",
    complete: false,
  },
  {
    id: 17,
    task: "Feed cat",
    complete: true,
  },
  {
    id: 18,
    task: "Change light bulbs",
    complete: false,
  },
  {
    id: 19,
    task: "Go to Store",
    complete: false,
  },
  {
    id: 20,
    task: "Fill gas tank",
    complete: false,
  },
];

function Content() {

  
  let x = 21;
  let handleSubmit = (event) => {
    event.preventDefault();
    setItems([...items, { text: inputValue }]);
    setInputValue("");
    console.log({ inputValue });
    console.log("hello");
    let tmp = {
      id: x,
      task: inputValue,
      complete: true,
      
    };
    x= x+1;
    allTask.push(tmp);
    console.log(JSON.stringify(allTask, null, 4));
  };
  
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const [value, setValue] = React.useState("");
  const [inputValue, setInputValue] = React.useState("");
  const [items, setItems] = React.useState([]);

  return (
    <div className=" bg-inherit fixed w-11/12 h-full my-20 mt-20 grid v-screen place-items-center">
      <div className="w-9/12  rounded-2xl h-screen my-10 flex justify-center   mt-10  bg-gradient-to-br from-[#386D62] via-[#21444F] to-[#08172B] ">
        <div className="form-control w-full scrollbar-hide ">
          <label className="input-group place-content-center mt-5 mb-5 ">
            <input
              type="text"
              placeholder="Write here..."
              className="input w-9/12  input-group-lg input-bordered"
              value={inputValue}
              onChange={handleInputChange}
            />
            <span className="btn" onClick={handleSubmit}>
              Add
            </span>
            <button className="btn ml-2 btn-outline btn-info">Clear All</button>
          </label>
          <Task ary={allTask} />
        </div>
      </div>
    </div>
  );
}

export default Content;
