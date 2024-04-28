import Link from "next/link";
import Home from "./page";

const NotFound = () => {
    return (
        <div>
            <h1>Sorry. Not Found !!!! </h1>
            <br></br>
            <Link href="/"> BACK TO HOME</Link>
        </div>
    );
};

export default NotFound;