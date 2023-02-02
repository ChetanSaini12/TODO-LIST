import React from "react";


function Task(props) {
  return (
    <div className="overflow-scroll overflow-x-auto ">
      <table className="table table-zebra rounded-none top-0 px-6 py-4 w-full">
        {/* <thead>
          <tr>
            <th className="sticky top-0 px-6 py-3 text-blue-900 bg-blue-300"></th>
            <th className="sticky top-0 px-6 py-3 text-blue-900 bg-blue-300">Sr. No.</th>
            <th className="sticky top-0 px-6 py-3 text-blue-900 bg-blue-300">Name</th>   
            <th className="sticky top-0 px-6 py-3 text-blue-900 bg-blue-300"></th>   
            <th className="sticky top-0 px-6 py-3 text-blue-900 bg-blue-300"></th>   
            <th className="sticky top-0 px-6 py-3 text-blue-900 bg-blue-300"></th>   
          </tr>
        </thead> */}
        <tbody > 
          {props.ary.map((tsk) => {
            return (
                <tr key={tsk.id} >
                    <td></td>
                    <th>{tsk.id}.</th>
                    <td>{tsk.task}</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                    <button className="btn btn-xs btn-outline btn-success">Done</button>
                    </td>
                    <td>
                    <button className="btn btn-xs btn-outline btn-warning">Urgent</button>
                    </td>
                    <td>
                    <button className="btn btn-xs btn-outline btn-error">Delete</button>
                    </td>
                </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Task;
