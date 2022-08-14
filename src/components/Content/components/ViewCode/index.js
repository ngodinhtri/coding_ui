import React from "react";
import clsx from "clsx";
import styles from "./ViewCode.module.scss";
import Code from "../Code";

function ViewCode({ htmlCode, cssCode }) {
    return (
        <div className={clsx(styles.wrapper)}>
            <h2>HTML</h2>
            <Code codeString={htmlCode} language="html" />
            <h2>CSS</h2>
            <Code codeString={cssCode} language="css" />
        </div>
    );
}

export default ViewCode;
