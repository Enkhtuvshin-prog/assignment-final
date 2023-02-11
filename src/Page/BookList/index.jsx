import * as React from "react";
import Grid from "@mui/material/Grid";
import Book from "../../component/Book";

export default function BookList({ books }) {
  console.log("nkk", books);
  return (
    <Grid container>
      {books.map((book, i) => (
        <Book book={book} id={i} />
      ))}
    </Grid>
  );
}
