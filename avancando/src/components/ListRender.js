import {useState} from 'react'

const ListRender = () => {
    const [list] = useState(["Vasco", "Gael", "Martim", "Aurora"]);

  return (
    <div>
        <ul>
            {list.map((item) => (
                <li>{item}</li>
            ))}
        </ul>
    </div>
  )
}

export default ListRender