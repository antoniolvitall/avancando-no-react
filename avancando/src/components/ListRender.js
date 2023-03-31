import {useState} from 'react'

const ListRender = () => {
    const [list] = useState(["Vasco", "Gael", "Martim",]);

    const [users, setUsers] = useState([
        {id: 1, name: "Vasco", age: 0},
        {id: 2, name: "Gael", age: 1},
        {id: 3, name: "Martim", age: 2},
    ]);

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 4);

        setUsers((prevUsers) => {
            return prevUsers.filter((user) => randomNumber !== user.id);
        });
    };

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
        <button onClick={deleteRandom}> Deletar usuario aleatorio</button>
    </div>
  )
}

export default ListRender