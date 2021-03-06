const express = require('express');
const router = express.Router();
const Queue = require('../queue.js');

const catQueue = new Queue();
const dogQueue = new Queue();

catQueue.enqueue({
  imageURL:'https://static.pexels.com/photos/20787/pexels-photo.jpg',
  imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
  name: 'Tina',
  sex: 'Female',
  age: 3,
  breed: 'Siamese',
  story: 'Abandoned by previous owner.'
});

catQueue.enqueue({
  imageURL:'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg',
  imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
  name: 'Thunder',
  sex: 'Male',
  age: 1,
  breed: 'Tabby',
  story: 'Owner moved to another country.'
});

catQueue.enqueue({
  imageURL:'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg',
  imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
  name: 'Fluffy',
  sex: 'Female',
  age: 2,
  breed: 'Bengal',
  story: 'Thrown on the street'
});

dogQueue.enqueue({
  imageURL: 'http://img.freepik.com/free-photo/husky-breed-dog-with-tongue-out_1187-1500.jpg?size=338&ext=jpg',
  imageDescription: 'A smiling golden-brown golden retreiver listening to music.',
  name: 'June',
  sex: 'Female',
  age: 1,
  breed: 'Husky',
  story: 'Rejected by mother'
});

dogQueue.enqueue({
  imageURL: 'http://www.dogbreedslist.info/uploads/allimg/dog-pictures/German-Shepherd-Dog-1.jpg',
  imageDescription: 'A smiling golden-brown golden retreiver listening to music.',
  name: 'Tornado',
  sex: 'Female',
  age: 5,
  breed: 'German Shepherd',
  story: 'Owner Moved to a small apartment'
});

dogQueue.enqueue({
  imageURL: 'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
  imageDescription: 'A smiling golden-brown golden retreiver listening to music.',
  name: 'Zeus',
  sex: 'Male',
  age: 3,
  breed: 'Golden Retriever',
  story: 'Owner Passed away'
});

router.use(express.json());

router.get('/cats', (req, res, next) => {
  return res.json(catQueue.peek());
});

router.get('/dogs', (req, res, next) => {
  return res.json(dogQueue.peek());
});

router.delete('/cats', (req, res, next) => {
  const cat = catQueue.dequeue();
  catQueue.enqueue(cat);
  return res.sendStatus(204);
});

router.delete('/dogs', (req, res, next) => {
  const dog = dogQueue.dequeue();
  dogQueue.enqueue(dog);
  return res.sendStatus(204);
});

module.exports = router;
