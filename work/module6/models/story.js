const { DateTime } = require('luxon');
const { v4: uuidv4 } = require('uuid');

const stories = [
    {
        id: '1',
        title: 'A funny story',
        content:' yadda yadda yadda',
        author: 'troger43',
        createdAt: DateTime.now().toLocaleString(DateTime.DATETIME_MED_WITH_WEEKDAY)
    },
 
    {
        id: '2',
        title: 'It is rainning',
        content:" talking bout nuttin",
        author: 'toger43',  // year, month, day, hour(24), min 
        createdAT: DateTime.local(2022, 2, 22, 02, 22).toLocaleString(DateTime.DATETIME_MED_WITH_WEEKDAY)
        //createdAt: DateTime.now().toLocaleString(DateTime.DATETIME_MED_WITH_WEEKDAY)
    
    }
];

exports.find = function(){
    return stories;
}
/** Alternaive to Below
 *  exports.findByID = function(id) {
 *      return stories.find(story=>story.id ===id);
 *  }
 */

exports.findByID = id => stories.find(story=>story.id === id);

exports.save = function(story) {
    story.id = uuidv4();
    story.CreatedAt = DateTime.now().toLocaleString(DateTime.DATETIME_MED_WITH_WEEKDAY);
    stories.push(story);
};

exports.updateByID = function(id, newStory){
    let story = stories.find(story=>story.id === id);
    if(story) {
    story.title = newStory.title;
    story.content = newStory.content;
        return true;
    } else {
        return false;

}
};
exports.deleteByID = function(id) {
    let index = stories.findIndex(story => story.id === id);
    if (undes !== -1){
        stories.splice(index,1);
        return true;
    } else {
        return false;
    }
}