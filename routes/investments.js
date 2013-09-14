exports.germanResidential = function(req, res){
  res.render('index', { title: 'German Residential' });
};

exports.studentHousing = function(req, res){
  res.render('student-housing', { title: 'Student Housing' });
};

exports.commercial = function(req, res){
  res.render('index', { title: 'Commercial' });
};

