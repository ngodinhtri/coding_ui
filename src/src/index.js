import { frontCard, backCard } from "../assets/images";

const list = [
    {
        type: "button",
        name: "Button Hover Effect",
        html: `<button class="button">Coding UI</button>`,
        css: `.button {
          --color: #f05454;
          font-family: "Poppins", sans-serif;
          color: white;
          padding: 15px 30px;
          border-radius: 4px;
          background-color: transparent;
          cursor: pointer;
          font-weight: 500;
          outline: none;
          border: 1px solid var(--color);
          font-size: 16px;
          position: relative;
          isolation: isolate;
        }
        .button:before {
          content: "";
          height: 100%;
          width: 0;
          position: absolute;
          top: 0;
          right: 0;
          background-color: var(--color);
          z-index: -1;
          transition: width 0.25s ease-in;
        }
        .button:hover:before {
          width: 100%;
        }`
    },
    {
        type: "loading",
        name: "Line Loading",
        html: `<div class="line-loading"></div>`,
        css: `.line-loading {
            width: 100%;
            height: 0.5rem;
            position: relative;
            margin: 0 auto;
          }

          .line-loading:before {
            content: "";
            position: absolute;
            right: auto;
            left: 0;
            height: 100%;
            background-color: #f05454;
            animation: lineLoading 1s forwards infinite linear;
          }

          @keyframes lineLoading {
            0% {
              right: 100%;
            }
            50% {
              right: 0;
              left: 0;
            }
            100% {
              right: 0;
              left: 100%;
            }
          }`
    },
    {
        type: "loading",
        name: "Circle Loading",
        html: `<div class="circle-loading"></div>`,
        css: `.circle-loading {
            width: 100px;
            height: 100px;
            border-radius: 15rem;
            position: relative;
            margin: 0 auto;
            --color: #f05454;
          }
          .circle-loading:before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            box-sizing: border-box;
            border-radius: inherit;
            border: 1rem solid transparent;
            border-right-color: var(--color);
            border-bottom-color: var(--color);
            animation: circleLoading 1s forwards infinite linear;
          }
          @keyframes circleLoading {
            to {
              transform: rotate(360deg);
            }
          }`
    },
    {
        type: "card",
        name: "Flip card",
        html: `<div class="flip-card">
        <div class="flip-card-inner">
          <div class="front">
            <img src="${frontCard}" alt="front" />
          </div>
          <div class="back">
            <img src="${backCard}" alt="back" />
          </div>
        </div>
      </div>`,
        css: `.flip-card {
            max-width: 30rem;
            height: 40rem;
            margin: 0 auto;
            perspective: 150rem;
          }
          .flip-card-inner {
            width: 100%;
            height: 100%;
            perspective: 1000px;
            transition: transform 0.6s;
            transform-style: preserve-3d;
            position: relative;
          }
          .flip-card:hover .flip-card-inner {
            transform: rotateY(180deg);
          }
          .flip-card .front,
          .flip-card .back {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            -webkit-backface-visibility: hidden;
            backface-visibility: hidden;
          }
          .flip-card .back {
            transform: rotateY(180deg);
          }

          .flip-card img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }`
    },
    {
        type: "loading",
        name: "Circle Loading 2",
        html: `<div class="circle-loading2">
          <div></div>
          <div></div>
        </div>`,
        css: `.circle-loading2 {
            display: inline-flex;
            animation: loading2 1s infinite;
          }
          .circle-loading2 div {
              width: 30px;
              height: 30px;
              border: 2px solid #f05454;
              border-radius: 50%;
              margin: 0 5px;
            }
          @keyframes loading2 {
            50% {
              transform: rotate(200deg);
            }
            75% {
              transform: rotate(160deg);
            }
            100% {
              transform: rotate(180deg);
            }
          }`
    },
    {
        type: "input",
        name: "Custom input file",
        html: `<div class="input-file">
        <input type="file" name="file" id="file"/>
        <label for="file" class="input-label">
          <i class="fas fa-cloud-upload-alt icon-upload"></i>
        </label>
      </div>`,
        css: `.input-file {
            margin: 0 auto;
            width: 100%;
            height: 15rem;
            position: relative;
          }
          .input-label {
            border-radius: 8px;
            border: 1px dotted #eee;
            display: flex;
            align-items: center;
            justify-content: center;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 2;
            cursor: pointer;
          }
          .input-file input[type="file"] {
            display: none;
          }
          .input-file .icon-upload {
            color: #ccc;
            font-size: 3rem;
            pointer-events: none;
          }`
    },
    {
        type: "input",
        name: "On-Off Switch",
        html: `<input type="checkbox" id="switch" class="switch-input"/>
        <label for="switch" class="switch"></label>`,
        css: `.switch {
            position: relative;
            cursor: pointer;
            width: 12rem;
            height: 5rem;
            display: block;
            margin: 0 auto;
            overflow: hidden;
            box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
            background: #000;
            border-radius: 100rem;
            transition: background-color 0.25s linear;
          }
          .switch:after {
            content: "";
            position: absolute;
            width: 4rem;
            height: 4rem;
            border-radius: 4rem;
            background-color: #fff;
            top: 5px;
            left: 5px;
            transition: background-color 0.25s linear, transform 0.25s linear;
          }
          .switch-input {
            display: none;
          }
          .switch-input:checked + .switch {
            background-color: #f05454;
          }
          .switch-input:checked + .switch:after {
            transform: translateX(7rem);
            background-color: white;
          }`
    },
    {
        type: "button",
        name: "Share button",
        html: `<div class="social-share">
          <div class="social-share-item facebook">
            <i class="fab fa-facebook social-share-icon"></i>
            <span class="social-share-text">Share this post on Facebook</span>
          </div>
          <div class="social-share-item instagram">
            <i class="fab fa-instagram social-share-icon"></i>
            <span class="social-share-text">Share this post on Instagram</span>
          </div>
          <div class="social-share-item twitter">
            <i class="fab fa-twitter social-share-icon"></i>
            <span class="social-share-text">Share this post on Twitter</span>
          </div>
        </div>`,
        css: `.social-share {
            width: 100%;
            max-width: 400px;
          }
          .social-share-icon {
            width: 40px;
            height: 40px;
            background-color: white;
            border-radius: inherit;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 18px;
          }
          .social-share-text {
            color: white;
            margin-left: 15px;
            font-size: 14px;
          }

          .social-share-item {
            width: 100%;
            padding: 10px;
            border-radius: 8px;
            display: flex;
            align-items: center;
            cursor: pointer;
            box-sizing: border-box;
          }
          .social-share-item.facebook {
            background-color: #3b5999;
          }
          .social-share-item.facebook .social-share-icon {
            color: #3b5999;
          }
          .social-share-item.instagram {
            background-color: #e4405f;
          }
          .social-share-item.instagram .social-share-icon {
            color: #e4405f;
          }
          .social-share-item.twitter {
            background-color: #55acee;
          }
          .social-share-item.twitter .social-share-icon {
            color: #55acee;
          }
          .social-share-item + .social-share-item {
            margin-top: 20px;
          }`
    },
    {
        type: "loading",
        name: "Circle Dashed Loading",
        html: `<div class="dashed-loading"></div>`,
        css: `.dashed-loading {
            position: relative;
            height: 50px;
            
          }
          .dashed-loading:after,
          .dashed-loading:before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            border-radius: 50%;
            width: 50px;
            height: 50px;
            box-sizing: border-box;
          }
          .dashed-loading:before {
            z-index: 5;
            border: 3px dashed #f05454;
            border-left: 3px solid transparent;
            border-bottom: 3px solid transparent;
            -webkit-animation: dashed 1s linear infinite;
            animation: dashed 1s linear infinite;
          }
          .dashed-loading:after {
            z-index: 10;
            border: 3px solid #f05454;
            border-left: 3px solid transparent;
            border-bottom: 3px solid transparent;
            -webkit-animation: dashed 1s ease infinite;
            animation: dashed 1s ease infinite;
          }
          @keyframes dashed {
            to {
              transform: rotate(360deg);
            }
          }`
    }
];

export default list;
