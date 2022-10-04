import { useState, useEffect} from 'react';

function useCatdata() {
    const [myList, setMylist] = useState([]);

    useEffect(() => {
        try {
            fetch("https://x8ki-letl-twmt.n7.xano.io/api:HHq4b1yw/categories", { method: "get" })
            .then((response) => response.json())
            .then((data) => {
                let list = []
                for (let i = 0; i < data.length; i++) {
                    var li = [data[i].catname, data[i].caticon.url, i]
                    list.push(li);
                }
                setMylist(list)
            }).catch(console.error)
            
        } catch (error) {
            console.log(error);
            
        }
        
        // console.log("anuj awas");
    },[]);

    return myList;
}

export default useCatdata;
















