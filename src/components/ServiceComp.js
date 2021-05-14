import React from 'react';


class ServiceComp extends React.Component{
    render(){
        return(
            <div>
                <p>Вы выбрали {this.props.service}</p>
                <p>Клиника: {this.props.clinic}</p>
            </div>
        )
    }
}

export default ServiceComp;