import React from 'react';
function Hello({name,message,isSpecial}){
    return (
    <div>
        <div className='hello'>
        {/* 조건부랜더링 */}
        { isSpecial ? <b> * </b> : null }
        {/* 논리연산자 */}
        { isSpecial && <b> * </b>}
        {name}님 {message}</div>
        <p>재미있는 리액트</p>
    </div>
    )
}
//기본값 설정
Hello.defaultProps = {
    name :"이름"
}

export default Hello;