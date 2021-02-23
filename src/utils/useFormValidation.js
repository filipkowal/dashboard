import { useState, useEffect } from 'react';

import validate from './validationRules';

const useFormValidation = (callback, values) => {
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback(values);
    }
  }, [errors, callback, isSubmitting, values]);

  const handleSubmit = event => {
    if (event) event.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  return {
    handleSubmit,
    errors,
  };
};

export default useFormValidation;
