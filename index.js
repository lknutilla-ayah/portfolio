var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var path = require('path');
var swig = require('swig');

var layout_tpl = swig.compileFile('views/layout.html');
var header_tpl = swig.compileFile('views/header_tpl.html');
var header_content = header_tpl({});
var layout = layout_tpl(
{
    header: header_content
});

// /*******************************************************
//  *
//  *                  begin everything
//  *
//  *******************************************************/
startListen();
app.use(express.static(path.join(__dirname, 'static')));
app.engine('html', swig.renderFile);

app.set('view engine', 'html');
app.set('views', __dirname + '/views');


// /*******************************************************
//  *
//  *                  routes
//  *
//  *******************************************************/


app.get('/', function (req, res) {
    res.render('index', {
        header: header_content
    });
});

app.get('/sketchbook', function (req, res) {
    res.render('sketchbook', {
        header: header_content
    });
});

app.get('/contact', function (req, res) {
    res.render('contact', {
        header: header_content
    });
});
/*******************************************************
 *
 *                  utility functions
 *
 *******************************************************/

function startListen() {
    var port = Number(process.env.PORT || 5000);
    http.listen(port, function() {
    console.log('listening on *:' + port);
    });
}



