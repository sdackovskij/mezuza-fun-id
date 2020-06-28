import React from "react";
import cityMapImg from "../img/map/cityMap.png";
import "./CityMap.css";

export default class CityMap extends React.Component {
  render() {
    return (
      <div>
        <img className="mapWrapper" src={cityMapImg} alt="map" />
        <div onClick={() => this.props.showLocation("government")}  className="link_gov"></div>
        <div onClick={() => this.props.showLocation("mall")}  className="link_mall"></div>
        <div onClick={() => this.props.showLocation("hospital")} className="link_hospital"></div>
        <div onClick={() => this.props.showLocation("beach")} className="link_beach"></div>
        <div onClick={() => this.props.showLocation("synagogue")} className="link_synagogue"></div>
        <div onClick={() => this.props.showLocation("cafe")} className="link_cafe"></div>
        <div onClick={() => this.props.showLocation("police")}  className="link_police"></div>
        <div onClick={() => this.props.showLocation("flat")} className="link_flat"></div>
        <div onClick={() => this.props.showLocation("station")}  className="link_station"></div>
        <div onClick={() => this.props.showLocation("park")} className="link_park"></div>
        <div onClick={() => this.props.showLocation("tv")} className="link_tv"></div>
        <div onClick={() => this.props.showLocation("museum")} className="link_museum"></div>
        <div onClick={() => this.props.showLocation("port")} className="link_port"></div> 
      </div>
    );
  }
}
