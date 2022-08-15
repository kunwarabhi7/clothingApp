import "./form-input.styles.scss";
const FormInput = ({ label, ...othersProps }) => {
  return (
    <div className="group">
      <input className="form-input" {...othersProps} />
      {label && (
        <label
          className={`${
            othersProps.value.length ? "shrink" : ""
          }form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
