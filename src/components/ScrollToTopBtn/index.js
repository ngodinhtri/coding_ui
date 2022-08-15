import React, { useEffect, useState } from "react";
import { AiOutlineCaretUp } from "react-icons/ai";
import styled, { keyframes } from "styled-components";
//Keyframes
const flyUp = keyframes`
    0%{
        transform: translateY(100px);
    }
    100%{
        transform: translateY(0);
    }
`;

const flyDown = keyframes`
    0%{
        transform: translateY(0);
    }
    100%{
        transform: translateY(100px);
    }
`;
//Styles
const Wrapper = styled.div`
    position: fixed;
    bottom: 40px;
    left: 20px;

    &.showUp {
        animation: ${flyUp} 0.3s linear;
    }

    &.hide {
        animation: ${flyDown} 0.3s linear forwards;
    }
`;

const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    width: 50px;
    height: 50px;
    cursor: pointer;
    background-color: var(--primary-clr);
    border: none;
    color: var(--light-clr);
    border-radius: 50%;
    font-size: 3rem;
    padding: 0;
    opacity: 0.5;
    transition: opacity 0.3s ease-in-out;

    &:hover {
        opacity: 1;
    }
`;

export default function ScrollToTopBtn() {
    const [visible, setVisible] = useState(false);
    const [firstLoad, setFirstLoad] = useState(true);

    const toggleVisible = () => {
        const y = document.documentElement.scrollTop;
        if (y > 300) {
            setVisible(true);
            if (firstLoad) setFirstLoad(false);
        } else {
            setVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisible);

        return () => {
            window.removeEventListener("scroll", toggleVisible);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <Wrapper
            className={visible ? "showUp" : "hide"}
            style={{ display: firstLoad ? "none" : "block" }}
        >
            <Button onClick={scrollToTop}>
                <AiOutlineCaretUp />
            </Button>
        </Wrapper>
    );
}
