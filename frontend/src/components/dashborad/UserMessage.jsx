import React from 'react'
import {BsEnvelope} from "react-icons/bs";
import { FaTrash } from 'react-icons/fa';
const UserMessage = () => {
    return (
        <div className='message'>
            <div>
                <span><BsEnvelope /></span>
                <div className="mCount">5</div>
            </div>
            <div className="messages show">
                <ul>
                    <li>
                        <a href="#" target='_blank'>Farid send a Email</a>
                        <div className="nDelete"><FaTrash/></div>
                    </li>
                    <li>
                        <a href="#" target='_blank'>Farid send a Email</a>
                        <div className="nDelete"><FaTrash/></div>
                    </li>
                    <li>
                        <a href="#" target='_blank'>Farid send a Email</a>
                        <div className="nDelete"><FaTrash/></div>
                    </li>
                    <li>
                        <a href="#" target='_blank'>Farid send a Email</a>
                        <div className="nDelete"><FaTrash/></div>
                    </li>
                    <li>
                        <a href="#" target='_blank'>Farid send a Email</a>
                        <div className="nDelete"><FaTrash/></div>
                    </li>

                </ul>
            </div>
        </div>
    )
}

export default UserMessage