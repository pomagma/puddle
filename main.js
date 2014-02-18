var path = require('path');
var _ = require('underscore');
var express = require('express');
var corpus = require('./lib/corpus');
var analyst = require('pomagma').analyst();

var app = express();
app.use(express.bodyParser());

app.use('/', express.static(path.join(__dirname, 'public'))); // HACK for index
app.use('/static', express.static(path.join(__dirname, 'public')));

app.get('/corpus/lines', function (req, res) {
  res.send({'data': corpus.findAll()});
});

app.get('/corpus/line/:id', function (req, res) {
  console.log('GET line ' + req.params.id);
  res.send({'data': corpus.findOne(id)});
});

app.post('/corpus/line', function (req, res) {
  console.log('POST ' + JSON.stringify(req.body));
  var line = req.body;
  var statement = {
    'name': line.name,
    'code': line.code
  };
  var id = corpus.create(statement);
  res.send({'id': id});
});

app.put('/corpus/line/:id', function (req, res) {
  console.log('PUT line ' + req.params.id + ': ' + JSON.stringify(req.body));
  corpus.update(req.params.id, req.body);
  res.send(200);
});

app.delete('/corpus/line/:id', function (req, res) {
  console.log('DELETE line ' + req.params.id);
  corpus.remove(req.params.id);
  res.send(200);
});

app.get('/corpus/validities', function (req, res) {
  var lines = corpus.findAll();
  analyst.validateCorpus(lines, function(validities){
    assert.equal(validities.length, lines.length);
    validities = _.zip(lines, validitites).forEach(function(pair){
      validity = pair[1];
      validity.id = pair[0].id;
      return validity;
    });
    res.send({'data': validitites});
  });
});
corpus.load();

process.on('SIGINT', function() {
  analyst.close();
  corpus.dump();
  process.exit();
});

app.listen(process.env.PUDDLE_PORT || 34934);
