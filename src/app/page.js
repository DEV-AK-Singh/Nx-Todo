"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/lib/components/Header";
import TableData from "@/lib/components/TableData";
import AlertBox from "@/lib/components/AlertBox";
import { deleteData } from "@/lib/controllers/taskController";

export default function Tasks() {

  const [cancelId, setCancelId] = useState(null);
  const [deleteInit, setDeleteInit] = useState(false);
  const [tasks, setTasks] = useState([]);

  const deleteTask = (id) => {
    setDeleteInit(true);
    let tempCancelId = setTimeout(() => {
      console.log(`Deleted successfully: ${id}`);
      deleteData({ id }).then((data) => {
        console.log(data);
        setDeleteInit(false);
        let remainingTasks = tasks.filter((task)=>task._id!=id);
        setTasks(remainingTasks);
      }); 
    }, 5000);
    setCancelId(tempCancelId);
    console.log(`Deletion initialized.. Id : ${tempCancelId}`);
  };

  const cancelDelete = () => {
    console.log(`Cancel Deletion..${cancelId}`);
    setDeleteInit(false);
    clearTimeout(cancelId);
  };

  return (
    <>
      <Header/>
      <div className="h-screen w-screen flex justify-center items-center">
        <div className="px-4">
          <div className="flex justify-between items-center ">
            <h1 className="text-3xl py-4 font-bold">Todo-App</h1>
            <Link
              className="btn btn-ghost btn-outline btn-sm rounded-none"
              href={"/register"}
            >
              Add Task
            </Link>
          </div>
          <table
            className="table rounded-none h-96 overflow-y-scroll relative "
            style={{ display: "block" }}
          >
            <thead className="sticky top-0 bg-black text-white">
              <tr>
                <th className="text-center">Done</th>
                <th className="text-center">SNO.</th>
                <th>Task</th>
                <th className="text-center">Priority</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              <TableData tasks={tasks} setTasks={setTasks} deleteTask={deleteTask} />
            </tbody>
          </table>
        </div>
        {deleteInit ? <AlertBox cancelDelete={cancelDelete} /> : ""}
      </div>
    </>
  );
}
