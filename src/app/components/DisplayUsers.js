"use client"
import { useSelector } from "react-redux"

export default function DisplayUsers(){
    const userData = useSelector((data) => data.users);
    console.log(userData);
    return (
        <div className="display-user">
            <h3>User List</h3>
            <ul>
            {
                
                userData.map((item, id) =>
                     (
                        <li className="user-item" key={id}>{item.name}</li>
                    )
                )
                
            }
            </ul>
        </div>
    )
}