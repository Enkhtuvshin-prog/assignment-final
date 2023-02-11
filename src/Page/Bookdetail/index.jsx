import React, { useContext } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea } from "@mui/material";
import { useParams } from "react-router-dom";
import { UserContext } from "../../App";

const BookDetial = ({ books }) => {
  const loc = useParams();
  const book = books[loc.id];
  const {userName, setUserName} = useContext(UserContext)
 
  console.log("users", userName)
  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={book.thumbnailUrl}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {book.title}
            </Typography>
        <Typography>{userName}</Typography>
        <Button onClick={()=>{
          setUserName("Mina")
        }} >Click</Button>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default BookDetial;
