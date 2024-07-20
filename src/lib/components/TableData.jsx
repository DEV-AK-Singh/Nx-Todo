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
              <i className="bi bi-trash" style={{fontSize:"16px"}}></i>
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
            className="btn btn-ghost btn-outline btn-sm rounded-none"
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
