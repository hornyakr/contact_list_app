const Search = ({ color = "white" }) => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.5499 17.575L10.2499 11.3C9.7499 11.7167 9.1749 12.0417 8.5249 12.275C7.8749 12.5083 7.20824 12.625 6.5249 12.625C4.80824 12.625 3.35824 12.0333 2.1749 10.85C0.991569 9.66667 0.399902 8.21667 0.399902 6.5C0.399902 4.8 0.991569 3.354 2.1749 2.162C3.35824 0.970667 4.80824 0.375 6.5249 0.375C8.2249 0.375 9.66657 0.966667 10.8499 2.15C12.0332 3.33333 12.6249 4.78333 12.6249 6.5C12.6249 7.21667 12.5082 7.9 12.2749 8.55C12.0416 9.2 11.7249 9.76667 11.3249 10.25L17.5999 16.525L16.5499 17.575ZM6.5249 11.125C7.80824 11.125 8.8959 10.675 9.7879 9.775C10.6792 8.875 11.1249 7.78333 11.1249 6.5C11.1249 5.21667 10.6792 4.125 9.7879 3.225C8.8959 2.325 7.80824 1.875 6.5249 1.875C5.2249 1.875 4.12924 2.325 3.2379 3.225C2.3459 4.125 1.8999 5.21667 1.8999 6.5C1.8999 7.78333 2.3459 8.875 3.2379 9.775C4.12924 10.675 5.2249 11.125 6.5249 11.125Z"
        fill={color}
      />
    </svg>
  );
};

export default Search;