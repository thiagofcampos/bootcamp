import React, { useCallback } from 'react';
import CreateBeerFormView from './CreateBeerFormView';

interface Props {
  name: string;
  type: number;
  hasCorn: boolean;
  ingredients: string;
}

const CreateBeerForm = () => {
  const [beer, setBeer] = React.useState<Props>({
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
        hasCorn: !beer.hasCorn,
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
    <CreateBeerFormView
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

export default CreateBeerForm;
