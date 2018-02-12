var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://Salim:s7m294@ds225308.mlab.com:25308/wcm2018')


//get all Tasks

router.get('/tasks', function(req, res, next){
  db.Tasks.find(function(err, tasks){
    if(err){
      res.send(err);
    }
    res.json(tasks);
  });
});

//get single task

router.get('/task/:id', function(req, res, next){
  db.Tasks.findOne({_id: mongojs.ObjectId(req.params.id)}, function(err, task){
    if(err){
      res.send(err);
    }
    res.json(task);
  });
});


//save task
router.post('/task', function(req, res, next){
  var task = req.body;

    db.Tasks.save(task, function(err, task){
      if(err){
        res.send(err);
      }
      res.json(task);
    });
});
module.exports = router;
