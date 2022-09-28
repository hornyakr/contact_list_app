const ButtonSpecial = ({ text, icon, type = "button" }) => {
  return (
    <div className="bg-gradient-to-b from-grey-20 to-grey-20/0 rounded-4xl p-px">
      <button
        type={type}
        className="flex flex-row items-center gap-2 py-2 pl-3 pr-4 rounded-4xl defaultSpecial hover:transition-all"
      >
        {icon}
        {text}
      </button>
    </div>
  );
};

export default ButtonSpecial;
