import { useState } from "react"

const App = () => {
    const [name, setName] = useState();
    const [bio, setBio] = useState();

    return (
        <div>
            <input
            type="text" 
            placeholder="name here"
            onChange={(evl)  => setName(evl.target.value)}
            />

            <input 
            type="text" 
            placeholder="short bio"
            onChange={(evl) => setBio(evl.target.value)}
            />

            <button onClick={() => submitHandler()}>Submit</button>
            <Info name={name} bio={bio} />
        </div>
        );
    };

    const Info = ({ name, bio }) => {
        return (
            <div>
            <h1>Your name is {name}</h1>
            <h3>{bio}</h3>
            </div>
        );
    };
  

export default App