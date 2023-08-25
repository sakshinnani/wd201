const todoList = () => {
    const all = [];
    const add = (todoItem) => {
      all.push(todoItem);
    };
    const markAsComplete = (index) => {
      all[index].completed = true;
    };
  
    const overdue = () => {
      // Write the date check condition here and return the array
      // of overdue items accordingly.
      const today = new Date().toISOString().split("T")[0];
      const overdueItems = all.filter((todo) => todo.dueDate < today);
      return overdueItems;
    };
  
    const dueToday = () => {
      // Write the date check condition here and return the array
      // of todo items that are due today accordingly.
      const today = new Date().toISOString.split("T")[0];
      const itemsDueToday =all.filter((todo) =>todo.dueDate === today);
      return itemsDueToday;
    };
  
    const dueLater = () => {
      // Write the date check condition here and return the array
      // of todo items that are due later accordingly.
      const today = new Date().toISOString.split("T")[0];
      const itemsDueLater =all.filter((todo) =>todo.dueDate > today);
      return itemsDueLater;
      };
  
    const toDisplayableList = (list) => {
      // Format the To-Do list here, and return the output string
      // as per the format given above.
      let displayableList ="";
      for (let i=0;i< list.length;i++){
        const todo =list[i];
        const status = todo.completed ? "x" : "";
      if (i === list.length -1){
        // eslint-disable-next-line no-undef
        if(todo.dueDate === today){
          displayableList += `[${status}] ${todo.title}`;
        }else {
          displayableList += `[${status}] ${todo.title} ${todo.dueDate}`;
        }
      }else {
        // eslint-disable-next-line no-undef
        if (todo.dueDate === today){
          displayableList += `[${status}] ${todo.title}`;
        }else{
          displayableList += `[${status}] ${todo.title} ${todo.dueDate}`;
        }
      }
      }
      return displayableList;
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

// eslint-disable-next-line no-undef
export default todoList;