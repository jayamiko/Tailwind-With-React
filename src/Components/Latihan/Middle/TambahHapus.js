import React, { useState } from 'react';

const ListItem = () => {
    const [value, setValue] = useState("");
    const [list, setList] = useState([]);

    const changeHandler = (e) => {
        setValue(e.target.value)
    }

    const handleSubmit = () => {
        setList([...list, value])
        setValue("");
    }

    const deleteHandler = (item) => {
        setList(list.filter((ele) => ele !== item))
    }

    return (
        <div style={{
            background: 'white',
            height: '100vh'
        }}>

            <input typen="text" value={value} onChange={changeHandler} />{""}
            <button onClick={handleSubmit}>Add</button>
            <hr></hr>

            <ul>
                {list.length > 0 &&
                    list.map((item) => {
                        return <li onClick={() => deleteHandler(item)}>{item}</li>
                    })}
            </ul>
        </div>
    )
}

export default ListItem;