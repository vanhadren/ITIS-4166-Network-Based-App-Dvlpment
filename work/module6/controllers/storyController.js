const model = require('../models/story');

exports.index = ('/', (req, res) => {
   // res.send(model.find());
   let stories = model.find();
   res.render('./story/index', {stories});
});

exports.new =  (req,res) =>{
    res.render('./story/new');
};

exports.create = ('/', (req,res) => {
   // res.send('created a new story');
   let story = req.body;
   model.save(story);
   res.redirect('/stories');

})

exports.show = ('/:id', (req, res) => {
    let id = req.params.id;
    let story = model.findByID(id);
    if(story){
        res.render('./story/show', {story});
    }
        res.status(404).send("Cannont find story with id: "+id);

});

exports.edit = ('/:id/edit', (req, res) => {
   // res.send('send the edit form');
   let id = req.params.id;
   let story = model.findByID(id);
   if(story){
       res.render('./story/edit', {story});
   } else {
            res.status(404).send("cannot find story with id: " + id);
        }
   
});

exports.update = ('/:id/', (req, res) => {
  //  res.send('update story with ID: ' + req.params.id);
    let story = req.body;
    let id = req.params.id;

   if(model.updateByID(id, story)){
       res.redirect('/stories/'+id);
   }else{
       res.status(404).send('cannon not find story with id: '+id);
   };
});

exports.delete = ('/:id', (req, res) => {
    //res.send('Delete story with ID: ' + req.params.id);
    let id = req.params.id;
    if(model.deleteByID(id))
        res.redirect('/stories');
    else
        res.status(404).send('cannont find story with id :' +id);
});
