import { useRef } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { DropdownContext } from "./Contact";

const Dropdown = ({ title, items = [] }) => {
  const { expand, toggleExpand } = useContext(DropdownContext);

  const domNode = useRef();
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (expand && !domNode.current.contains(event.target)) {
        toggleExpand();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  return (
    <div ref={domNode} className="relative inline-block">
      <Title>{title}</Title>
      <Items>
        {items.map((item, index) => (
          <Item key={index}>{item}</Item>
        ))}
      </Items>
    </div>
  );
};

const Title = ({ children }) => {
  const { expand, toggleExpand } = useContext(DropdownContext);

  return (
    <button
      type="button"
      onClick={toggleExpand}
      className={`w-10 h-10 flex justify-center items-center rounded-lg${
        expand && " bg-grey-80"
      }`}
    >
      {children}
    </button>
  );
};

const Items = ({ children }) => {
  const { expand } = useContext(DropdownContext);

  return (
    <div className="absolute -left-10 sm:left-0 z-10 mt-2 w-56 origin-top-right rounded-lg bg-grey-80">
      {expand && <div>{children}</div>}
    </div>
  );
};

const Item = ({ children }) => {
  return <>{children}</>;
};

export default Dropdown;
