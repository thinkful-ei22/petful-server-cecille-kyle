const express = require('express');
const router = express.Router();

const catsArray = [
    {
        imageURL:'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg',
        imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
        name: 'Fluffy',
        sex: 'Female',
        age: 2,
        breed: 'Bengal',
        story: 'Thrown on the street'
    },
    {
        imageURL: 'http://www.testcat1imageURL.com/',
        imageDescription: 'Test Cat 1 Description',
        name: 'TestCat1',
        sex: 'TestSex1',
        age: 1,
        breed: 'TestBreed1',
        story: 'TestStory1'
    }
];

const dogsArray = [
  {
      imageURL: 'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
      imageDescription: 'A smiling golden-brown golden retreiver listening to music.',
      name: 'Zeus',
      sex: 'Male',
      age: 3,
      breed: 'Golden Retriever',
      story: 'Owner Passed away'
  },
  {
      imageURL: 'http://www.testdog2imageURL.com/',
      imageDescription: 'Test Dog 1 Description',
      name: 'TestDog1',
      sex: 'TestSex1',
      age: 1,
      breed: 'TestBreed1',
      story: 'TestStory1'
  }
];

router.use(express.json());

router.get('/cats', (req, res, next) => {
    return res.json(catsArray[0]);
});

router.get('/dogs', (req, res, next) => {
    return res.json(dogsArray[0]);
})

router.delete('/cats/delete', (req, res, next) => {
    catsArray.pop();
    return res.sendStatus(204);
})

router.delete('/dogs/delete', (req, res, next) => {
    return res.sendStatus(204);
})

module.exports = router;
