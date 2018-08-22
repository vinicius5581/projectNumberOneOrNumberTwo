exports.auth_login = (req, res) => {
  // res.render("login", { user: req.user });
};

exports.auth_logout = (req, res) => {
  // handle with passport
  req.logout();
  res.redirect("/");
};

exports.auth_google_redirect = (req, res) => {
  // res.send(req.user);
  res.redirect("/profile");
};
