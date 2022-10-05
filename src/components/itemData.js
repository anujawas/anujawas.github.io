import { useState, useEffect } from 'react';
function useItemdata() {

    const [item, setItem] = useState([]);
    useEffect(() => {
        fetch("https://x8ki-letl-twmt.n7.xano.io/api:HHq4b1yw/items", { method: "get" })
            .then((response) => response.json())
            .then((data) => {
                // console.log(data);
                var li = []
                for (let i = 0; i < data.length; i++) {
                    var dateCreated = data[i].created_at
                    dateCreated = new Date(dateCreated);
                    var timeCreate = dateCreated.getHours() + ":" + dateCreated.getMinutes();
                    var day = Math.abs(Date.now() - dateCreated);
                    var dayAgo = Math.floor(day / (1000 * 60 * 60 * 24));
                    if (dayAgo === 0) {
                        dayAgo = "Today"
                    } else if (dayAgo === 1) {
                        dayAgo = "Yesterday"
                    }
                    else {
                        dayAgo += " Days Ago";
                    }
                    var prem;
                    if (data[i].premium === true) {
                        prem = "Top Ads"
                    } else {
                        prem = "Featured Ads"
                    }
                    // console.log(li)
                    li.push({
                        id: data[i].id,
                        timeAgo: dayAgo,
                        time: timeCreate,
                        title: data[i].title,
                        disc: data[i].description,
                        rate: data[i].price,
                        type: data[i].type,
                        prem: prem,
                        location: data[i].Location,
                        img: data[i].image.url,
                        category: data[i]._categories[0].catname,
                    });

                }
                // console.log(li);
                setItem(li);
            });
    },[]);
    return item;
}
export default useItemdata;