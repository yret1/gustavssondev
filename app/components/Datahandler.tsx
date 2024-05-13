'use client'

import { useEffect } from "react"
import { useDispatch } from "react-redux"



const Datahandler = () => {


    const dispatch = useDispatch();


    const handleDataLoad = (data: any) => {
        dispatch({ type: "LOAD_DATA", payload: data })
    }







    useEffect(() => {
        fetch("/api/connectDB", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json())
        .then(data => {
            handleDataLoad(data.data);

        })
        .catch(e => {
            console.log(e);
        })
    }, [])





  return null
}

export default Datahandler