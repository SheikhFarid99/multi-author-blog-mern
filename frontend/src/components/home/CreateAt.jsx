import React from 'react';
import { Link } from "react-router-dom";
const CreateAt = () => {
    return <div id='copy-right'>
        <div className="copy-right">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className="left-side">
                            <ul className="link-list">
                                <li><span>Created by</span></li>
                                <li><Link to='/'>Sheikh Farid</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="right-side">
                            <ul className="link-list">
                                <li><Link>Home</Link></li>
                                <li><Link>About</Link></li>
                                <li><Link>Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>;
};

export default CreateAt;
