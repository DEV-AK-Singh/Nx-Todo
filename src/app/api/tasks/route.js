import database from "@/lib/database/database";
import taskModel from "@/lib/models/taskModel";
import { NextResponse } from "next/server";

export async function GET(req) {
  database();
  let msg = "get request..";
  let data = await taskModel.find();
  return NextResponse.json({ msg, data });
}

export async function POST(req) {
  database();
  const body = await req.json();
  let msg = "post request..";
  let data = new taskModel({
    task: body.task,
    date: body.date,
    time: body.time,
    priority: body.priority,
  });
  await data.save();
  return NextResponse.json({ msg, data });
}

export async function PUT(req) {
  database();
  const body = await req.json();
  let msg = "put request..";
  let data = null;
  let task = await taskModel.findById(body.id);
  if (task) {
    msg = "task updated";
    task.task = body.task || task.task;
    task.date = body.date || task.date;
    task.time = body.time || task.time;
    task.priority = body.priority || task.priority;
    await task.save();
  } else {
    msg = "task not found";
    data = task;
  }
  return NextResponse.json({ msg, data:task});
}

export async function DELETE(req) {
  database();
  const body = await req.json();
  let msg = "delete request..";
  let data = null;
  let task = await taskModel.findById(body.id);
  if (task) {
    msg = "task deleted";
    await task.deleteOne();
  } else {
    msg = "task not found";
    data = task;
  }
  return NextResponse.json({ msg, data:task});
}
