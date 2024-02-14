import React from 'react'
import { User } from "../type/User";
import UsersItem from './UsersItem';


export default function UsersList() {

    const users:User[]=[
        
            {name: "Анатолий", surname: "Ушанов", age: 3},
            {name: "Юрий", surname: "Митрофанов", age: 45},
            {name: "Егор", surname: "Богомолов", age: 30},
           { name: "Павел",surname: "Гусев", age: 29}
        
    ]
  return (
    <div>
         {users.map((user)=> <UsersItem key={user.name}
        {...user}
       />)
  }
    </div>
  )
}