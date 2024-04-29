
"use client"

import React, { cache, useState, useEffect } from 'react'


 const Speed = () => {

    const [data1, setData1] = useState("");
    const [data2, setData2] = useState("");
    const [elapsed, setElapsed] = useState(0);
    const [error, setError] = useState("");

    // async function getData() {

    //     // test Data 1 :
    //     var t0 = performance.now();
    //     fetch('https://jsonplaceholder.typicode.com/todos')
    //     .then(response => response.json() )
    //     .then(res =>  setData1(res.length)
    //     );

    //     // test Data 2 :
    //     fetch('https://jsonplaceholder.typicode.com/albums')
    //     .then(response => response.json() )
    //     .then(res => setData2(res.length)
    //     );

    //     // Get elapsed time..
    //     var t1 = performance.now();
    //     var timePassed =  Math.trunc((t1 - t0) * 1000) / 1000; // Remove decimals without rounding
    //     console.log(timePassed);
    //     setElapsed(timePassed);
    // }

    async function getDataSlow() {
        var t0 = performance.now();

        // test Data 1 :
        var res1 = await fetch('https://jsonplaceholder.typicode.com/todos');
        // test Data 2 :
        var res2 = await fetch('https://jsonplaceholder.typicode.com/albums');
        // test Data 3 :
        var res3 = await fetch('https://jsonplaceholder.typicode.com/photos');

        // Get elapsed time..
        var t1 = performance.now();
        var timePassed =  (t1 - t0) ; // Remove decimals without rounding
        console.log(timePassed);
        setElapsed(timePassed);
    }

    async function getDataFast() {

        var t0 = performance.now();

        // test 1 : Concurrent OK.. Fakat ilk metotda error olusursa sadece bunu yakalar..
        // try {
        //     const [res1 , res2 , res3] = await Promise.all([
        //         await fetch('https://jsonplaceholder.typicode.com/todos'),
        //         await fetch('https://jsonplaceholder.typicode.com/albums'),
        //         await fetch('https://jsonplaceholder.typicode.com/photos')
        //     ]);
        // } catch (error) {
        //     setError(error);
        // }

        // bu sayede try-catch e gerek yok ! Zaten Sattled sonuclar gelir :)
        // const [res1 , res2 , res3] = await Promise.allSettled([
        //     fetch('https://jsonplaceholder.typicode.com/todos'),
        //     fetch('https://jsonplaceholder.typicode.com/albums'),
        //     fetch('https://jsonplaceholder.typicode.com/photos')
        // ]);



        const allPromise  = await Promise.all([
            fetch('https://jsonplaceholder.typicode.com/todos'),
            fetch('https://jsonplaceholder.typicode.com/albums'),
            fetch('https://jsonplaceholder.typicode.com/photos')
        ]).then(
            async response =>  Promise.all(response.map(r =>  r.json())
        ).then( values => console.log(values))
        );

        //if(res1 === Promise.FULFILLED)

        // Get elapsed time..
        var t1 = performance.now();
        var timePassed =  (t1 - t0) ; // Remove decimals without rounding
        console.log(timePassed);
        setElapsed(timePassed);
    }

  return (
    <>
    
        <h1>Test :</h1>
        <h3>Below Data sets will be fetched in TEST oepration :</h3>
        <p>https://jsonplaceholder.typicode.com/todos</p>
        <p>https://jsonplaceholder.typicode.com/albums</p>
        {/* <button style={{backgroundColor:"#5edfff", color: "#eeeeee", border: "10px", solid: "#0088cc",  borderRadius:"15px", padding:"10px" ,}} 
        onClick={() => getDataSlow()}
        onMouseEnter={ () => {style={backgroundColor:"blue"}}}        
        >
            TEST SLOW</button> */}
            
        <button onClick={() => getDataSlow()}> TEST SLOW</button>             

        <br></br><br></br>
        <button style={{width:"10em"}} onClick={() => getDataFast()}>TEST FAST</button>
        <p> Dataset-1 size : {data1}</p>
        <p> Dataset-2 size : {data2}</p>
        <p>Time Elapsed :  <span style={{color:'red'}} > {elapsed} </span> mili seconds</p>
        <hr></hr>
        {
            error && <p>ERROR :  <span style={{color:'red'}} > {error} </span></p>
        }
    </>
  )
}

export default Speed;
