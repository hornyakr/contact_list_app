const Left = ({ color = "white", width = 16, height = 16 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 15.625L0.375 8L8 0.375L9.075 1.45L3.25 7.25H15.625V8.75H3.25L9.075 14.55L8 15.625Z"
        fill={color}
      />
    </svg>
  );
};

export default Left;
