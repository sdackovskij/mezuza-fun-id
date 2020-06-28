import React from "react";
import "./LivingRoom.css";
import { Tooltip, Modal } from 'antd';
import table from '../img/flat/table.webp';
import tv from "../img/flat/tv.png";


 export default class LivingRoom extends React.Component {
                  state = { visibleNews: false, visibleMission: false };

                  showNews = () => {
                    this.setState({
                      visibleNews: true,
                    });
                  };

                  showMission = () => {
                    this.setState({
                      visibleMission: true,
                    });
                  };

                  handleCancel = (e) => {
                    console.log(e);
                    this.setState({
                      visibleNews: false,
                      visibleMission: false
                    });
                  };

                  render() {
                    return (
                      <div className="living-room--wrapper">
                        <Tooltip title="Информация по миссии">
                          <img
                            className="living-room--table"
                            src={table}
                            alt="table"
                            onClick={this.showMission}
                          />
                        </Tooltip>
                        <Tooltip title="Посмотреть новости">
                          <img
                            className="living-room--tv"
                            src={tv}
                            alt="tv"
                            onClick={this.showNews}
                          />
                        </Tooltip>
                        <Modal
                          title="Миссия на сегодня"
                          visible={this.state.visibleMission}
                          onOk={this.handleCancel}
                          onCancel={this.handleCancel}
                          className="mission"
                          footer={null}
                        >
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborumLorem ipsum dolor
                            sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna
                            aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum
                          </p>
                        </Modal>
                        <Modal
                          visible={this.state.visibleNews}
                          onOk={this.handleCancel}
                          onCancel={this.handleCancel}
                          destroyOnClose
                          closable={false}
                          footer={null}
                        >
                          <iframe
                            width="800"
                            height="450"
                            src="https://www.youtube-nocookie.com/embed/wO4d3b4Qp7c?controls=0"
                            frameborder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                          ></iframe>
                        </Modal>
                      </div>
                    );
                  }
                }