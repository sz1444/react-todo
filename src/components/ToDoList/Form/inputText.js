function InputText(props) {

  return (
      <input
        type="text"
        className="p-4 px-4 w-full shadow-3xl text-sm bg-white rounded-md mb-4 flex justify-between"
        placeholder={ props.placeholder }
        onChange={ props.handleChange }
        defaultValue={ props.value ?? '' }
        required
      />
  );
}

export default InputText;
