import React from 'react'
import './main.css'
import { assets } from '../../../assets/assets'

export const Main = () => {
  return (
    <div className='main'>
        <div className="nav">
            <p>Gemini</p>
            <img src={assets.user_icon} alt=''/>
        </div>
        <div className="main-conatiner">
            <div className="greet">
                <p><span>Hello, Dev.</span></p>
                <p>How can I help you today?</p>
            </div>
            <div className="cards">
                <div className="card">
                    <p>Suggest beautiful places to see on an upcoming road trip</p>
                    <img src={assets.compass_icon} alt=''/>
                </div>
                <div className="card">
                    <p>Briefly summarize this concept: urban planning</p>
                    <img src={assets.bulb_icon} alt=''/>
                </div>
                <div className="card">
                    <p>Brainstrom team bonding activities for our work retreat</p>
                    <img src={assets.message_icon} alt=''/>
                </div>
                <div className="card">
                    <p> Improve the readability of the following code</p>
                    <img src={assets.code_icon} alt=''/>
                </div>
            </div>

            <div className="main-button">
                <div className="search-box">
                    <input type='text' placeholder='Enter a prompt here'/>
                <div>
                <img className = "image" src={assets.gallery_icon} alt=''/>
                <img className = "mic" src={assets.mic_icon} alt=''/>
                <img className = "send" src={assets.send_icon} alt=''/>
            </div>
            
            </div>    
            <p className="bottom-info">
                Gemini may display inaccurate info, including about people, so double-check it.
            </p>
    </div>
    </div>
    </div>
  )
}
