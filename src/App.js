import {useState, useEffect} from "react";

function App() {
    const [counter, setValue] = useState(0);
    const [keyword, setKeyword] = useState("")
    const onClick = () => setValue((prev) => prev + 1);
    const onChange = (event) => setKeyword(event.target.value);
    useEffect(() => {
        console.log("I run only once.");
    }, []); // 한번만 실행
    useEffect(() => {
      console.log("I run when 'keyword' changes.");
    }, [keyword]); // keyword 변화시 계속 실행
    useEffect(() => {
      console.log("I run when 'counter' changes.");
    }, [counter]); // counter 변화시 계속 실행
    useEffect(() =>{
      console.log("I run wher keyword & counter change.");
    }, [keyword, counter]); // keyword, counter 변화시 계속 실행
    return (
        <div>
            <input
                onChange={onChange}
                value={keyword}
                type="text"
                placeholder="Search here..."/>
            <h1>{counter}</h1>
            <button onClick={onClick}>click me</button>
        </div>
    );
}

export default App;
