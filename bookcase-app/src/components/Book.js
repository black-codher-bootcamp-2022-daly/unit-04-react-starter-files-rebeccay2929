import React from "react";
import PropTypes from "prop-types";

function Book(props) {
  return (
    <div
      style={{
        backgroundColor: "pink",
      }}
    >
      <h2>{props.book.volumeInfo.title}</h2>
      <h3>{props.book.volumeInfo.authors}</h3>
      {/* <h4>{props.saleInfo.listPrice.amount}</h4> */}
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
    listPrice: PropTypes.shape({
      amount: PropTypes.number.isRequired,
    }),
  }),
};

export default Book;
