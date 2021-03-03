import React, { useCallback } from 'react';
import CreateBeerFormikFormView from './CreateBeerFormikFormView';

interface Beer {
  name: string;
  type: number;
  hasCorn: boolean;
  ingredients: string;
}

const CreateBeerFormikForm = () => {
  const handleSubmit = useCallback((values: Beer) => {
    console.log(values);
  }, []);

  return <CreateBeerFormikFormView handleSubmit={handleSubmit} />;
};

export default CreateBeerFormikForm;
