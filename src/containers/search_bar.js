import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Fetch_Weather}  from '../actions/index';

class SearchBar extends Component{
constructor(props){
  super(props);
  this.state = {term:""};
  this.inputChangeHandler = this.inputChangeHandler.bind(this);
  this.onSubmitHandler = this.onSubmitHandler.bind(this);
}

inputChangeHandler(event){
  this.setState({term: event.target.value});
}

onSubmitHandler(event){
  event.preventDefault();
  this.props.Fetch_Weather(this.state.term);
  this.setState({term:""});
}
  render(){
    return(
      <form className='input-group' onSubmit={this.onSubmitHandler}>
        <input
        type="text"
        className="form-control"
        placeholder="Search for city Weather Forecast"
        value={this.state.term}
        onChange={this.inputChangeHandler}/>
        <span className='input-group-btn'>
         <button type="submit" className="btn btn-secondary">Search</button>
         </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch)
{
  return bindActionCreators({Fetch_Weather :Fetch_Weather}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
