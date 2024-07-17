'use client'

import { addData } from "@/lib/controllers/taskController";
import moment from "moment";
import { useState } from "react";
import Header from "../components/Header";
import { useRouter } from 'next/navigation';

const KeyBoardButton = ({handleClick}) => {
  return (
    <div className="absolute top-1/2 right-[8px] transform -translate-y-1/2">
      <kbd className="kbd text-sm rounded-md cursor-pointer" onClick={handleClick}>Enter</kbd>
    </div>
  );
}

export default function Register() {

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

  const handleClick = async () => {
    const taskData = {
      task: myTask,
      date: myDate,
      time: myTime,
      priority: priorities[priority]
    }
    addData(taskData)
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
  
  return (
    <div className={`h-screen w-screen flex justify-center items-center`}>
      <Header/>
      <label className="form-control w-full max-w-sm">
        <div className="label">
          <span className="label-text">What is your new task?</span>
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

