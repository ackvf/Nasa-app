/* eslint-disable max-len */
import React from 'react';
import { ErrorContainer } from './styles';

const NotifyError = () => {
  const refreshPage = () => {
    window.location.reload(false);
  };
  return (
    <ErrorContainer>
      <div id="error-box">
        <div className="error-message__img">
          <svg id="crashed-rocket" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 445.01">
            <polygon
              points="180.21 392.09 112.87 410.86 129.98 416.68 27.35 439.77 153.75 422.09 136.85 411.41 218.24 390.54 180.21 392.09"
              fill="#565656"
            />
            <polyline
              points="170.12 384.6 64.33 373.75 155.29 373.75 126.05 364.23 159.6 370.98"
              fill="#565656"
            />
            <g>
              <circle
                className="rocket-dude-crashed__circle"
                cx="131.7"
                cy="180.85"
                r="14.88"
                fill="#62646a"
                fillOpacity="0.43"
              />
              <circle
                className="rocket-dude-crashed__circle-1"
                cx="131.52"
                cy="158.74"
                r="23.77"
                fill="#62646a"
                fillOpacity="0.33"
              />
              <circle
                className="rocket-dude-crashed__circle"
                cx="106.87"
                cy="123.47"
                r="30.65"
                fill="#62646a"
                fillOpacity="0.27"
              />
              <circle
                className="rocket-dude-crashed__circle"
                cx="68.14"
                cy="107.53"
                r="46.6"
                fill="#62646a"
                fillOpacity="0.25"
              />
              <circle
                className="rocket-dude-crashed__circle"
                cx="98.6"
                cy="68.6"
                r="38.92"
                fill="#62646a"
                fillOpacity="0.1"
              />
              <circle
                className="rocket-dude-crashed__circle"
                cx="53.85"
                cy="46.41"
                r="46.41"
                fill="#62646a"
                fillOpacity="0.05"
              />
            </g>
            <ellipse
              className="rocket-dude-crashed__circle"
              cx="246"
              cy="399.48"
              rx="238.56"
              ry="45.53"
              fill="#62646a"
              fillOpacity="0.25"
            />
            <path
              d="M150.69,229.89c12.06-5.6,23.69-20.74,10.48-33.32-10.08,1.28-18.2,4.8-27.65,9.19s-17.29,8.3-23.74,14.69c6.8,15.55,28.84,15,40.9,9.44"
              transform="translate(0 -29.51)"
              fill="#62646a"
            />
            <path
              d="M176.53,420H277c1-29.32-3.92-67.7-24.19-112.43-26.51-58.41-50-91.28-67.18-110-11.75.9-27.64,5.5-45.1,13.42s-31.39,16.83-39.81,25.07c2.8,25.29,12,64.68,38.48,123.06A274.24,274.24,0,0,0,176.53,420Z"
              transform="translate(0 -29.51)"
              fill="#f8f8f8"
            />
            <path
              d="M176.54,420h15.62c-11.28-15.78-22.86-35.39-33.88-59.73-26.51-58.41-29.84-142.64-29.84-142.64S109.15,227.81,100.72,236c2.8,25.29,12,64.68,38.48,123.06A274.26,274.26,0,0,0,176.54,420Z"
              transform="translate(0 -29.51)"
              fill="#ecedef"
            />
            <path
              d="M134.5,223.94c-25.13-55.45-53.4-129.54-47.94-132s42.57,67.64,67.71,123.1c29.15,64.31,32.06,77.42,24.69,80.76S163.66,288.31,134.5,224"
              transform="translate(0 -29.51)"
              fill="#ea495c"
            />
            <path
              d="M122.48,319a430.8,430.8,0,0,1-16.16-51.63c-21.79-5.59-37.8-17.94-53.21-36.28C28,
              201.22,7.32,150.44,2,152.89S1.3,188,28.6,243.31c26.14,52.94,67,76.19,93.85,75.72m83.11-96.49a431.13,
              431.13,0,0,1,28.13,46.14c18.15-19.79,27.7-66,5.07-120.64-23.61-57-45.06-82.1-50.43-79.66s19.19,51.45,25.1,90c3.64,23.75,2.38,44-7.93,64.13"
              transform="translate(0 -29.51)"
              fill="#ea495c"
            />
            <path
              d="M318.8,410.69s-0.58,5.78,6.66,19.54c3.78,7.17.74,11,24.72,11q13.48,0,39-18.57a48.43,48.43,0,0,1,28.55,4.2q16.69,8.12,40.5,17.78-1.58,0,13-8.5-73.46-51.52-99.15-42.66c-25.7,8.85-28.34,16.71-31.88,11.18Z"
              transform="translate(0 -29.51)"
              fill="#0b0c0c"
            />
            <path
              d="M295.38,332.72l-42.56,89.94s-17.22.55-21.76,3.52,5.65,3,5.65,3h26.36l51.56-91.82Z"
              transform="translate(0 -29.51)"
              fill="#f7bc91"
            />
            <path
              d="M348.3,325.08L305.74,415s-12,2.11-16.56,5.09S316,421.52,316,421.52l49.42-97.71Z"
              transform="translate(0 -29.51)"
              fill="#f7bc91"
            />
            <path
              d="M338.35,398.48S337.77,404.26,345,418c3.78,7.17.74,11,24.72,11q13.48,0,39-18.57L479.21,435V418q-61.8-45.58-87.49-36.73c-25.7,8.85-28.34,16.71-31.88,11.18Z"
              transform="translate(0 -29.51)"
              fill="#0b0c0c"
            />
            <path
              d="M509.3,405.16c3.14,2.47-.36,12.95-8,23.19-7.84,10.41-16.76,17-20.12,14.31-2.51-2-10.4-6.17-11.37-12.69-0.18-1.5,3.27-7.6,5.74-10.74a4.93,4.93,0,0,1,2.07-1.77c6.37,1,12.57.4,14.21-1.69,8.07-10.25,14.38-13.09,17.55-10.63"
              transform="translate(0 -29.51)"
              fill="#162248"
            />
            <path
              d="M505.15,427.66a61.07,61.07,0,0,1-7.92,8.34,77.1,77.1,0,0,1-12.79,8.92,1.79,1.79,0,0,1-1.52-3.24A62.92,62.92,0,0,0,495,433.26c12.72-11,15-23.42,12.68-27.31a1.69,1.69,0,1,1,2.81-1.85c3,4.39,1.65,13.85-5.35,23.6"
              transform="translate(0 -29.51)"
              fill="#00adef"
            />
            <path
              d="M482.08,418.64l-2.3,2.93a0.81,0.81,0,0,1-1.25-1l2.29-2.93a0.71,0.71,0,0,1,1.13-.14,0.81,0.81,0,0,1,.14,1.13"
              transform="translate(0 -29.51)"
              fill="#fefefe"
            />
            <path
              d="M486.23,418.53l-2.3,2.93a0.81,0.81,0,0,1-1.25-1l2.3-2.93a0.81,0.81,0,0,1,1.25,1"
              transform="translate(0 -29.51)"
              fill="#fefefe"
            />
            <path
              d="M491.44,417.52L489,420.66a0.81,0.81,0,0,1-1.25-1l2.47-3.14a0.81,0.81,0,0,1,1.25,1"
              transform="translate(0 -29.51)"
              fill="#fefefe"
            />
            <path
              d="M503.69,443.45c0.89,3.9-8.43,9.84-20.85,13-12.65,3.15-23.71,2.65-24.64-1.54-0.71-3.12-4.2-11.34-.85-17,0.81-1.28,7.32-3.85,11.22-4.73a4.93,4.93,0,0,1,2.72-.07c4.35,4.75,9.51,8.22,12.11,7.64,12.73-2.89,19.41-1.13,20.33,2.78"
              transform="translate(0 -29.51)"
              fill="#162248"
            />
            <path
              d="M486.3,458.32a61.07,61.07,0,0,1-11.4,1.5,77.1,77.1,0,0,1-15.55-1.11,1.79,1.79,0,0,1,.85-3.47,62.92,62.92,0,0,0,14.7,1.06c16.81-.55,26.42-8.73,27-13.25a1.69,1.69,0,1,1,3.35.33c-0.44,5.29-7.44,11.8-19,15"
              transform="translate(0 -29.51)"
              fill="#00adef"
            />
            <path
              d="M474,436.79l-3.64.83a0.81,0.81,0,0,1-.35-1.56l3.62-.83a0.71,0.71,0,0,1,1,.6,0.81,0.81,0,0,1-.6,1"
              transform="translate(0 -29.51)"
              fill="#fefefe"
            />
            <path
              d="M477.35,439.32l-3.64.83a0.81,0.81,0,0,1-.35-1.56l3.64-.83a0.81,0.81,0,0,1,.35,1.56"
              transform="translate(0 -29.51)"
              fill="#fefefe"
            />
            <path
              d="M482,441.81l-3.9.89a0.81,0.81,0,0,1-.35-1.56l3.9-.89a0.81,0.81,0,0,1,.35,1.56"
              transform="translate(0 -29.51)"
              fill="#fefefe"
            />
            <path
              d="M291.3,340.43q9.26,2.27,21.75,5.52-10-20-5.5-13.39c13.25,20,9.82,82.35,11.78,81.54,5.13-2.13,56.05-17.82,53.25-24.62-5.44-13.22-10-25.53-12.34-33.07-4.3-13.64-9.34-27.36-10.59-32.43-1.09-4.34,2.88,8.58,2.88,8.58L367,324.77s-6-11.5-12.16-17.18c-9-8.31-8.82-5.4-17.42-6.51s-29.82,5.11-29.82,5.11Q291.3,314,291.3,319v21.45Z"
              transform="translate(0 -29.51)"
              fill="#08c655"
            />
            <path
              d="M308,337.38c13.25,20,9.34,77.54,11.3,76.73,5.13-2.13,41.19-13.54,35.17-12.6-10.1,1.56-26.06,12.42-28.44,4.89-4.3-13.64-8.66-48.84-10.85-57.41a54.73,54.73,0,0,0-6.15-15.36C302.42,324.93,305,327.6,308,337.38Z"
              transform="translate(0 -29.51)"
              fill="#0e9745"
            />
            <path
              d="M342,312.29s2.23,1.57,5.37,7.4,3.77,13,5.78,13,5-3.06,5-3.06L347.3,317.49Z"
              transform="translate(0 -29.51)"
              fill="#0e9745"
            />
            <path
              d="M313.41,294s4.48,8,3.88,10.31,14.28,2.44,14.28,2.44,1.56-11.67,3.88-13.34-22,.6-22,0.6"
              transform="translate(0 -29.51)"
              fill="#eda584"
            />
            <g className="head">
              <path
                d="M349.5,264.58c-1.42,6.23,5.35,4.36,6.51,12.61,2.69,18.61-23.18,23.68-31.25,24-17.1.62-31.36-17.1-32-39.08s13-33.51,30.13-34.12c14.59-.31,20.25,5.08,24,20.9,0,0,3.92,10,2.63,15.71"
                transform="translate(0 -29.51)"
                fill="#f7bc91"
              />
              <path
                d="M317.18,252c-0.31-2.17,7.45-2.79,9.93-3.1"
                transform="translate(0 -29.51)"
                fill="#eda584"
              />
              <path
                d="M309.85,256.62c7.76-1.24,31.1-12.88,37-15.67-4.35-13-11.4-7.59-24.75-7C305,234.6,292.35,238.06,293,260a31.21,31.21,0,0,0,1,7.74,32.21,32.21,0,0,0,1.26,3.13c4.07,9,6.23,18,7.16,19.54,0,0,2.44-.31,2.78,0l0.65-32Z"
                transform="translate(0 -29.51)"
                fill="#eda584"
              />
              <path
                d="M300.81,255.28c0-1.86,20.63-3.37,22.8-3.68,10.86-2.17,23.61-4.66,26.39-10.85,5-9.61-.71-21-0.71-21S347.48,225.62,336,228c-2.73-1.21-16.43-2.13-29.47.27-7.76,7.13-9-2.07-14.27,7.24-4.66,8.38-3.63,28.5.72,39a45.75,45.75,0,0,0,10.45,19.92"
                transform="translate(0 -29.51)"
                fill="#662d10"
              />
              <path
                d="M303.44,294.41l-4.79-17.21s1.07-10.39,2.3-17.21"
                transform="translate(0 -29.51)"
                fill="#662d10"
              />
              <path
                d="M322,267.08c0,1.86-1.25,3.72-2.44,3.72-1.56,0-2.79-1.56-2.79-3.41s1.25-3.72,2.44-3.72,2.79,1.56,2.79,3.41"
                transform="translate(0 -29.51)"
                fill="#362310"
              />
              <path
                d="M334.27,255.94c-2.74.55-3.65,3.9-1.58,3.17,1.77-.68,3.4-2,6.39-1.29s3.83-1.44,2.52-1.78c-1.4-.67-4.57-0.66-7.33-0.11"
                transform="translate(0 -29.51)"
                fill="#362310"
              />
              <path
                d="M339.88,264.44c0,1.86-1.25,3.72-2.44,3.72-1.56,0-2.79-1.56-2.79-3.41s1.25-3.72,2.44-3.72,2.79,1.56,2.79,3.41"
                transform="translate(0 -29.51)"
                fill="#362310"
              />
              <path
                d="M319.19,258.22c2.78-.38,4.75,2.44,2.54,2.44-1.9,0-3.88-.72-6.51.89s-4.07-.07-2.95-0.81c1.11-1.09,4.11-2.13,6.9-2.51"
                transform="translate(0 -29.51)"
                fill="#362310"
              />
              <path
                d="M325.18,292.61s3.14-5.47,8.9-6.69q5-1.06,7.3-.37"
                transform="translate(0 -29.51)"
                fill="none"
                stroke="#db8873"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M331.16,283.38l0.61-.42-1.63-5c1.33,0.17,4.32.37,5.46-1.12l0.13-.17v-0.25c-0.4-5.41-6.83-8.14-7.1-8.22l-0.18.94c0.06,0,6,2.53,6.59,7.11-1.14,1.12-4.25.81-5.4,0.64l-0.65-.11Z"
                transform="translate(0 -29.51)"
                fill="#db8873"
              />
            </g>
            <path
              d="M327.61,323.7a1.42,1.42,0,1,0,1.63,1.06,1.31,1.31,0,0,0-1.63-1.06"
              transform="translate(0 -29.51)"
              fill="#fff"
            />
            <path
              d="M329.66,321.3h-0.45l-0.27.07h-0.29l-0.28.18a3.44,3.44,0,0,0-.3.24l-0.31.29-0.17.16a1.1,1.1,0,0,1-.21.15h-0.45a0.9,0.9,0,0,0-.3-0.17,0.81,0.81,0,0,0-.31,0,1.34,1.34,0,0,0-.28.07l-0.21.08-0.13.07h0l0.12-.09,0.2-.13,0.14-.07h0.08a1,1,0,0,1,.39,0,1.11,1.11,0,0,1,.42.16h0.2l0.12-.11,0.13-.16,0.28-.36a1.9,1.9,0,0,1,.33-0.33,1.41,1.41,0,0,1,.41-0.21,1.39,1.39,0,0,1,.73,0h0.42m-1.21,6.07a2.21,2.21,0,1,1,1.69-2.69,2.14,2.14,0,0,1-1.69,2.69m-2.92,1.42a0.42,0.42,0,0,1-.51-0.31l-0.07-.31a2.35,2.35,0,0,1-1.53,1.13,2.91,2.91,0,0,1-1.34-5.66,3.21,3.21,0,0,1,1.91.14,0.45,0.45,0,1,1-.34.81,2.19,2.19,0,0,0-1.34-.13,2,2,0,1,0,1,3.93,1.73,1.73,0,0,0,1.17-1.16l-0.72.17a0.42,0.42,0,0,1-.2-0.81l1.38-.33a0.44,0.44,0,0,1,.54.33l0.41,1.69a0.42,0.42,0,0,1-.31.51m5-9.56-9,2.17a3.93,3.93,0,0,0-3,3.81v6.82a0.68,0.68,0,0,0,.81.66l9-2.17a3.93,3.93,0,0,0,3-3.81v-6.82a0.68,0.68,0,0,0-.81-0.66"
              transform="translate(0 -29.51)"
              fill="#fff"
            />
            <path
              d="M336.64,321.23a0.45,0.45,0,0,1-.58.22,2.18,2.18,0,0,0-1.34-.13,2,2,0,1,0,1,3.93,2.3,2.3,0,0,0,1.17-.73,0.44,0.44,0,1,1,.66.57,3.26,3.26,0,0,1-1.63,1.06,2.91,2.91,0,1,1-1.34-5.66,3.2,3.2,0,0,1,1.91.14,0.45,0.45,0,0,1,.24.6"
              transform="translate(0 -29.51)"
              fill="#fff"
            />
            <path
              d="M338.18,322.59a1.34,1.34,0,1,0,1-1.69,1.32,1.32,0,0,0-1,1.69m3.51-.85a2.28,2.28,0,1,1-2.74-1.63,2.14,2.14,0,0,1,2.74,1.63"
              transform="translate(0 -29.51)"
              fill="#fff"
            />
          </svg>
        </div>

        <div className="message">
          <h1 className="alert">Error!</h1>
          <p>oh no, something went wrong.</p>
          <p>refresh or come back later</p>
        </div>
        <button onClick={refreshPage} className="button-box" type="submit">
          <h1 className="red">Refresh</h1>
        </button>
      </div>
    </ErrorContainer>
  );
};

export default NotifyError;
