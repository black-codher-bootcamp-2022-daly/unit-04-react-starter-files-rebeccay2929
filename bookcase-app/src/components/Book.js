import React from "react";
import PropTypes from "prop-types";

function Book(props) {

  return (
    <div
      style={{
        backgroundColor: "pink",
        marginBottom: "4px",
        fontFamily: "monospace",
      
      }}
    >
      <h2>{props.book.volumeInfo.title}</h2>
      <h3>{props.book.volumeInfo.authors}</h3>
      <p>{props.book.saleInfo.retailPrice?.amount}</p>
      <img
        src={props.book.volumeInfo.imageLinks.thumbnail}
        alt={props.book.volumeInfo.title}
      />
      <p> {props.book.volumeInfo.description}</p>
    </div>
  );
}
Book.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    authors: PropTypes.array.isRequired,
  }),
  saleInfo: PropTypes.shape({
    retailPrice: PropTypes.shape({
      amount: PropTypes.number.isRequired,
    }),
  }),
};

export default Book;
