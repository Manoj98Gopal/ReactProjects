import React from "react";

function CustomText({ children, as: Tag = "p", ...rest }) {
  return <Tag {...rest}>{children}</Tag>;
}

export default CustomText;
