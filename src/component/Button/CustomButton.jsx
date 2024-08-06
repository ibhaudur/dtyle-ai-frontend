import { Button } from "@mui/material";
import React from "react";

const CustomButton = ({ btnName, additionalStyle }) => {
  return <Button className={`custom-btn ${additionalStyle}`}>{btnName}</Button>;
};

export default CustomButton;
