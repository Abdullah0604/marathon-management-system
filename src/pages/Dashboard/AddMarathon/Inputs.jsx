function MarathonInput({ label, inputName, inputType, inputExample }) {
  return (
    <>
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
        <label className="label capitalize text-gray-800 dark:text-gray-400 text-base font-medium">
          {label} :
        </label>
        <input
          type={inputType}
          className="input w-full rounded-full"
          name={inputName}
          placeholder={inputExample}
          required
        />
      </fieldset>
    </>
  );
}

function MarathonSelectInput({ label, inputName, selectValue }) {
  return (
    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
      <label className="label capitalize text-gray-800 dark:text-gray-400 text-base font-medium">
        {label}
      </label>
      <select
        name={inputName}
        defaultValue={selectValue[0]}
        className="select  w-full rounded-full"
        required
      >
        {selectValue.map((value, i) => (
          <option key={i} value={value}>
            {value}
          </option>
        ))}
      </select>
    </fieldset>
  );
}
export { MarathonInput, MarathonSelectInput };
