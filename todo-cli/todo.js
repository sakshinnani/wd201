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
      for (const todoItem of list){
        const dueDate =new Date(todoItem.dueDate);
        const formattedDueDate =
        dueDate.toISOString().split("T")[0] === today
        ? "Due Today"
        : formattedDate(dueDate);
        const status = todoItem.completed ? "[x]" : "[]";
        displayableList += '${status} ${todoItem.title} - ${formattedDueDate}\n';
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
  
module.exports = todoList;
