import "./formInput.css";

const FormInput = (props) => {
  // console.log(props.updateItem.name);
  // console.log('even i am rendering');
  return (
    <form className="form" onSubmit={props.formik.handleSubmit}>
      <label className="title" htmlFor="todoTask">
        Enter Todo
      </label>
      <input
      className="form-input"
        id=""
        name="todoTask"
        type="text"
        onChange={props.formik.handleChange}
        // value={}
      />
      <button className="add-button" type="submit">
        {props.isUpdate ? "Update" : "Add"}
      </button>
    </form>
  );
};

export default FormInput;
