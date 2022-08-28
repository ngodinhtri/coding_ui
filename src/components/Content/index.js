import clsx from "clsx";
import Card from "../Card";
import styles from "./Content.module.scss";
import { default as demoList } from "../../src";
import Masonry from "react-masonry-css";
import "./Masonry.css";
import { FilterStateContext } from "../FilterState";
import { useContext } from "react";

const breakpointColumnsObj = {
    default: 3,
    992: 2,
    768: 1
};

function Content() {
    const filterStateContext = useContext(FilterStateContext);

    return (
        <div className={clsx(styles.wrapper)}>
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="grid"
                columnClassName="grid_col"
            >
                {/* array of JSX items */}
                {demoList
                    .filter(filterDemo(filterStateContext.filterState))
                    .map((demo, index) => (
                        <Card demo={demo} key={index} />
                    ))}
            </Masonry>
        </div>
    );
}

function filterDemo(type) {
    switch (type) {
        case "all":
            return (item) => true;
        default:
            return (item) => item.type === type;
    }
}

export default Content;
