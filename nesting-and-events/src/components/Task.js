import React from 'react';
import PropTypes from 'prop-types';

function Task(props) { 
  
  function toggleComplete(id){
    props.handleClick(id)
    console.log(`Task with the id '${id}' was clicked`);
  }

  return (
      <div className={"task"+(props.isComplete?" checked":"")} >
        <span>{props.title}</span>
        <span className="status" onClick={() => toggleComplete(props.id)}>{props.isComplete ? "✔️":"🔘"}</span>
      </div>
  );
}


Task.propTypes = {

handleClick: PropTypes.func,
  title: PropTypes.string,
  isComplete: PropTypes.bool,
  id: PropTypes.string, 
};
  

export default Task