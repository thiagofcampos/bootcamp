import React, { useCallback } from 'react';
import CreateBeerFormView from './CreateBeerFormView';

interface Beer {
  name: string;
  type: number;
  hasCorn: boolean;
  ingredients: string;
}

const CreateBeerForm = () => {
  const [beer, setBeer] = React.useState<Beer>({
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
  const onChangeCheckBox = useCallback(() => {
    setBeer({
      ...beer,
      hasCorn: !beer.hasCorn,
    });
  }, [beer]);

  const onSubmit = useCallback(
    (event: React.FormEvent) => {
      event.preventDefault();
      console.log(beer);
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
