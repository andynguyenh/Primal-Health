const firebase = require('../database');
// const firestore = firebase.firestore();

const getTodos = (req, res) => {
  firebase.collection('todos').get()
  .then((data) => {
    let todos = [];
    data.forEach(doc => {
      todos.push({
          todoId: doc.id,
          title: doc.data().title,
          body: doc.data().body,
          createdAt: doc.data().createdAt,
      })
    })
    res.send(todos);
  })
  .catch((err) => {
    console.error(err);
    res.send(err);
  });
}

// const getTodos2 = () => {
//   return
// }

module.exports = {
  getTodos: getTodos
}