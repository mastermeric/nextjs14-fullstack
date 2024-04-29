import { Suspense } from "react";
import ArticleList from "./ArticleList";
import Loading from "../../loading";

export default function Tickets() {

    return(
        <>
        <main>
            <h2>Tickets...</h2>
            <p>You Can See all up to date Articles here ...</p>

            <Suspense fallback={<Loading/>} >
                <ArticleList></ArticleList>
            </Suspense>
        </main>
        </>
    )
    
}