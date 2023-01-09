import React, { Component } from 'react';

class ClassComponent2 extends Component {
    render(){
        // class는 this.props으로 받아옴
        const{name, children} = this.props;
        return (
            <div>
                나는 클래스형 컴포넌트{name}{children}
            </div>
            );
        }
};

export default ClassComponent2;