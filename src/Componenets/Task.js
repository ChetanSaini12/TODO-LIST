import React from "react";
import './task.css'

let txt = "Done";

let grn 

function Task(props) {
  const [isDone, setisDone] = React.useState(false); 
  
  // let chngDone = (event) => {
    //   txt = "Not Done";
    //   alert("Huva");
    // }
    function chngDone(){
      // document.getElementById("dn").innerHTML = "Not Done";
      txt = "Not Done";
    }
    return (
      <div className="overflow-scroll overflow-x-auto hideScrollbar">
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
            // setisDone(false)
            if(tsk.complete)
            return (
              <tr key={tsk.id}  bgcolor="green" style={{backgroundColor:"green"}}>
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
                    <button id="dn" className="btn btn-xs btn-outline btn-success" onClick={() =>{
                        tsk.complete=!tsk.complete;
                        setisDone(!isDone);

                    } } >{tsk.complete ? "!Done" : "Done" }</button>
                    </td>
                    <td>
                    <button className="btn btn-xs btn-outline btn-warning">Urgent</button>
                    </td>
                    <td>
                    <button className="btn btn-xs btn-outline btn-error">Delete</button>
                    </td>
                </tr>
            );
            else
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
                    <button id="dn" className="btn btn-xs btn-outline btn-success" onClick={() =>{
                        tsk.complete=!tsk.complete;
                        setisDone(!isDone);

                    } } >{tsk.complete ? "!Done" : "Done" }</button>
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