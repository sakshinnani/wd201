const todoList = () => {
    const all = [];
    const add = (todoItem) => {
      all.push(todoItem);
    }
    const markAsComplete = (index) => {
      all[index].completed = true;
    }
  
    const overdue = () => {
      // Write the date check condition here and return the array
      // of overdue items accordingly.
      const currentDate = new Date();
      return all.filter((todoItem) => {
        const dueDate = new Date (todoItem.dueDate);
        return !todoItem.completed && dueDate < currentDate;
      });
    };
  
    const dueToday = () => {
      // Write the date check condition here and return the array
      // of todo items that are due today accordingly.
      const currentDate = new Date();
      return all.filter((todoItem)=> {
        const dueDate = new Date(todoItem.dueDate);
        return(
            !todoItem.completed &&
            dueDate.toISOString().split("T")[0] ===
            currentDate.toISOString().split("T")[0]
        );
      });
    };
  
    const dueLater = () => {
      // Write the date check condition here and return the array
      // of todo items that are due later accordingly.
        const currentDate = new Date();
        return all.filter((todoItem) => {
            const dueDate = new Date(todoItem.dueDate);
            return(
                !todoItem.completed &&
                dueDate > currentDate &&
                dueDate.toISOString().split("T")[0] !==
                currentDate.toISOString().split("T")[0]
            );
        });
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
  
  // ####################################### #
  // DO NOT CHANGE ANYTHING BELOW THIS LINE. #
  // ####################################### #
  
  const todos = todoList();
  
  const formattedDate = (d) => {
    return d.toISOString().split("T")[0];
  }
  
  var dateToday = new Date();
  const today = formattedDate(dateToday);
  const yesterday = formattedDate(
    new Date(new Date().setDate(dateToday.getDate() - 1))
  );
  const tomorrow = formattedDate(
    new Date(new Date().setDate(dateToday.getDate() + 1))
  );
  
  todos.add({ title: 'Submit assignment', dueDate: yesterday, completed: false });
  todos.add({ title: 'Pay rent', dueDate: today, completed: true });
  todos.add({ title: 'Service Vehicle', dueDate: today, completed: false });
  todos.add({ title: 'File taxes', dueDate: tomorrow, completed: false });
  todos.add({ title: 'Pay electric bill', dueDate: tomorrow, completed: false });
  
  console.log("My Todo-list\n")
