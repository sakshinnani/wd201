// this is todo.js
const todoList = () => {
    all = []
    const add = (todoItem) => {
      all.push(todoItem)
    }
    const markAsComplete = (index) => {
      all[index].completed = true
    }
  
    const overdue = () => {
      // Write the date check condition here and return the array
      // of overdue items accordingly.
      let todaysdate = new Date().toISOString().split('T')[0]
      return all.filter(itemlist => itemlist.dueDate < todaysdate && !itemlist.completed)
    }
  
    const dueToday = () => {
      // Write the date check condition here and return the array
      // of todo items that are due today accordingly.
      let todaysdate = new Date().toISOString().split('T')[0]
      return all.filter(itemlist => itemlist.dueDate === todaysdate && !itemlist.completed || itemlist. completed)
    }
  
    const dueLater = () => {
      // Write the date check condition here and return the array
      // of todo items that are due later accordingly.
      let todaysdate = new Date().toISOString().split('T')[0]
    return all.filter(itemlist => itemlist.dueDate > todaysdate && !itemlist.completed)
    }
  
    const toDisplayableList = (list) => {
      // Format the To-Do list here, and return the output string
      // as per the format given above.
      let console = ''
    for (let i = 0; i < list.length; i++) {
      let itemoflist= list[i]
      let check = (itemoflist) =>{
        if(itemoflist.completed == true){return '[x]'}
        if(itemoflist.completed == false){return '[ ]'}
        return '0'
      }
      let duedate = (itemoflist) =>{
        let today = new Date().toISOString().split('T')[0]
        if (itemoflist.dueDate == today){return ' '}
        else {return itemoflist.dueDate}
      }
      let checkbox = check(itemoflist)
      let title = itemoflist.title
      let dueDate = duedate(itemoflist)
      console += checkbox +' '+title+' '+dueDate+'\n'
    }
    return console
    }
  
    return {
      all,
      add,
      markAsComplete,
      overdue,
      dueToday,
      dueLater,
      toDisplayableList
    };
  };
  
  // ####################################### #
  // DO NOT CHANGE ANYTHING BELOW THIS LINE. #
  // ####################################### #
  
  const todos = todoList();
  
  const formattedDate = d => {
    return d.toISOString().split("T")[0]
  }
  
  var dateToday = new Date()
  const today = formattedDate(dateToday)
  const yesterday = formattedDate(
    new Date(new Date().setDate(dateToday.getDate() - 1))
  )
  const tomorrow = formattedDate(
    new Date(new Date().setDate(dateToday.getDate() + 1))
  )
  
  todos.add({ title: 'Submit assignment', dueDate: yesterday, completed: false })
  todos.add({ title: 'Pay rent', dueDate: today, completed: true })
  todos.add({ title: 'Service Vehicle', dueDate: today, completed: false })
  todos.add({ title: 'File taxes', dueDate: tomorrow, completed: false })
  todos.add({ title: 'Pay electric bill', dueDate: tomorrow, completed: false })
  
  console.log("My Todo-list\n")
  
  console.log("Overdue")
  var overdues = todos.overdue()
  var formattedOverdues = todos.toDisplayableList(overdues)
  console.log(formattedOverdues)
  console.log("")
  
  console.log("Due Today")
  let itemsDueToday = todos.dueToday()
  let formattedItemsDueToday = todos.toDisplayableList(itemsDueToday)
  console.log(formattedItemsDueToday)
 console.log("")
  
  console.log("Due Later")
  let itemsDueLater = todos.dueLater()
  let formattedItemsDueLater = todos.toDisplayableList(itemsDueLater)
  console.log(formattedItemsDueLater)
  console.log("\n")
