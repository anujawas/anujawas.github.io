import { useState, useEffect } from 'react';

function useStateData() {
    const [myList, setMylist] = useState([]);


    useEffect(() => {
        try {
            fetch("https://x8ki-letl-twmt.n7.xano.io/api:HHq4b1yw/states", { method: "get" })
                .then((response) => response.json())
                .then((data) => {
                    // console.log(data);
                    let list = []
                    for (let i = 0; i < data.length; i++) {
                        list.push(data[i].state);
                    }
                    list.sort();
                    var li = []
                    for (let i = 0; i < list.length; i++) {
                        li.push({ id: i, state: list[i] })
                    }
                    setMylist(li)
                })

        } catch (error) {
            console.log(error);
        }

    }, []);

    return myList;
}

export default useStateData;
