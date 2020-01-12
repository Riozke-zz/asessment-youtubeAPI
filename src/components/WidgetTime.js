import React, {useState} from 'react';
import moment from 'moment';

const date = moment();

class WidgetTime extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }      
    
    componentDidMount() {
        this.timerID = setInterval(
          () => this.tick(),
          1000
        );
      }
    
    componentWillUnmount() {
        clearInterval(this.timerID);
      }
    
    tick() {
        this.setState({
          date: new Date()
        });
    }
    
    render() {
        return (
          <div>
             <h3 className="header__title">{date.format("dddd MMM Do, YYYY")} {this.state.date.toLocaleTimeString()}.</h3>
          </div>
        );
    } 
}

export default WidgetTime;