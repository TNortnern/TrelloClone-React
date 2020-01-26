import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import "../../styles/Models/Board.scss";

const EditingTitle = ({title, setTitle, setEditingTitle}) => {
    useEffect(() => {
        document.addEventListener('click', onClickOutside, true)
        return () => {
          document.removeEventListener('click', onClickOutside, true);
      };
    }, [])
    const onClickOutside = e => {
      const domNode = ReactDOM.findDOMNode(this);
      if (!domNode || !domNode.contains(e.target)) {
          console.log("clicked outside")
      }
    }
    const updateTitle = (e, newTitle) => {
        e.preventDefault();
  
        if (!newTitle === title) {
            setTitle(newTitle)
        }
        setEditingTitle(false)
    }
    return (
        <form onSubmit={(e) => updateTitle(e, title)}>
              <input className="board-name-field" type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
          </form>
    );
}

export default EditingTitle;