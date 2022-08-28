import clsx from "clsx";
import styles from "./Header.module.scss";

import { logo } from "../../assets/images";

function Header() {
    return (
        <div className={clsx(styles.wrapper)}>
            <div className={clsx(styles.logo)}>
                {/* <img src={logo} alt="logo" /> */}
                <h1>
                    &lt;Coding <span>UI</span>&#47;&gt;
                </h1>
            </div>
            <span className={clsx(styles.title)}>Play your own styles !</span>
        </div>
    );
}

export default Header;
