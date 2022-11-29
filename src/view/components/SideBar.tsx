import React, { Component } from "react";
import '../style/components/sidebar.scss';

export default class SideBar extends Component {
  render() {
    return (
      <div className="sidebar">
        <div className="vertical-menu pt-2">
          <ul>
            <li>
              <img
                src="https://cdn.glitch.com/af45ea57-cc17-431c-a29e-191393077cfe%2Ficons8-menu-rounded-50.png?v=1596541736150"
                alt=""
              />
              <span>All unreads</span>
            </li>
            <li>
              <img
                src="https://cdn.glitch.com/af45ea57-cc17-431c-a29e-191393077cfe%2Fconversation.svg?v=1596542126344"
                alt=""
              />
              <span>Threads</span>
            </li>
            <li>
              <img
                src="https://cdn.glitch.com/af45ea57-cc17-431c-a29e-191393077cfe%2Fcopy.svg?v=1596543073128"
                alt=""
              />
              <span>Drafts</span>
            </li>
            <li>
              <img
                src="https://cdn.glitch.com/af45ea57-cc17-431c-a29e-191393077cfe%2Fbookmark.svg?v=1596542475338"
                alt=""
              />
              <span>Saved items</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
