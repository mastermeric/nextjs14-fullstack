"use client";

import { useState } from "react";

const Scrapper = () => {

    const [Download, setDownload] = useState("");
    const [InputURL, setInputURL] = useState("");

    async function getDownloads() {
        const res = await fetch("/scrapper/api/", {
            method:"POST",
            body: JSON.stringify(InputURL)
        });

        const data = await res.json();
        console.log(" SONUC ::::  " , data);
        setDownload(data);
    }

    return ( 
    <>
        <h1>Scrapper page here..</h1>

        <button onClick={getDownloads} >GET DATA</button>
        <br></br>
        <input 
            type="text"
            className="rounded-md border-2"
            placeholder="EnterURL here.."
            onChange={(e) => setInputURL(e.target.value) }
        >
        </input>

        <p> Sonuc : {Download}</p>
    </> 
    );
}
 
export default Scrapper;