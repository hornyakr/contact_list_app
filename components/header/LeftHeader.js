import Left from "../icons/Left";
import Sun from "../icons/Sun";

const LeftHeader = () => {
  return (
    <nav className="border border-solid border-grey-60 border-t-0 border-l-0 border-r-0 pt-8 sm:pt-20 h-full">
      <div className="flex justify-center sm:justify-end border border-solid border-grey-60 border-l-0 border-b-0 border-r-0 h-full">
        <button className="flex flex-col mx-1 my-6 py-2 gap-2 justify-between items-center sm:justify-center sm:m-6 sm:p-0">
          <Left />
          <div className="sm:hidden">
            <Sun />
          </div>
        </button>
      </div>
    </nav>
  );
};

export default LeftHeader;
