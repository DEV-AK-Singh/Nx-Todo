"use client";

import { fetchAllData } from "@/lib/controllers/taskController";
import Link from "next/link";
import React, { useEffect } from "react";

const TableRow = ({ task, index, deleteTask, tKey }) => {
  return (
    <>
      <tr key={tKey}>
        <th className="text-center">
          <label className="flex items-center">
            <button
              className="btn btn-ghost"
              onClick={(e) => {
                deleteTask(task._id);
              }}
            >
              {/* <Image src="/delete.svg" height={24} width={24} alt="delete button"/> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 shrink-0 stroke-current"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
          </label>
        </th>
        <td>
          <div className="flex items-center justify-center gap-3">
            <div>
              <div className="font-bold text-center">{index + 1}</div>
            </div>
          </div>
        </td>
        <td>
          {task.task}
          <br />
          <small>
            {task.date} | {task.time}
          </small>
        </td>
        <td>{task.priority}</td>
        <th>
          <Link
            className="btn btn-outline btn-xs rounded-none"
            href={`/update/${task._id}`}
          >
            Edit Task
          </Link>
        </th>
      </tr>
    </>
  );
};

const TableData = ({ tasks, setTasks, deleteTask }) => {
  useEffect(() => {
    fetchAllData().then((data) => {
      setTasks(data.data);
    });
  }, []);

  return (
    <>
      {tasks.length != 0 ? (
        tasks.map((task, index) => {
          return (
            <TableRow
              task={task}
              index={index}
              key={"table-row" + task._id}
              deleteTask={deleteTask}
              tKey={"table-row" + task._id}
            />
          );
        })
      ) : (
        <tr>
          <td>No Tasks Available</td>
        </tr>
      )}
    </>
  );
};

export default TableData;
