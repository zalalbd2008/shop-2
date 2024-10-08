export const MapPin = ({ ...props }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 0C7.34756 0 3.5625 3.78506 3.5625 8.4375C3.5625 10.0094 3.99792 11.5434 4.82198 12.8743L11.5197 23.6676C11.648 23.8744 11.874 24 12.1171 24C12.119 24 12.1208 24 12.1227 24C12.3679 23.9981 12.5944 23.8686 12.7204 23.6582L19.2474 12.7603C20.026 11.4576 20.4375 9.96277 20.4375 8.4375C20.4375 3.78506 16.6524 0 12 0ZM18.0406 12.0383L12.1065 21.9462L6.0172 12.1334C5.33128 11.0257 4.95938 9.74766 4.95938 8.4375C4.95938 4.56047 8.12297 1.39687 12 1.39687C15.877 1.39687 19.0359 4.56047 19.0359 8.4375C19.0359 9.7088 18.6885 10.9541 18.0406 12.0383Z"
        fill="currentColor"
      />
      <path
        d="M12 4.21875C9.67378 4.21875 7.78125 6.11128 7.78125 8.4375C7.78125 10.7489 9.64298 12.6562 12 12.6562C14.3861 12.6562 16.2188 10.7235 16.2188 8.4375C16.2188 6.11128 14.3262 4.21875 12 4.21875ZM12 11.2594C10.4411 11.2594 9.17813 9.9922 9.17813 8.4375C9.17813 6.88669 10.4492 5.61563 12 5.61563C13.5508 5.61563 14.8172 6.88669 14.8172 8.4375C14.8172 9.96952 13.5836 11.2594 12 11.2594Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const MapPinNew = ({ ...props }) => {
  return (
    <svg
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g fill="currentColor">
        <path d="m12.0009 14.1699c-2.13004 0-3.87004-1.73-3.87004-3.87 0-2.13996 1.74-3.85996 3.87004-3.85996 2.13 0 3.87 1.73 3.87 3.86996 0 2.14-1.74 3.86-3.87 3.86zm0-6.22996c-1.3 0-2.37004 1.06-2.37004 2.36996 0 1.31 1.06004 2.37 2.37004 2.37s2.37-1.06 2.37-2.37c0-1.30996-1.07-2.36996-2.37-2.36996z" />
        <path d="m11.9997 22.76c-1.48 0-2.97001-.56-4.13001-1.67-2.95-2.84-6.21-7.37-4.98-12.76 1.11-4.89 5.38-7.08 9.11001-7.08h.01c3.73 0 8 2.19 9.11 7.09 1.22 5.39-2.04 9.91-4.99 12.75-1.16 1.11-2.65 1.67-4.13 1.67zm0-20.01c-2.91001 0-6.65001 1.55-7.64001 5.91-1.08 4.71 1.88 8.77 4.56 11.34 1.73001 1.67 4.44001 1.67 6.17001 0 2.67-2.57 5.63-6.63 4.57-11.34-1-4.36-4.75-5.91-7.66-5.91z" />
      </g>
    </svg>
  );
};
export const MapPinSlash = ({  ...props }) => {
  return (
    <svg
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
        // fill="currentColor"
      >
        <path d="m10.42 12.9999c-.92-.54-1.54-1.54-1.54-2.69 0-1.71996 1.39-3.11996 3.12-3.11996 1.15 0 2.15.62 2.69 1.55" />
        <path d="m5.98995 17.8101c-1.84-2.51-3.18-5.72-2.36-9.31999 1.65-7.26 10.94005-8.4300028 15.05005-3.51" />
        <path d="m20.38 8.5c1.15 5.08-2.01 9.38-4.78 12.04-2.01 1.94-5.19 1.94-7.20999 0" />
        <path d="m22 2-20 20" />
      </g>
    </svg>
  );
};
