import React from "react";
import Checkbox from './Checkbox'

const TaskList = props => {
  const { list, setList } = props;

  const onChangeStatus = e => {
      const { name, checked } = e.target;
    const updateList = list.map(item => ({
      ...item,
      done: item.id === name ? checked : item.done
    }));
      setList(updateList);
  };
    
    const onRemoveItem = e => {
        const { name } = e.target;
        const updateList = list.filter(item => item.description !== name);
        setList(updateList)
    }
    
    const onClickSetAllDone = e => {
      const items = document.getElementsByClassName('todo__text')
      for (let i = 0; i < items.length; i++) {
        // eslint-disable-next-line no-unused-expressions
        items[i].style.color = 'green'
      }
        const updateList = list.map(item => ({
          ...item, done: true,
        }));
      setList(updateList)
    };

  const onClickSetAllUndone = e => {
      const items = document.getElementsByClassName('todo__text')
      for (let i = 0; i < items.length; i++) {
        // eslint-disable-next-line no-unused-expressions
        items[i].style.color = 'black'
      }
    const updateList = list.map(item => ({
        ...item, done: false
    }));
    setList(updateList)
    };
    
  const chk = list.map(item => (
      <Checkbox key={item.id} data={item} onChange={onChangeStatus} onRemove={onRemoveItem}/>
  ));

  return (
    <div className="todo-list">
      {list.length ? chk : "No tasks"}
      {list.length ? (
        <p>
          <button className="button blue" onClick={onClickSetAllDone}>
            Set all done
            </button>
          <button className="button blue" onClick={onClickSetAllUndone}>
            Set all undone
          </button>
        </p>
      ) : null}
    </div>
  );
};

export default TaskList;