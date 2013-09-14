exports.index = function(req, res){
  res.render('blog', { 
  	title: 'Blog',
  	posts: [
  	{
  		title: "Post 1",
  		date: "01/01/2010",
  		body: "This is some post content",
  		visible: true
  	},
  	{
  		title: "Post 2",
  		date: "01/03/2010",
  		body: "This is some post content",
  		visible: false
  	},
  	{
  		title: "Post 3",
  		date: "01/05/2010",
  		body: "This is some post content",
  		visible: true
  	}] 
  });
};