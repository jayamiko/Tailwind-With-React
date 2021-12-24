import React, { useEffect, useState } from 'react';

import axios from 'axios';

export default function QuranAPI() {

    const [quran, setQuran] = useState([]);

    const getQuran = () => {
        axios.get('https://al-quran-8d642.firebaseio.com/data.json?print=pretty')
            .then((res) => {
                // console.log(res);
                const myQuran = res.data;
                setQuran(myQuran);
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getQuran()
    }, [])

    console.log(quran);

    return (
        <>
            {quran.map((quranData) => (
                <>
                    <div style={{ background: 'white' }}>
                        <h1 style={{
                            color: 'red',
                        }}>{quranData.audio}</h1>
                    </div>
                </>
            ))}
        </>
    )
}