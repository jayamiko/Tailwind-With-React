import React, { useState, useEffect } from "react";

import axios from 'axios';


const GetDataAPI = () => {
    const [data, setData] = useState([]);

    const fetchData = async () => {
        const { data } = await axios.get('https://al-quran-8d642.firebaseio.com/data.json?print=pretty');
        setData(data)
    }


    useEffect(() => {
        fetchData()
    }, [])


    console.log(data);

    return (
        <div
            style={{ background: "white", height: '100vh' }}
        >
            {data.map((datas) => {
                return (
                    <>
                        <li>ID : {datas.arti}</li>
                        <li>Name : {datas.asma}</li>
                        <li>Ayat : {datas.ayat}</li>
                    </>
                )
            })}
        </div>
    )
}

export default GetDataAPI;