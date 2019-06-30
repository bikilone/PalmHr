import React from "react";

const PriceSlot: React.FC<{ price: number; extended?: boolean }> = props => {
  let classes = "price-slot";
  if (props.extended) {
    classes += " extended";
  }
  return <div className={classes}>{props.price}</div>;
};

export default PriceSlot;
