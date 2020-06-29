import React from 'react';
import './App.css';
import Auth from "./Auth/Auth";
import LivingRoom from "./LivingRoom/LivingRoom";
import Beach from "./Beach/Beach";
import CityMap  from "./CityMap/CityMap";
import Park from "./Park/Park";
import Mall from "./Mall/Mall";
import Station from "./Station/Station";
import Museum from "./Museum/Museum";
import Port from "./Port/Port";
import Hospital from "./Hospital/Hospital";
import Police from "./Police/Police"
import Cafe from "./Cafe/Cafe"
import Government from "./Government/Government"
import Tv from "./Tv/Tv"
import Synagogue from "./Synagogue/Synagogue"
import { Button } from "antd";
import { ArrowLeftOutlined  } from "@ant-design/icons";


export default class App extends React.Component {
                 state = {
                   auth: true,
                   map: false,
                   flat: false,
                   cafe: false,
                   tv: false,
                   synagogue: false,
                   government: false,
                   police: false,
                   hospital: false,
                   port: false,
                   museum: false,
                   station: false,
                   mall: false,
                   park: false,
                   beach: false,
                 };

                 showMap = () => {
                   this.setState({
                     map: true,
                     auth: false,
                     flat: false,
                     cafe: false,
                     tv: false,
                     synagogue: false,
                     government: false,
                     police: false,
                     hospital: false,
                     port: false,
                     museum: false,
                     station: false,
                     mall: false,
                     park: false,
                     beach: false,
                   }); 
                 };

                 showLocation = (location) => {
                   switch (location) {
                     case "flat":
                       this.setState({
                         map: false,
                         flat: true,
                       });
                       break;
                     case "park":
                       this.setState({
                         map: false,
                         park: true,
                       });
                       break;
                     case "beach":
                       this.setState({
                         map: false,
                         beach: true,
                       });
                       break;
                     case "mall":
                       this.setState({
                         map: false,
                         mall: true,
                       });
                       break;
                     case "station":
                       this.setState({
                         map: false,
                         station: true,
                       });
                       break;
                     case "museum":
                       this.setState({
                         map: false,
                         museum: true,
                       });
                       break;
                     case "port":
                       this.setState({
                         map: false,
                         port: true,
                       });
                       break;
                     case "hospital":
                       this.setState({
                         map: false,
                         hospital: true,
                       });
                       break;
                     case "police":
                       this.setState({
                         map: false,
                         police: true,
                       });
                       break;
                     case "government":
                       this.setState({
                         map: false,
                         government: true,
                       });
                       break;
                     case "synagogue":
                       this.setState({
                         map: false,
                         synagogue: true,
                       });
                       break;
                     case "tv":
                       this.setState({
                         map: false,
                         tv: true,
                       });
                       break;
                     case "cafe":
                       this.setState({
                         map: false,
                         cafe: true,
                       });
                       break;

                     default:
                   }
                 };

                 render() {
                   return (
                     <div className="App">
                       {this.state.auth ? (
                         <Auth showMap={this.showMap} />
                       ) : null}
                       {this.state.map ? (
                         <CityMap showLocation={this.showLocation} />
                       ) : null}
                       {this.state.flat ? <LivingRoom /> : null}
                       {this.state.cafe ? <Cafe /> : null}
                       {this.state.tv ? <Tv /> : null}
                       {this.state.synagogue ? <Synagogue /> : null}
                       {this.state.government ? <Government /> : null}
                       {this.state.police ? <Police /> : null}
                       {this.state.hospital ? <Hospital /> : null}
                       {this.state.port ? <Port /> : null}
                       {this.state.museum ? <Museum /> : null}
                       {this.state.station ? <Station /> : null}
                       {this.state.mall ? <Mall /> : null}
                       {this.state.park ? <Park /> : null}
                       {this.state.beach ? <Beach /> : null}
                       {this.state.map || this.state.auth ? null : (
                         <Button
                           className="exitButton"
                           type="danger"
                           icon={<ArrowLeftOutlined />}
                           onClick={this.showMap}
                         >
                           Карта
                         </Button>
                       )}
                     </div>
                   );
                 }
               }
                         