import { useState } from 'react';

import useFormValidation from '../utils/useFormValidation';

export default function FormWithValidation({
  defaultValues,
  handleSubmit,
  handleCancel,
}) {
  const [values, setValues] = useState(defaultValues || {});

  const { errors, handleSubmit: handleSubmitValidated } = useFormValidation(
    handleSubmit,
    values
  );

  function handleChange(event) {
    const { name, value } = event.target;
    setValues(prev => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <form onSubmit={handleSubmitValidated} noValidate>
      {Object.keys(values).map(key => {
        const value = String(values[key]);

        const type = key === 'email' ? 'email' : 'text';

        return (
          <div key={key} className="field">
            <label className="label">
              {key.slice(0, 1).toUpperCase() + key.slice(1)}
            </label>
            <div className="control">
              <input
                className={`input ${errors[key] && 'is-danger'}`}
                type={type}
                name={key}
                onChange={handleChange}
                value={value || ''}
                disabled={key === 'id'}
              />
              {errors[key] && <p className="help is-danger">{errors[key]}</p>}
            </div>
          </div>
        );
      })}

      <button type="submit" className="button is-primary">
        Submit
      </button>
      <button className="button" type="button" onClick={handleCancel}>
        Cancel
      </button>
    </form>
  );
}
