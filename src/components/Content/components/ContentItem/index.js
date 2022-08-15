import clsx from "clsx";
import styles from "./ContentItem.module.scss";
import js_beautify from "js-beautify";
import { useState } from "react";
import parse from "html-react-parser";
import styled from "styled-components";

import Button from "../../../Button";
import ViewCode from "../ViewCode";
import showCopySuccess from "../../../../lib/showCopySuccess";

const DemoCodeStyle = styled.div`
    ${(props) => props.css}
`;

function ContentItem({ demo }) {
    const { name, html, css } = demo;
    //Format Code
    const htmlCode = js_beautify.html(html);
    const cssCode = js_beautify.html(css);

    //HandleOnClick Copy Btn
    const copyText = (text) => {
        navigator.clipboard.writeText(text);
        showCopySuccess();
    };
    //useState
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
                <DemoCodeStyle css={cssCode}>
                    <>{parse(htmlCode)}</>
                </DemoCodeStyle>
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
