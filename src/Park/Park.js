import React from "react";
import "./Park.css";
import Man from "../img/park/man.png" 


export default class Park extends React.Component {
  state = { visibleChat: false };
  showChat = () => {
    this.setState({
      visibleChat: !this.state.visibleChat,
    });
  };


  render() {
    return (
      <div className="parkWrapper">
        <img src={Man} alt="man" className="parkMan" onClick={this.showChat} />
        {this.state.visibleChat ? (
          <div className="chatPark">
            <h2>Привет!</h2>
            <span>Помоги мне решить задачу, а я тебе скажу ответ...</span>{" "}
          </div>
        ) : null}
      </div>
    );
  }
}
