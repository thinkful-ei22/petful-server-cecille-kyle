const express = require('express');
const router = express.Router();
const Queue = require('../queue.js');

const catQueue = new Queue();
const dogQueue = new Queue();

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
})

router.delete('/cats', (req, res, next) => {
    catQueue.dequeue();
    return res.sendStatus(204);
})

router.delete('/dogs', (req, res, next) => {
    dogQueue.dequeue();
    return res.sendStatus(204);
})

module.exports = router;
