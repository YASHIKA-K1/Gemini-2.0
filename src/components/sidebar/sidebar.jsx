import React, { useState } from 'react'
import './sidebar.css'
import { FaBars, FaPlus, FaComments, FaQuestionCircle, FaHistory, FaCog } from 'react-icons/fa'

export const Sidebar = () => {
    const [extended, setExtended] = useState(false) 

    return (
        <div className="sidebar">
            <div className="top">
                <FaBars onClick={() => setExtended(prev => !prev)} className='menu' />
                <div className="new-chat">
                    <FaPlus />
                    {extended ? <p>New Chat</p> : null}
                </div>
                {extended
                    ? <div className="recent">
                        <p className="recent-title">Recent </p>
                        <div className="recent-entry">
                            <FaComments />
                            <p>What is react...</p>
                        </div>
                    </div>
                    : null
                }
            </div>
            <div className="bottom">
                <div className="bottom-item recent-entry">
                    <FaQuestionCircle />
                    {extended ? <p>Help</p> : null}
                </div>
                <div className="bottom-item recent-entry">
                    <FaHistory />
                    {extended ? <p>Activity</p> : null}
                </div>
                <div className="bottom-item recent-entry">
                    <FaCog />
                    {extended ? <p>Settings</p> : null}
                </div>
            </div>
        </div>
    )
}
