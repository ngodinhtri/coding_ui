import clsx from "clsx";
import Button from "../Button";
import styles from "./Filter.module.scss";
import demoList from "../../src";
import { useContext } from "react";
import { FilterStateContext } from "../FilterState";

function Filter() {
    const filterStateContext = useContext(FilterStateContext);

    const types = ["all"];

    demoList.forEach((demo) => {
        if (!types.includes(demo.type)) types.push(demo.type);
    });

    return (
        <div className={clsx(styles.wrapper)}>
            {types.map((type, index) => {
                const active = type === filterStateContext.filterState;
                return (
                    <Button
                        key={index}
                        active={active}
                        outline={!active}
                        onClick={() => {
                            filterStateContext.switchFilter(type);
                        }}
                        style={{ textTransform: "capitalize" }}
                    >
                        {type}
                    </Button>
                );
            })}
        </div>
    );
}

export default Filter;
