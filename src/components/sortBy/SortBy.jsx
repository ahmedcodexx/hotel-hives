import { useSearchParams } from "react-router-dom";
import Select from "react-select";
import { useAppMode } from "../../hooks";

const SortBy = ({ options }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { isDarkMode } = useAppMode();

  const handleChange = (value) => {
    searchParams.set("sortBy", value);
    setSearchParams(searchParams);
  };
  return (
    <>
      <Select
        onChange={(selected) => handleChange(selected.value)}
        options={options}
        placeholder="Sort By...."
        className="bg-[var(--color-primary)]"
        styles={{
          control: (base) => ({
            ...base,
            width: "180px",
            height: "40px",
            fontSize: "12px",
            border: "none",
            borderRadius: "10px",
            boxShadow: "none",
            background: isDarkMode ? "#1f2937" : "#fff",
            color: 'white',
            cursor: "pointer",
          }),
          singleValue: (base)=> ({
            ...base,
            color: isDarkMode ? "#fff" : "#000",
          }),
          menu: (base) => ({
            ...base,
            backgroundColor: isDarkMode ? "#111827" : "#fff",
          }),
          option: (base, { isFocused, isSelected }) => ({
            ...base,
            backgroundColor: isSelected
              ? "#432dd7"
              : isFocused
                ? "#5b4af4"
                : isDarkMode
                  ? "#111827"
                  : "#fff",
            color: isDarkMode ? "#fff" : isFocused ? "#fff" : "#000",
            fontSize: "12px",
            padding: '10px',
            cursor: "pointer",
          }),
        }}
      />
    </>
  );
};
export default SortBy;
