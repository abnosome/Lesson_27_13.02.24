import React from 'react'
import UsersItem from "./UsersItem";
import { User } from "../type/User";

export default function UserItem({name, surname, age}: User) {
    return (
      <div>
          <p>{name}</p>
          <p>{surname}</p>
          <p>{age}</p>
      </div>
    )}