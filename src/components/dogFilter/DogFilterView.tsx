import React from 'react';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';
interface Props {
  filterOptions: string[];
  getDogBreedsLength: (dogBreedLetter: string) => number;
  onChangeOption: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
function DogFilterView({ filterOptions, getDogBreedsLength, onChangeOption }: Props): JSX.Element {
  return (
    <RadioGroup row aria-label="dogLetter" name="dogLetter" onChange={onChangeOption}>
      {filterOptions.map((filter) => (
        <FormControlLabel
          key={filter}
          value={filter}
          control={<Radio color="primary" />}
          label={
            <>
              <Typography variant="body1">{filter.toUpperCase()}</Typography>
              <Typography variant="caption">({getDogBreedsLength(filter)})</Typography>
            </>
          }
          labelPlacement="bottom"
        />
      ))}
    </RadioGroup>
  );
}
export default DogFilterView;
