import React from 'react';
import { List } from '@material-ui/core';
import { DogListStyle } from './DogListView.styles';
import { capitalize } from 'lodash';
import DogListItem from '../dogListItem/DogListItem';

interface Props {
  breedList: { breed: string; breedImage: string }[];
}

const DogListView: React.FC<Props> = ({ breedList }) => {
  const classes = DogListStyle();
  return (
    <div className={classes.root}>
      <List component="nav">
        {breedList.map((item, index) => {
          return (
            <DogListItem key={index} breedImage={item.breedImage} breed={capitalize(item.breed)} />
          );
        })}
      </List>
    </div>
  );
};

export default DogListView;
