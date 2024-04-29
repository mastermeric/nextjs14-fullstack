// https://jsonplaceholder.typicode.com/todos
//https://jsonplaceholder.typicode.com/posts

import Link from "next/link";

const delay = ms =>  new Promise(resolve => setTimeout(resolve,ms) );


async function getArticles() {   

    await delay(5000);    
    
    const res = await fetch("https://jsonplaceholder.typicode.com/posts" , {
        next: {
            revalidate: 0  // 0: cache yok.  5 dk lik cache icin 5*60=300 verilebilir..
        }
    });
    return res.json();

}


export default async function ArticleList() {

    

    const articles = await getArticles();

    return(
        <>
        {
            articles.map( (item) =>  (
                
                <div key={item.id} className="card my-5"> 
                    <Link href={"/articles/"+item.id} style={{ color:"#000" , textDecoration:"none"}}>
                        <h3>{item.title}</h3>
                        <div className="pill low">
                            <p>{ item.body.slice(0,200) }...</p>
                        </div>
                    </Link>
                </div>            
            ))
        }

        {
            articles.length ===0 && (<p className="text-center"> No Articles Get ..</p>)
        }
        </>
    )
}