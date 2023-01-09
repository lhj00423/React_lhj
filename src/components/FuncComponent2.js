import React,{useState} from 'react';

const FuncComponent2 = ({name,children}) => {
    //{name : "둥이", children:"사료사기"} 을 전달받음
    const [number,setNumber] = useState(0);
    // let number2 = 0;
    const onAddNumber = () =>{
        setNumber(number+1)
    }
    // const onAddNumber2 = () =>{
    //     number2++;
    //     console.log(number2)
    // }
    return (
        <div>
        <h2>{number}<button onClick={onAddNumber}>+1</button></h2>
        {name}{children}
        </div>
    );
};

export default FuncComponent2; 