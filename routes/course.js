var express = require('express');
var router = express.Router();

models = require("../models");

/**
 * @api {get} /api/course/ Get All Courses
 * @apiName GetCourses
 * @apiGroup Course
 *
 * @apiUse InternalError
 *
 * @apiSuccess {object[]} courses The courses in the database
 * @apiSuccess {Number} courses.id A unique number to identify a course object
 * @apiSuccess {String} courses.name The name of the course
 * @apiSuccess {object[]} courses.food The food associated with the course
 * @apiSuccess {Number} courses.food.id A unique number to identify a food object
 * @apiSuccess {String} courses.food.name The name of the food
 * @apiSuccess {Number} courses.food.price The cost of the food in pence
 *
 * @apiSuccessExample SingleCourse
 * {
  "courses": [
    {
      "id": 1,
      "name": "Week 1",
      "createdAt": "2016-08-25T05:08:54.000Z",
      "updatedAt": "2016-08-25T05:08:54.000Z",
      "Food": [
        {
          "id": 1,
          "name": "Pasta",
          "price": 150,
          "createdAt": "2016-08-25T05:08:54.000Z",
          "updatedAt": "2016-08-25T05:08:54.000Z"
        }
      ]
    }
  ]
}
 */
router.get('/', function (req, res) {
  models.Course.findAll({
    include: [{
      model: models.Food
    }]
  }).then(function(courses) {
    res.send({ courses: courses });
  }).catch(function (err) {
    console.error(err);
    res.send("Internal Server Error")
  });
});

module.exports = router;
