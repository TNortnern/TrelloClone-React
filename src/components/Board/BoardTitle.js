import React, { useState } from 'react'
import EditingTitle from './EditingTitle';

const BoardTitle = () => {
    const [title, setTitle] = useState('.NetReactTrelloClone')
    const [editingTitle, setEditingTitle] = useState(false);
    const renderTitle = () => {
        if (editingTitle) {
          return (
            <EditingTitle
              editingTitle={editingTitle}
              setEditingTitle={setEditingTitle}
              title={title}
              setTitle={setTitle}
            />
          );
        }
        return <span>{title}</span>;
      };
    return (
        <div onClick={() => setEditingTitle(true)} className="board-base-title">
        {renderTitle()}
      </div>
    );
}

export default BoardTitle;