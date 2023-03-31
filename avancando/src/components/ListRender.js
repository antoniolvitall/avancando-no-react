import {useState} from 'react'

const ListRender = () => {
    const [list] = useState(["Vasco", "Gael", "Martim", "Aurora"]);

    const [users] = useState([
        {id: 1, name: "Vasco", age: 0},
        {id: 2, name: "Gael", age: 1},
        {id: 3, name: "Martim", age: 2},
        {id: 4, name: "Aurora", age: 3},
    ]);

  return (
    <div>
        <ul>
            {list.map((item, i) => (
                <li key={i}>{item}</li>
            ))}
        </ul>
        <ul>
            {users.map((user) => (
                <li key={user.id}>{user.name} - {user.age}</li>
            ))}
        </ul>
    </div>
  )
}

export default ListRender