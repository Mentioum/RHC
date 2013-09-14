exports.index = function (Post) {
	return function (req, res) {
		Post.find({}, function (error, posts) {
			res.render('blog', {
				title: 'Blog',
				posts: posts
			});
		})
	};
};


exports.addPost = function (Post) {
	return function (req,res) {
		var post = new Post(req.body);
		post.save(function (error, post) {
			if(error || !post) {
				res.json({error: error});

			}
			else {
				res.json({post: post});
			}
		})
	};
};
