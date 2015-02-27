
Template.body.created = function () {
  console.log("created is mine");
};

Template.body.rendered = function () {
  console.log("rendered is mine");
};

Template.body.destroyed = function () {  
  console.log("destroyed is mine");
}; 
