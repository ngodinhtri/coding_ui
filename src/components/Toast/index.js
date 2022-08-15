import React from "react";
import { BsCheckLg, BsFillInfoCircleFill } from "react-icons/bs";
import { RiErrorWarningFill } from "react-icons/ri";
import { ToastDiv } from "./Styles";

const icons = {
    success: <BsCheckLg />,
    info: <BsFillInfoCircleFill />,
    warning: <RiErrorWarningFill />
};

export default function Toast({ message, status }) {
    return (
        <ToastDiv status={status}>
            <div className={`toast -${status}`}>
                <div className="toast__icon">{icons[status]}</div>
                <div className="toast__body">
                    <h3 className="toast__body_title">{status}</h3>
                    <p className="toast__body_message">{message}</p>
                </div>
            </div>
        </ToastDiv>
    );
}
