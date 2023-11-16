import { useState } from "react";

function Home(){
const [name, setName] = useState('mario');
const [age, setAge] = useState(21);

    const handleClick = (d) => {
        console.log('hello world', d)
    }

    const handleClickAgain = (name, e) => {
        setName('jteetz');
        setAge(age + 1);
        console.log('hello ' + name, e.target);
    }

    return (
        <div className="home">
            <h2>This is home</h2>
            <p>{name} is {age}</p>
            <button onClick={handleClick}>Click me</button>
            <button onClick={(e) => handleClickAgain(name, e)}>Noherone</button>
        </div>
    )
}

export default Home;