import MultiSelect from "react-select";

const MultiSelectAdapter = ({ input, ...rest }) => (
  <MultiSelect
    {...input}
    {...rest}
    searchable
    theme={(theme) => ({
      ...theme,
      colors: {
        ...theme.colors,
        primary: "#A0AEC0",
        primary25: "#EDF2F7",
        neutral10: "#ECC94B",
      },
    })}
  />
);

export default MultiSelectAdapter;
