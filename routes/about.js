//History
exports.history = function(req, res){
  res.render('index', { title: 'History' });
};

//InvestmentThemes
exports.investmentThemes = function(req, res){
  res.render('index', { title: 'Investment Themes' });
};

///Asset Management Expertise
exports.expertise = function(req, res){
  res.render('index', { title: 'Asset Management Expertise' });
};

//Track Record
exports.record = function(req, res){
  res.render('index', { title: 'Track Record' });
};
