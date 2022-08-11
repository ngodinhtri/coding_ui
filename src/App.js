import "./App.css";
import { clsx } from "clsx";
import styles from "./App.module.scss";
import Header from "./components/Header";
import GlobalStyles from "./components/GlobalStyles";

function App() {
    return (
        <GlobalStyles>
            <div className={clsx(styles.wrapper)}>
                <Header />
            </div>
        </GlobalStyles>
    );
}

export default App;
