
Meteor.publish("messages", function() {
  return messages.find();
});

messages.allow({
  insert: function(){return true},
  update: function(){return true},
  remove: function(){return true}
});

