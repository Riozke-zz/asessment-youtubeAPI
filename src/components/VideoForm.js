import React from 'react';

export default class VideoForm extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        description: props.video ? props.video.description : '',        
        error: ''
      };
    }
    onDescriptionChange = (e) => {
      const description = e.target.value;
      this.setState(() => ({ description }));
    };
    
    onSubmit = (e) => {
      e.preventDefault();
  
      if (!this.state.description) {
        this.setState(() => ({ error: 'Please provide description and amount.' }));
      } else {
        this.setState(() => ({ error: '' }));
        this.props.onSubmit({
          description: this.state.description
        });
      }
    };
    render() {
      return (
          <form className="form" onSubmit={this.onSubmit}>
            {this.state.error && <p className="form__error">{this.state.error}</p>}
            <input
              type="text"
              placeholder="Description"
              autoFocus
              className="text-input"
              value={this.state.description}
              onChange={this.onDescriptionChange}
            />
            <div>
              <button className="button">Save Video</button> 
            </div>         
          </form>
      )
    }
  }