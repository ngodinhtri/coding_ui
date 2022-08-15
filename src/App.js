import "./App.css";
import { clsx } from "clsx";
import styles from "./App.module.scss";
import Header from "./components/Header";
import GlobalStyles from "./components/GlobalStyles";
import Filter from "./components/Filter";
import Content from "./components/Content";
import ScrollToTopBtn from "./components/ScrollToTopBtn";

function App() {
    return (
        <GlobalStyles>
            <div className={clsx(styles.wrapper)}>
                <div id="notification_popup" />
                <Header />
                <Filter />
                <Content />
                <ScrollToTopBtn />
            </div>
        </GlobalStyles>
    );
}

export default App;
