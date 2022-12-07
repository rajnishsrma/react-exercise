import {useState} from "react"

function App(){
    let [inputText, setInputText] = useState("sss");
   let [tasks, setTasks] = useState(["i am learning react", "for one week"]);

    function changeHandler(event){
        //console.log(event.target.value)
        setInputText(event.target.value);
       
    }
    
    function submitHandler(e) {
        e.preventDefault();
        let tempTasks = [...tasks];
        tempTasks.push(inputText);
        console.log(tempTasks);
        setTasks(tempTasks);

        // clear input
        setInputText("")
    }

    function deleteHandler(i){
        //console.log(i);
       let filtTasks =  tasks.filter((item, index) => {
            if(index == i){
                return false ;
            }else{
                return true ;
            }
        });

       // console.log(filtTasks)
       setTasks(filtTasks)
    }

    return <div>
      {
        tasks.map((item, index)=>{
            return <div key={index}> <h1  style={{backgroundColor: "red"}}>{item}</h1>
            <button onClick={() => deleteHandler(index)} >delete</button>
            </div>
            
        })
      }
      
        <form onSubmit={submitHandler}>
            <input type="text" value={inputText}  placeholder="enter your task" onChange={changeHandler}></input>
            <button type="submit">Add task</button>
            
        </form>
    </div>
}
export default App;