import AboutPage from "@/app/about/page";
import Link from "next/link";
import styles from "./navbar.module.css"

const Navbar = () => {
    return (
        <>
        <div className= {styles.container} >
            <div>LOGO</div>
            <div>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
            </div>
        </div>
       
        </>
    );
};
export default Navbar;