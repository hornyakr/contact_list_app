import Sun from "../icons/Sun";

const RightHeader = () => {
  return (
    <div className="border border-solid border-grey-60 border-t-0 border-r-0 border-l-0  pt-20 h-full">
      <div className="flex justify-start border border-solid border-grey-60 border-l-0 border-b-0 border-r-0 h-full">
        <button className="m-6">
          <Sun />
        </button>
      </div>
    </div>
  );
};

export default RightHeader;
