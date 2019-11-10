var express = require('express');
var path = require('path');
const history = require('connect-history-api-fallback')
var serveStatic = require('serve-static');
app = express();
const staticmiddleware = (serveStatic(__dirname + "/dist"));
app.use(staticmiddleware);
app.use(history({
    disableDotRule: true,
    verbose: true
}));
app.use(staticmiddleware)
app.use(function(req, res, next){
    res.status(404);
    res.send({ error: 'Not found' });
});
var port = process.env.PORT || 8080;
app.listen(port);
console.log('Server started '+ port);