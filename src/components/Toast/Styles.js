import styled, { keyframes } from "styled-components";

const slideInLeft = keyframes`from {
    opacity: 0;
    transform: translateX(calc(100% + 32px));
  }
  to {
    opacity: 1;
    transform: translateX(calc(0));
  }`;

const fadeOut = keyframes`
  to {
    opacity: 0;
  }
`;

export const ToastDiv = styled.div`
    .toast {
        --success-color: #47d764;
        --info-color: #2f86eb;
        --warning-color: #ffc021;
        --title-color: #333;
        --message-color: #888;

        position: fixed;
        top: 32px;
        right: 32px;
        z-index: 999;

        display: flex;
        align-items: center;
        background-color: #fff;
        padding: 0;
        border-left: 4px solid #000;
        border-radius: 8px;
        box-shadow: 0 5px 8px rgba(0, 0, 0, 0.08);
        min-width: 280px;
        max-width: 450px;
        transition: all linear 0.3s;
        animation: ${slideInLeft} 0.4s ease-in-out, ${fadeOut} 1s 1s linear forwards;

        //Modified
        &.-${(props) => props.status} {
            color: var(--${(props) => props.status}-color);
            border-color: var(--${(props) => props.status}-color);
        }

        // Elements
        &__icon {
            font-size: 2.5rem;
            margin: 0 20px;
        }

        &__body {
            flex: 1;

            &_title {
                margin: 10px 0;
                font-size: 1.8rem;
                color: $title-color;
            }
            &_message {
                margin: 10px 0;
                font-size: 1.6rem;
                color: $message-color;
            }
        }

        &__close {
            cursor: pointer;
            font-size: 2.5rem;
            margin: 0 20px;
        }
    }
`;
