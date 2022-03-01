import React,{Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';


class CityList extends Component{

  renderWeather(data){
  const temps = data.list.map( item => item.main.temp);
  const pressure = data.list.map( item => item.main.pressure);
  const humidity = data.list.map( item => item.main.humidity);
    if(data.length <= 0){
      return <tr></tr>;
    }
    return (
      <tr key={data.city.name}>
        <th>{data.city.name}</th>
        <td><Chart units={temps} color="red"/></td>
        <td><Chart units={pressure} color="blue"/></td>
        <td><Chart units={humidity} color="green"/></td>
      </tr>
    );
  }
  render(){



    return (
      <table className="table table-hover">
    <thead>
      <tr>
        <th>City</th>
        <th>Temperature</th>
        <th>Pressure</th>
        <th>Humidity</th>
      </tr>
    </thead>
    <tbody>
    {this.props.weather.map(this.renderWeather)}
    </tbody>
  </table>

    );
  }
}

function mapStateToProps(state) {
  return { weather: state.weather};
  }
export default connect(mapStateToProps)(CityList);
