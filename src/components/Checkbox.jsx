import React, { Fragment } from "react";

const Checkbox = props => {
  // (A)
    const {
        onChange,
        onRemove,
        data: { id, description, done }
    } = props;

  return (
    <Fragment>
      <label className="todo new-item">
        {/*(B) (C)*/}
        <input
          aria-label="todo-checkbox"
          className="todo__state"
          name={id}
          type="checkbox"
          defaultChecked={done}
          onChange={onChange}
        />
              <div className="todo__text">{description}</div>
              <button name={description} onClick={onRemove}>Delete</button>
              <br />
      </label>
    </Fragment>
  );
};

export default Checkbox;