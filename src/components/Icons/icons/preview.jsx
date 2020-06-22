import React from 'react';

const SVG = ({
  style = {},
  fill = 'white',
  width = '100%',
  className = 'svg--icon',
  viewBox = '0 0 512 512',
}) => (
  <svg
    className={`svg-icon ${className}`}
    width={width}
    style={style}
    height={width}
    viewBox="0 0 24 24"
    fill={fill}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1 12C2.72998 7.60999 7 4.5 12 4.5C17 4.5 21.27 7.60999 23 12C21.27 16.39 17 19.5 12 19.5C7 19.5 2.72998 16.39 1 12ZM20.8201 12C19.17 8.63 15.79 6.5 12 6.5C8.21008 6.5 4.83008 8.63 3.18005 12C4.83008 15.37 8.21008 17.5 12 17.5C15.79 17.5 19.17 15.37 20.8201 12ZM12 9.5C13.38 9.5 14.5 10.62 14.5 12C14.5 13.38 13.38 14.5 12 14.5C10.62 14.5 9.5 13.38 9.5 12C9.5 10.62 10.62 9.5 12 9.5ZM7.5 12C7.5 9.52002 9.52002 7.5 12 7.5C14.48 7.5 16.5 9.52002 16.5 12C16.5 14.48 14.48 16.5 12 16.5C9.52002 16.5 7.5 14.48 7.5 12Z"
      fill={fill}
    />
  </svg>
);
export default SVG;
