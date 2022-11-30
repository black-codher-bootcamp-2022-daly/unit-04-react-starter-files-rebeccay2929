import React from "react";

function Gadget({ gadget }) {
  return (
    <div>
      <h3> {gadget.title}</h3>
      <h3> {gadget.sales} </h3>
      <p>{gadget.price}</p>
      <img src = {gadget.src}/>
    </div>
  );
}

const GadgetList = (props) => {
  return (
    <main>
      <h2>Headphones color</h2>
      <h3>There are currently {props.amountOfHeadphones} headphones</h3>
      {props.items.map(
        (item) => (
          <Gadget gadget={item} />
        )
      )}
    </main>
  );
};

export default GadgetList;
