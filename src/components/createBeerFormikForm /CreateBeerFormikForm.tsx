import React, { useCallback } from 'react';
import CreateBeerFormikFormView from './CreateBeerFormikFormView';

interface Props {
  name: string;
  type: number;
  hasCorn: boolean;
  ingredients: string;
}

const CreateBeerFormikForm = () => {
  const handleSubmit = useCallback((values: Props) => {
    console.log(values);
  }, []);

  return <CreateBeerFormikFormView handleSubmit={handleSubmit} />;
};

export default CreateBeerFormikForm;
