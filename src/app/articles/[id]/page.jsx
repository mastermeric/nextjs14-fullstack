import { PageNotFoundError } from "next/dist/shared/lib/utils";
import { notFound } from "next/navigation";


//===================  Static Rendering Konusu ============================================
// export const dynamicParams = true;

// export async function generateStaticParams() {

//     const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//     const articles = await res.json();

//     // Tum ID leri JSON object olarak dondur..
//     return articles.map((article) => ({
//         id:article.id  
//     }));    
// }
//==========================================================================================


async function getArticle(id) {

    const res = await fetch("https://jsonplaceholder.typicode.com/posts/" + id , {
        next: {
            revalidate: 0  // 0: cache yok.  5 dk lik cache icin 5*60=300 verilebilir..
        }
    });

    if(!res.ok) {
        return notFound();
    }

    return res.json();
}


export default async function ArticleDetail({params}) {

    const article = await getArticle(params.id);

    return(
    
        <main>
        <h1>{params.id}</h1>
        <div className="card my-5"> 
            <h3>{article.title}</h3>
            <div className="pill low">
                <p>{ article.body.slice(0,200) }...</p>
            </div> 
        </div>
        
        </main>
    );
    
}