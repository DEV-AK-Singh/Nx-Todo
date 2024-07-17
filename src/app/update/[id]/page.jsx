'use client'

import moment from "moment";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Header from "@/lib/components/Header";
import { fetchDataByID, updateData } from "@/lib/controllers/taskController";

const KeyBoardButton = ({handleClick}) => {
  return (
    <div className="absolute top-1/2 right-[8px] transform -translate-y-1/2">
      <kbd className="kbd text-sm rounded-md cursor-pointer" onClick={handleClick}>Enter</kbd>
    </div>
  );
}

export default function Update({params}) {

  const router = useRouter();

  const [myTask,setMyTask] = useState("");
  const [myDate,setMyDate] = useState(moment().format('L'));
  const [myTime,setMyTime] = useState(moment().format('LTS'));
  const priorities = ["Low","Medium","High"];
  const [priority,setPriority] = useState(priorities.length-1);

  setInterval(() => {
    setMyTime(moment().format('LTS'));
  }, 1000);

  setInterval(()=>{
    setMyDate(moment().format('L'));
  },60000)

  const changePriority = () => {
    if(priority<priorities.length-1){
      setPriority(priority+1);
    }else{
      setPriority(0);
    }
  }

  const handleClick = () => {
    const taskData = {
      id:params.id,
      task: myTask,
      date: myDate,
      time: myTime,
      priority: priorities[priority]
    }
    updateData(taskData)
    .then((res)=>{
      router.push("/");
      console.log(res);
    });
  }

  const handleSubmit = (e) => {
    if(e.key=="Enter"){
      handleClick();
    }
  }

  useEffect(()=>{
    fetchDataByID(params.id)
    .then((data)=>{
      setMyTask(data.data.task);
      setPriority(priorities.indexOf(data.data.priority));
    });
  },[])

  return (
    <div className={`h-screen w-screen flex justify-center items-center`}>
      <Header/>
      <label className="form-control w-full max-w-sm">
        <div className="label">
          <span className="label-text">Edit your task details.</span>
          <span className="label-text-alt cursor-pointer" onClick={changePriority}>{priorities[priority]} : Priority</span>
        </div>
        <div className="relative">
          <KeyBoardButton handleClick={handleClick}/>
          <input type="text" placeholder="Type here.." className={`input input-bordered w-full max-w-sm`} value={myTask} onKeyDown={handleSubmit} onChange={(e)=>{setMyTask(e.target.value)}}/>
        </div>
        <div className="label">
          <span className="label-text-alt">{myDate}</span>
          <span className="label-text-alt">{myTime}</span>
        </div>
      </label>
    </div>
  );
}

