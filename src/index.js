const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const Task = require('./models/task')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.post('/user', (req, res) => {
	const user = new User(req.body)

	user.save()
		.then((currentUser) => {
			res.status(201).send(currentUser)
		})
		.catch((error) => {
			res.status(400).send(error)
		})
})

app.post('/tasks', (req, res) => {
	const task = new Task(req.body)

	task.save()
		.then((currentTask) => {
			res.status(201).send(currentTask)
		})
		.catch((error) => {
			res.status(400).send(error)
		})
})

app.listen(port, () => {
	console.log('Server is up on port ' + port)
})
