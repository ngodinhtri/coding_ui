import clsx from "clsx";
import styles from "./ContentItem.module.scss";
import Button from "../../../Button";
import ViewCode from "../ViewCode";
import js_beautify from "js-beautify";
import { useState } from "react";

function ContentItem({ demo }) {
    const { name, html, css } = demo;
    //Format Code
    const htmlCode = js_beautify.html(html);
    const cssCode = js_beautify.html(css);

    //Vanilla Code
    const srcDoc = `<html><style>${cssCode}</style><body>${htmlCode}</body></html>`;

    //HandleOnClick Copy Btn
    const copyText = (text) => {
        navigator.clipboard.writeText(text);
        console.log("success");
    };

    const [showCode, setShowCode] = useState(false);

    return (
        <div className={clsx(styles.wrapper)}>
            <div className={clsx(styles.header)}>
                <h2 className={clsx(styles.name)}>{name}</h2>
                <Button
                    active
                    onClick={() => {
                        setShowCode(!showCode);
                    }}
                >
                    {showCode ? "Hide Code" : "View Code"}
                </Button>
            </div>
            <div className={clsx(styles.demo)}>
                <div dangerouslySetInnerHTML={{ __html: srcDoc }} />
            </div>
            <div className={clsx(styles.footer)}>
                <Button hoverBlue onClick={() => copyText(htmlCode)}>
                    Copy HTML
                </Button>
                <Button hoverOrange onClick={() => copyText(cssCode)}>
                    Copy CSS
                </Button>
            </div>
            {showCode && <ViewCode htmlCode={htmlCode} cssCode={cssCode} />}
        </div>
    );
}
export default ContentItem;
