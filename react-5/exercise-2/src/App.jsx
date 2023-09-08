import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import "./App.css";
import Form from "./Form";

const App = () => {
  const [members, setMembers] = useState([]);
  const [_updates, _setUpdates] = useStage(false);
  // started life cycle here

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
      "https://jsd5-mock-backend.onrender.com//members");
      setMembers(response.data);
    };

    getData();
  }, [_updates]);

  // update here
  const updateData = {id, name, age, weight, status} => {
    const objData = {
      id, name, age, weight, status
    }
    axios.post("https://jsd5-mock-backend.onrender.com//members" , objData)
    _setUpdates();
  }
  // create here

  return (
    <div className="container">
      <Form submitHandler={updateData} />
      <div className="card-container">
        {members.map((member) => (
          <Card
            age={member.age}
            name={member.name}
            id={member.id}
            status={member.status}
            weight={member.weight}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
