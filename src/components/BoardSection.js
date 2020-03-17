import React from 'react';
import { Icon } from '@material-ui/core';
import { Link, withRouter } from 'react-router-dom';

const BoardSection = ({title, toggle, shown, collection, icon, location}) => {
    return (
      <div>
        <button className="navbar-container__board-panel--toggle-board-section">
          {shown ? (
            <span
              onClick={() => {
                toggle();
              }}
            >
              -
            </span>
          ) : (
            <span
              onClick={() => {
                toggle();
              }}
            >
              +
            </span>
          )}
        </button>
        <h5>
          <Icon>{icon}</Icon> {title}
        </h5>
        {shown && collection
          ? collection.map(board => (
              <Link key={board.id} to={`/board/${board.id}`} className="navbar-container__board-panel-board-section">
                <div className="navbar-container__board-panel-board-section-item">
                  <img src={board.theme} alt={board.name} />
                  <div>
                    <span className="navbar-container__board-panel-board-section-item-title">
                      {board.name}
                    </span>
                  </div>
                </div>
              </Link>
            ))
          : null}
      </div>
    );
}

export default withRouter(BoardSection);