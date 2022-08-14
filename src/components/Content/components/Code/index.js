import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

function Code({ language, codeString }) {
    const customStyle = { fontSize: "16px" };

    return (
        <SyntaxHighlighter
            language={language}
            style={dracula}
            showLineNumbers
            customStyle={customStyle}
        >
            {codeString}
        </SyntaxHighlighter>
    );
}

export default Code;
