import React, { useContext } from 'react'
import './Main.css'
import { FaRegUserCircle } from "react-icons/fa";
import { FaRegCompass } from "react-icons/fa";
import { GrGallery } from "react-icons/gr";
import { FaRegLightbulb } from "react-icons/fa";
import { CiChat1 } from "react-icons/ci";
import { FaCode } from "react-icons/fa";
import { CiMicrophoneOn } from "react-icons/ci";
import { LuSendHorizonal } from "react-icons/lu";
import { Context } from '../../context/Context';


function Main() {

    const {onSent, recentPrompt, showResult, loading, resultData, setInput, input} = useContext(Context)

  return (
    <div className="main flex-1 min-h-[100vh] relative max-sm:w-[100%]   max-sm:h-[100vh]">
        <div className="nav flex items-center justify-between text-lg p-5 text-zinc-500 ">
            <p>Gemini</p>
            <FaRegUserCircle className='w-[40px] text-3xl ' />
        </div>

        <div className="main-container max-w-[900px] m-auto ">

            {!showResult 
            ?<>
                <div className="greet my-12 text-[56px] text-slate-600 p-[20px] text font-semibold max-sm:text-[26px] max-sm:my-2 ">
                <p><span>Hello, Samarth.</span></p>
                <p>How can I help you today?</p>
            </div>
            <div className="cards  ">
                <div className="card">
                    <p className='text-zinc-600 text-lg' >Suggest beautiful places to see on an upcoming trip</p>
                    <FaRegCompass className='text-4xl p-[5px] absolute rounded-[20px] right-3 bottom-3 ' />
                </div>
                <div className="card">
                    <p className='text-zinc-600 text-lg'>Briefly summerise this concept: urban planning</p>
                    <FaRegLightbulb className='text-4xl p-[5px] absolute rounded-[20px] right-3 bottom-3 ' />
                </div>
                <div className="card">
                    <p className='text-zinc-600 text-lg'>Brainstrom team bonding activities for our work retreat</p>
                    <CiChat1 className='text-4xl p-[5px] absolute rounded-[20px] right-3 bottom-3 ' />
                </div>
                <div className="card">
                    <p className='text-zinc-600 text-lg'>Improve the readibility of the following code</p>
                    <FaCode className='text-4xl p-[5px] absolute rounded-[20px] right-3 bottom-3 ' />
                </div>
            </div>
            </>
            : <div className='result'>
                <div className="result-title my-[40px] flex items-center gap-[20px] ">
                    <FaRegUserCircle className='w-[40px] text-3xl ' />
                    <p>{recentPrompt}</p>
                </div>
                <div className="result-data flex items-start gap-[20px] ">
                    <img src="" alt="" />
                    {loading ? <div className='loader'>
                        <hr />
                        <hr />
                        <hr />
                    </div> 
                    : <p dangerouslySetInnerHTML={{__html: resultData}} ></p> }
                    
                </div>
            </div>
            }

            

        </div>

        <div className="main-bottom  p-[10px] ">
            <div className="search-box flex items-center justify-between gap-[10px] p-[10px] rounded-lg ">
                <input
                onChange={(e) => setInput(e.target.value)}
                value={input}
                className='flex-1 bg-transparent border-none outline-none p-[8px] text-[18px] max-w-[300px] w-full '
                type="text" 
                placeholder='Enter your prompt'
                 />
                <div className='flex items-center gap-[15px]' >
                    <GrGallery className='text-xl' />
                    <CiMicrophoneOn className='text-2xl' />
                    <LuSendHorizonal className='text-xl' onClick={() => onSent()} />
                </div>
            </div>
            <p className='text-[13px] my-[15px] mx-auto text-center font-light ' >
                Gemini may display inaccurate info, including about people, so double check its response. Your privacy and Gemini Apps
            </p>
        </div>

    </div>
  )
}

export default Main