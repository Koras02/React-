import React from 'react'
import ReactDOM from 'react-dom';



class LogginButton extends React.Component {
    handleClick = () => {
        console.log('this is:', this);
    }

    render(){
        return(
            <button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
            <button onClick={this.deleteRow.bind(this,id)}>Delete Row</button>
        );
    }
}

ReactDOM.render(
    <LogginButton />,
    document.getElementById('root')
);

export default Event
