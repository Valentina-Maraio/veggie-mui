import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

const TitlebarImageList = ({recipes = []}) => {
  return (
    <ImageList sx={{ width: 'auto', height: 'auto' }}>
      <ImageListItem cols={2}>
      </ImageListItem>
      {recipes.map((item) => (
        <ImageListItem key={IdleDeadline}>
          <img
            src={item.image}
            alt={item.title}
          />
          <ImageListItemBar
            title={item.title}
          />
        </ImageListItem> 
      ))}
    </ImageList>
  );
}

export default TitlebarImageList;