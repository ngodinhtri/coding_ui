import clsx from "clsx";
import styles from "./Card.module.scss";
import js_beautify from "js-beautify";
import { useState } from "react";
import parse from "html-react-parser";
import styled from "styled-components";

import Button from "../Button";
import ViewCode from "../ViewCode";
import showCopySuccess from "../../lib/showCopySuccess";

import { FiCopy } from "react-icons/fi";
import { TbCode, TbCodeOff } from "react-icons/tb";

//import css code demo of  from source code
const DemoCodeStyle = styled.div`
    ${(props) => props.styles}
`;

function Card({ demo }) {
    const { name, html, css } = demo;
    //Format Code
    const htmlCode = js_beautify.html(html);
    const cssCode = js_beautify.css(css);

    //HandleOnClick Copy Btn
    const copyText = (text) => {
        navigator.clipboard.writeText(text);
        showCopySuccess();
    };
    //useState
    const [showCode, setShowCode] = useState(false);

    return (
        <div className={clsx(styles.wrapper)}>
            {/* HEADER */}
            <div className={clsx(styles.header)}>
                <h2 className={clsx(styles.name)}>{name}</h2>
            </div>
            {/* DEMO */}
            <div className={clsx(styles.demo)}>
                <DemoCodeStyle styles={cssCode}>
                    <>{parse(htmlCode)}</>
                </DemoCodeStyle>
            </div>
            {/* FOOTER */}
            <div className={clsx(styles.footer)}>
                <Button hoverLight onClick={() => copyText(htmlCode)}>
                    <FiCopy className={clsx(styles.btnIcon)} />
                    &nbsp;HTML
                </Button>
                <Button hoverLight onClick={() => copyText(cssCode)}>
                    <FiCopy className={clsx(styles.btnIcon)} />
                    &nbsp;CSS
                </Button>
                <Button
                    hoverLight
                    onClick={() => {
                        setShowCode(!showCode);
                    }}
                >
                    {showCode ? (
                        <TbCodeOff
                            style={{ fontSize: "2rem" }}
                            className={clsx(styles.btnIcon)}
                        />
                    ) : (
                        <TbCode
                            style={{ fontSize: "2rem" }}
                            className={clsx(styles.btnIcon)}
                        />
                    )}
                </Button>
            </div>
            {showCode && <ViewCode htmlCode={htmlCode} cssCode={cssCode} />}
        </div>
    );
}
export default Card;
