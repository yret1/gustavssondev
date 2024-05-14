import { useState } from "react";

interface ButtonProps {
  text: string;
  className: string;
  to: string;
  reverse?: boolean;
}

const Button: React.FC<ButtonProps> = ({ text, className, to, reverse }) => {
  const [isHovering, setIsHovering] = useState<boolean>(false);

  if (reverse) {
    return (
      <a href={to}>
        <button
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          className={`relative transition-all duration-700 hover:scale-105 ease-in-out flex justify-center items-center overflow-hidden border-[1px]  ${className} `}
        >
          <div
            className={`absolute bg-white h-[400%] -right-10 -rotate-12 transition-all duration-700 ease-in-out -top-10 ${
              isHovering ? "w-0" : "w-[150%]"
            }`}
          ></div>

          <p
            className={`${
              isHovering ? "text-white" : "text-black"
            } duration-700 transition-all text-nowrap z-40`}
          >
            {text}
          </p>
        </button>
      </a>
    );
  } else {
    return (
      <a href={to}>
        <button
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          className={`relative transition-all ease-in-out flex justify-center items-center overflow-hidden border-[1px] ${className} duration-700 hover:scale-105`}
        >
          <div
            className={`absolute bg-white h-[400%] -left-10 transition-all duration-700 -rotate-12 ease-in-out -top-10 ${
              isHovering ? "w-[150%]" : "w-0"
            }`}
          ></div>

          <p
            className={`${
              isHovering ? "text-black" : "text-white"
            } duration-700 transition-all text-nowrap z-40`}
          >
            {text}
          </p>
        </button>
      </a>
    );
  }
};

export default Button;
