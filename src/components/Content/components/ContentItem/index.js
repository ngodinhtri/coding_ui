import clsx from "clsx";
import styles from "./ContentItem.module.scss";
import Button from "../../../Button";

function ContentItem({ demo }) {
    const srcDoc = `<html><style>${demo.css}</style><body>${demo.html}</body></html>`;

    const copyText = (text) => {
        navigator.clipboard.writeText(text);
        console.log("success");
    };

    return (
        <div className={clsx(styles.wrapper)}>
            <div className={clsx(styles.header)}>
                <h2 className={clsx(styles.name)}>{demo.name}</h2>
                <Button active>View Code</Button>
            </div>
            <div className={clsx(styles.demo)}>
                <div dangerouslySetInnerHTML={{ __html: srcDoc }} />
            </div>
            <div className={clsx(styles.footer)}>
                <Button hoverBlue onClick={() => copyText(demo.html)}>
                    Copy HTML
                </Button>
                <Button hoverOrange onClick={() => copyText(demo.css)}>
                    Copy CSS
                </Button>
            </div>
        </div>
    );
}
export default ContentItem;
