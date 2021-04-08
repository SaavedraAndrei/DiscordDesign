import { Avatar } from "@material-ui/core";
import React from "react";
import "./Message.css";

function Message() {
  return (
    <div className="message">
      <Avatar />

      <div className="message__info">
        <h4>Andrei SR</h4>
        <p>Discord Design</p>
      </div>

      <span className="message__timestamp">08/08/08</span>
    </div>
  );
}

export default Message;
