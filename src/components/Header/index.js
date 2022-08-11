import clsx from "clsx";
import styles from "./Header.module.scss";

import { logo } from "../../assets/images";

function Header() {
    return (
        <div className={clsx(styles.wrapper)}>
            <div className={clsx(styles.logo)}>
                <img src={logo} alt="logo" />
            </div>
            <span className={clsx(styles.title)}>Play your own styles !</span>
        </div>
    );
}

export default Header;
