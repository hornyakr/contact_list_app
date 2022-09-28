const ButtonSecondary = ({ text, icon, type = "button" }) => {
  return (
    <button
      type={type}
      className={`flex flex-row items-center justify-center h-10 gap-2 rounded-lg ${
        !icon ? "px-4 py-2" : !text ? "p-2" : "py-2 pr-4 pl-3"
      } hover:bg-grey-90 active:bg-grey-80`}
    >
      {icon}
      {text}
    </button>
  );
};

export default ButtonSecondary;
