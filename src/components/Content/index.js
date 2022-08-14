import clsx from "clsx";
import ContentItem from "./components/ContentItem";
import styles from "./Content.module.scss";
import { default as demoList } from "./src";
import Masonry from "react-masonry-css";
import "./Masonry.css";

function Content() {
    return (
        <div className={clsx(styles.wrapper)}>
            <Masonry breakpointCols={3} className="grid" columnClassName="grid_col">
                {/* array of JSX items */}
                {demoList.map((demo, index) => (
                    <ContentItem demo={demo} key={index} />
                ))}
            </Masonry>
        </div>
    );
}

export default Content;
