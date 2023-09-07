/* eslint-disable no-undef */
const todoList = () => {
  let all = [];
  const add = (todoItem) => {
    all.push(todoItem);
  };
  const markAsComplete = (index) => {
    all[index].completed = true;
  };

  const overdue = () => {
    let todaysdate = new Date().toISOString().split("T")[0];
    return all.filter((itemlist) => itemlist.dueDate < todaysdate);
  };

  const dueToday = () => {
    let todaysdate = new Date().toISOString().split("T")[0];
    return all.filter((itemlist) => itemlist.dueDate === todaysdate);
  };

  const dueLater = () => {
    let todaysdate = new Date().toISOString().split("T")[0];
    return all.filter((item) => item.dueDate > todaysdate);
  };
  const toDisplayableList = (list) => {
    return list
      .map(
        (todo) =>
          `${todo.completed ? "[x]" : "[ ]"} ${todo.title} ${
            todo.dueDate == todaysdate ? "" : todo.dueDate
          }`,
      )
      .join("\n");
  };
  return {
    all,
    add,
    markAsComplete,
    overdue,
    dueToday,
    dueLater,
    toDisplayableList,
  };
};

module.exports = todoList;
