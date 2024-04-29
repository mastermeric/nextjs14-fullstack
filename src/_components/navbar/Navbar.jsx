import Link from "next/link";
import "./navbar.css"


const NavBar = () => {
    return (
        <>
        <div className="nav">
            <input type="checkbox" id="nav-check" />
            <div className="nav-header">
                <div className="nav-title">JoGeek</div>
            </div>
            <div className="nav-btn">
                <label htmlFor="nav-check">
                <span />
                <span />
                <span />
                </label>
            </div>
            <div className="nav-links">
                <Link href="/movingdot"> movingdot</Link>
                <Link href="/scrapper"> scrapper</Link>
                <Link href="/speed"> speed</Link>
            </div>
            </div>

        </>
    );
};

export default NavBar;