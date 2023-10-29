import { useEffect, useState } from "react";

export default function useGetData(url, defaultValue) {
    const [data, setData] = useState(defaultValue)
    useEffect(() =>{
        fetch(url)
        .then(res => res.json())
        .then(result => setData(result))
    },[])
    return [data, setData]}
