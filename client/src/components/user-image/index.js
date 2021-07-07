import React from 'react';
import Image from 'material-ui-image'
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(12),
    height: theme.spacing(12),
  },
}));

function random_item(items)
{
  
return items[Math.floor(Math.random()*items.length)];
     
}

var items = [1037, 1039, 1043, 1057, 11, 12]

console.log(random_item(items));

const UserImage = () => {
  const classes = useStyles();

  return (
    <img src="https://picsum.photos/id/237/200/300" alt='random view image' />
  );
}

export default UserImage;