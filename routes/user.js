
/*
 * GET users listing.
 */

exports.ulist = function(req, res){
  res.send("respond with a resource");
};

exports.uadd = function(req, res){
  res.send("add");
};

exports.uedit = function(req, res){
  res.send("edit");
};

exports.udelete = function(req, res){
  res.send("delete");
};

exports.uview = function(req, res){
  res.send("delete");
};


exports.login = function (req, res) {
	res.render('login', { user: req.user, message: ''});
}	

exports.loginHandler = function (req, res, next) {	
  passport.authenticate('local', function(err, user, info) {
    if (err) { return next(err); }

    if (!user) { 
      return res.render('login', { user: '', message: "Invalid username or password."});
    }
    req.logIn(user, function(err) {

      if (err) { return next(err); }
      return res.redirect('/');
    });
  })(req, res, next);
}