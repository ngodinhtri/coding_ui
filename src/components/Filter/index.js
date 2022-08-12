import clsx from "clsx";
import Button from "../Button";
import styles from "./Filter.module.scss";

function Filter() {
    return (
        <div className={clsx(styles.wrapper)}>
            <Button active>All</Button>
            <Button outline>Button</Button>
            <Button outline>Loading</Button>
            <Button outline>Menu</Button>
        </div>
    );
}

export default Filter;
