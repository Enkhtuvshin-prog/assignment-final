import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { NavLink } from "react-router-dom";

const Book = ({ book, id }) => {
  return (
    <Card sx={{ maxWidth: 345, m: 5 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={book.thumbnailUrl}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {book.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <NavLink to={"/books/" + id}>Read More...</NavLink>
      </CardActions>
    </Card>
  );
};

export default Book;
