import React from "react";
type OscerProps = {
  children: React.ReactNode;
};
function Oscer(props: OscerProps) {
  return <div>{props.children}</div>;
}

export default Oscer;
