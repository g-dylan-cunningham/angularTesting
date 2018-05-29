exports.index = function(req, res){
  res.render('index', { title: 'Express' });
  console.log("in routes index")
};

// /** serve jade enabled partials */
// exports.partials = function(req, res) {
//     res.render('partials/' + req.params.name);
// };
