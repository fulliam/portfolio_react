import React from "react";
import { useTheme } from '@/context/ThemeContext';
import "./ThemeSwitcher.scss";

const ThemeSwitcher: React.FC = () => {
  const { toggleTheme } = useTheme();

  return (
      <div className="theme-switcher" onClick={toggleTheme}>
        <div className="img">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <mask id="mask">
              <rect x="0" y="0" width="100%" height="100%" fill="white" />
              <circle
                className="moon-mask"
                cx="12"
                cy="4"
                r="9"
                fill="black"
              />
            </mask>
            <circle
              className="sun-core"
              fill="currentColor"
              cx="12"
              cy="12"
              r="5"
              mask="url(#mask)"
            />
            <g className="sun-rays" stroke="currentColor">
              <line x1="12" y1="1" x2="12" y2="3" />
              <line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="3" y2="12" />
              <line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </g>
          </svg>
        </div>

        {/* <div className="title">
          <h1>Switch Light Dark Mode</h1>
        </div> */}
      </div>
  );
};

export default ThemeSwitcher;