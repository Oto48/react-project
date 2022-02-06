import React from "react";
import "../App.css";
import {SidebarData, AdministrationData} from "./SidebarData";
import { Button } from '@fluentui/react-northstar'

function Sidebar(){
    return(
        <div className="sidebar">
            <h2>Settings</h2>
            <ul className="sidebar-ul">
                <div className="list-title"><Button circular content="1" primary /><p>Settings</p></div>
                <ul>
                {SidebarData.map((val, key)=>{
                    return(
                        <li
                        key={key}
                        onClick={()=>{
                            window.location.pathname = val.link;
                        }}
                        >
                            <div className="side-list">
                                <div>{val.icon}</div>
                                <div>{val.title}</div>
                            </div>
                        </li>
                    )
                })}
                </ul>
                <div className="list-title"><Button circular content="2" primary /><p>Administration</p></div>
                <ul>
                {AdministrationData.map((val, key)=>{
                    return(
                        <li
                        key={key}
                        onClick={()=>{
                            window.location.pathname = val.link;
                        }}
                        >
                            <div className="side-list">
                                <div>{val.icon}</div>
                                <div>{val.title}</div>
                            </div>
                        </li>
                    )
                })}
                </ul>
            </ul>
        </div>
    )
}

export default Sidebar