import database from "@/lib/database/database";
import taskModel from "@/lib/models/taskModel";
import { NextResponse } from "next/server";

export async function GET(req,context){
    database();
    let msg = "get request..";
    let task = await taskModel.findById(context.params.id);
    if(task){
        msg = "Task found successfully!!";
    }else{
        msg = "Task not found!!";
    }
    return NextResponse.json({msg,data:task});
}