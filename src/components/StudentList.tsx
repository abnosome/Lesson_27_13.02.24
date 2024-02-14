import { Student } from "../type/Student";
import StudentsItem from './StudentsItem';


export default function UsersList() {

    const students:Student[]=[
        
            {name: "Анатолий", surname: "Ушанов", age: 3},
            {name: "Юрий", surname: "Митрофанов", age: 45},
            {name: "Егор", surname: "Богомолов", age: 30},
           { name: "Павел",surname: "Гусев", age: 29}
        
    ]
  return (
    <div>
         {students.map((student)=> <StudentsItem key={student.name}
        {...student}
       />)
  }
    </div>
  )
}