import React from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core';
import { DogListStyle } from './DogListView.styles';
import { capitalize } from 'lodash';

interface Props {
  dogList: string[];
}

const DogListView: React.FC<Props> = ({ dogList }) => {
  const classes = DogListStyle();
  return (
    <div className={classes.root}>
      <List id="listBreeds" component="nav">
        {dogList.map((item, index) => {
          return (
            <ListItem key={index}>
              <ListItemText primary={capitalize(item)} />
            </ListItem>
          );
        })}
      </List>
    </div>
  );
};

export default DogListView;
