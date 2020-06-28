import React from "react";
import "./Police.css";
import Man from "../img/police/man.png"

export default class Park extends React.Component {
    state = { visibleChat: false };
    showChat = () => {
        this.setState({
            visibleChat: !this.state.visibleChat,
        });
    };


    render() {
        return <div className="policeWrapper">
            <img src={Man} alt="man" className="policeMan" onClick={this.showChat} />
            {this.state.visibleChat ? <div className="chatPolice"><h2>Привет!</h2><span>Помоги мне решить задачу, а я тебе скажу ответ...</span>  </div> : null}
        </div>
    }
}