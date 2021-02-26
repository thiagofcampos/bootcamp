import React, { useCallback } from 'react';
import CreateBeerFormikFormView from './CreateBeerFormikFormView';

interface ICreateBeeProps {
  name: string;
  type: number;
  hasCorn: boolean;
  ingredients: string;
}

const CreateBeerFormikForm = () => {
  const [beer, setBeer] = React.useState<ICreateBeeProps>({
    name: '',
    type: 0,
    hasCorn: false,
    ingredients: '',
  });

  const onChangeText = useCallback(
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const newValue = event.target.value;
      setBeer({
        ...beer,
        [event.target.name]: newValue,
      });
    },
    [beer]
  );
  const onChangeCheckBox = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      debugger;
      setBeer({
        ...beer,
        [event.target.name]: !beer.hasCorn,
      });
    },
    [beer]
  );

  const onSubmit = useCallback(
    (event: React.FormEvent) => {
      event.preventDefault();
    },
    [beer]
  );

  return (
    <CreateBeerFormikFormView
      name={beer.name}
      type={beer.type}
      hasCorn={beer.hasCorn}
      ingredients={beer.ingredients}
      onChangeText={onChangeText}
      onChangeCheckBox={onChangeCheckBox}
      onSubmit={onSubmit}
    />
  );
};

export default CreateBeerFormikForm;
