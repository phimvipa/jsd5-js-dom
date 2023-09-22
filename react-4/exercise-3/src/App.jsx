import { useEffect } from "react";
import { useState } from "react";

const App = () => {
  const [fullname, setFullname] = useState();
  const [age, setAge] = useState();
  const [image, setImage] = useState();

  const [displayValue, setDisplayValue] = useState();
  // displayCondition = 'FULLNAME'
  // displayCondition = 'AGE'
  // displayCondition = 'IMAGE'
  const [displayCondition, setDisplayCondition] = useState();

  useEffect(() => {
    switch (displayCondition) {
      case "FULLNAME":
        setDisplayValue(<h1>{fullname}</h1>);
        break;

      case "AGE":
        setDisplayValue(<h2>{age}</h2>);
        break;

      case "IMAGE":
        setDisplayValue(<img src={image} />);

        break;
      default:
        setDisplayValue(<h3>Please select condition</h3>);
        break;
    }
  }, [displayCondition]);

  return (
    <>
      <input
        type="text"
        placeholder="fullname"
        onChange={(e) => setFullname(e.target.value)}
        value={fullname}
      />
      <input
        type="text"
        placeholder="age"
        onChange={(e) => setAge(e.target.value)}
        value={age}
      />
      <input
        type="text"
        placeholder="image url"
        onChange={(e) => setImage(e.target.value)}
        value={image}
      />
      <button onClick={() => setDisplayCondition("FULLNAME")}>Fullname</button>
      <button onClick={() => setDisplayCondition("AGE")}>Age</button>
      <button onClick={() => setDisplayCondition("IMAGE")}>Picture</button>
      <div>{displayValue}</div>
    </>
  );
};

export default App;