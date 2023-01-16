import { useState } from "react";

const Showcase = () => {
  const [name, setName] = useState("Harv");

  return <div>Hello {name}</div>;
};

export default Showcase;
