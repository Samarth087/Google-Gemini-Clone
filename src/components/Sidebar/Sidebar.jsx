import React, { useContext, useState } from 'react'
import './Sidebar.css'
import { IoMenu } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";
import { MdOutlineMessage } from "react-icons/md";
import { MdOutlineQuestionMark } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { Context } from '../../context/Context';

function Sidebar () {

  const [extended, setExtended ] = useState(false)
  const {onSent, prevPrompt, setRecentPrompt, newChat} = useContext(Context)

  const loadPrompt = async (prompt)=>{
    setRecentPrompt(prompt)
    await onSent(prompt)
  }

  return (
    <>
        <div className="sidebar min-h-screen inline-flex flex-col justify-between bg-slate-100 py-7 px-3 max-sm:hidden  ">
            <div className="top">
              <IoMenu onClick={()=>setExtended(prev => !prev)} className="menu icon block ml-2.5 cursor-pointer text-4xl" />     
              <div onClick={()=> newChat()} className="newChat mt-[50px] inline-flex items-center gap-2.5 px-3.5 py-2.5 bg-slate-200 rounded-full text-lg text-gray-400 cursor-pointer">
               <FaPlus className='icon' />
               {extended ? <p>New Chat</p> : null}
              </div>

              {extended ? <div className="recent flex flex-col">
                          <p className="recent-title mt-[30px] mb-[20px] ">Recent</p>
                          {prevPrompt.map((item, index)=>{
                            return(
                                    <div onClick={() => loadPrompt(item)} className="recent-entry flex items-center gap-[10px] p-[10px] pr-[40px] rounded-full cursor-pointer text-slate-500 hover:bg-slate-200 ">
                                    <MdOutlineMessage className='icon' />
                                    <p>{item.slice(0, 18)}...</p>
                                    </div>
                                  )
                          })}
              </div> : null }
            </div>

            <div className="bottom flex flex-col">
              <div className="bottom-item recent-entry flex items-center gap-[10px] p-[10px] pr-[40px] rounded-full cursor-pointer text-slate-500 hover:bg-slate-200">
                <MdOutlineQuestionMark className='icon' />
                {extended ? <p>Help</p> : null} 
              </div>
              <div className="bottom-item recent-entry flex items-center gap-[10px] p-[10px] pr-[40px] rounded-full cursor-pointer text-slate-500 hover:bg-slate-200">
                <FaHistory className='icon' />
                {extended ? <p>History</p> : null}
              </div>
              <div className="bottom-item recent-entry flex items-center gap-[10px] p-[10px] pr-[40px] rounded-full cursor-pointer text-slate-500 hover:bg-slate-200">
                <IoSettings className='icon' />
                {extended ? <p>Setting</p> : null}
              </div>
            </div>
        </div>
    </>
  )
}

export default Sidebar