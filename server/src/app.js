const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

const mongoCon = require('./mongo');
var db = mongoCon.connect();

var Slot = require("../models/slot");

app.get('/slots', (req, res) => {
  Slot.find({}, 'fname lname phone date time', function (error, slots) {
	  if (error) { console.error(error); }
	  res.send({
			slots: slots
		})
	}).sort({_id:-1})
})

app.get('/slot/:id', (req, res) => {
	var db = req.db;
	Slot.findById(req.params.id, 'fname lname phone date time', function (error, slot) {
	  if (error) { console.error(error); }
	  res.send(slot)
	})
})

app.post('/add', (req, res) => {
	var db = req.db;
	var fname = req.body.fname;
	var lname = req.body.lname;
	var phone = req.body.phone;
	var date = req.body.date;
	var time = req.body.time;
	var new_slot = new Slot({
		fname: fname,
		lname: lname,
		phone: phone,
		date: date,
		time: time
	})

	new_slot.save(function (error) {
		if (error) {
			console.log(error)
		}
		res.send({
			success: true
		})
	})
})

app.put('/slots/:id', (req, res) => {
	var db = req.db;
	Slot.findById(req.params.id, 'fname lname phone date time', function (error, slot) {
	  if (error) { console.error(error); }
	  slot.fname = req.body.fname
	  slot.lname = req.body.lname
	  slot.phone = req.body.phone
	  slot.date = req.body.date
	  slot.time = req.body.time
	  slot.save(function (error) {
			if (error) {
				console.log(error)
			}
			res.send({
				success: true
			})
		})
	})
})

app.delete('/slots/:id', (req, res) => {
	var db = req.db;
	Slot.remove({
		_id: req.params.id
	}, function(err, slot){
		if (err)
			res.send(err)
		res.send({
			success: true
		})
	})
})

app.listen(process.env.PORT || 8000)
