import React, { useContext } from "react";
import "./sidebar.css";
import { assets } from "../../assets/assets";
import { useState } from "react";
import { Context } from "../../context/Context";

const Sidebar = () => {
  const [extended, setExtended] = useState(false);
  const { onSent, previousPrompt, setRecentPrompt, newChat } = useContext(Context);

  const loadPrompt = async(prompt) =>{
    setRecentPrompt(prompt);
    await onSent(prompt)
  }

  return (
    <div className="sideBar">
      <div className="top">
        <img
          onClick={() => setExtended((prev) => !prev)}
          className="menu"
          src={assets.menu_icon}
        />
        <div onClick={() => newChat()} className="newChat">
          <img src={assets.plus_icon} />
          {extended ? <p>New Chat</p> : null}
        </div>

        {extended ? (
          <div className="recent">
            <p className="recent-title">Recent</p>
            {Array.isArray(previousPrompt) && previousPrompt.length > 0 ? (
              previousPrompt.map((item, index) => (
                <div  onClick={() => loadPrompt(item)}  className="recent-entry" key={index}>
                  <img src={assets.message_icon} alt="Message Icon" />
                  <p>{item.slice(0, 18)} ...</p>
                </div>
              ))
            ) : (
              <p>No recent prompts</p>
            )}
          </div>
        ) : null}
      </div>
      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={assets.question_icon} />
          {extended ? <p>Help</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.history_icon} />
          {extended ? <p>Activity</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon} />
          {extended ? <p>Settings</p> : null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
