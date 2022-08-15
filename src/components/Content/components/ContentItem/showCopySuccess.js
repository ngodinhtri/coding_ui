import Toast from "../../../Toast";
import { renderToStaticMarkup } from "react-dom/server";

export default function showCopySuccess() {
    const oldToast = document.querySelector(".toast_wrapper");

    if (oldToast) {
        oldToast.parentNode.removeChild(oldToast);
    }

    const main = document.getElementById("notification_popup");
    if (main) {
        const staticElement = renderToStaticMarkup(
            <Toast message={"Copied to clipboard"} status={"success"} />
        );

        const toast = document.createElement("div");
        toast.innerHTML = staticElement;
        toast.className = "toast_wrapper";

        const autoRemove = setTimeout(() => {
            main.removeChild(toast);
        }, 2000);

        toast.onclick = function (e) {
            if (e.target.closest(".toast__close")) {
                main.removeChild(toast);
                clearTimeout(autoRemove);
            }
        };

        main.appendChild(toast);
    }
}
