import React from 'react';


class NewComp extends React.Component{
    render(){
        return(
            <div>
                <p>{this.props.key}</p>
                <p>{this.props.text}</p>
            </div>
        )
    }
}

export default NewComp;