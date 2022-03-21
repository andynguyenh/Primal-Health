const firebase = require('../database');
// const firestore = firebase.firestore();


// Users

// Suppliers
const getSuppliers = (req, res) => {
  firebase.collection('suppliers').get()
  .then((data) => {
    // console.log('suppliers data: ', data)
    let suppliers = [];
    data.forEach(doc => {
      suppliers.push({
          supplier_id: doc.id,
          name: doc.data().name,
          description: doc.data().description,
          logo_url: doc.data().logo_url,
          food_item: doc.data().food_item,
          item_pic_url: doc.data().item_pic_url,
          price: doc.data().price
      })
    })
    res.send(suppliers);
  })
  .catch((err) => {
    console.error(err);
    res.send(err);
  })
}

// FAQs
const addFAQ = (req, res) => {
  let newFAQ = {
    question: req.body.question,
    answer: req.body.answer
  }
  firebase.collection('faqs').add(newFAQ)
  .then((doc) => {
    // let data = newFAQ;
    // data.id = doc.id;
    res.send('record successfully saved');
  })
  .catch(err => {
    res.send(err);
  })
}

const getFAQs = (req, res) => {
  firebase.collection('faqs').get()
  .then((data) => {
    let faqs = [];
    data.forEach(doc => {
      faqs.push({
          faqId: doc.id,
          question: doc.data().question,
          answer: doc.data().answer
      })
    })
    res.send(faqs);
  })
  .catch((err) => {
    console.error(err);
    res.send(err);
  });
}

// Example Todo
// const getTodos = (req, res) => {
//   firebase.collection('todos').get()
//   .then((data) => {
//     let todos = [];
//     data.forEach(doc => {
//       todos.push({
//           todoId: doc.id,
//           title: doc.data().title,
//           body: doc.data().body,
//           createdAt: doc.data().createdAt,
//       })
//     })
//     res.send(todos);
//   })
//   .catch((err) => {
//     console.error(err);
//     res.send(err);
//   });
// }



module.exports = {
  getSuppliers: getSuppliers,
  addFAQ: addFAQ,
  getFAQs: getFAQs
}