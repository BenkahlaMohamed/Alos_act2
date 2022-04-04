const express = require('express')
const app = express()
const port = 3000
const jsonDataBase = require('./db.json')
const {body, validationResult} = require('express-validator');

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

// create route http://localhost:3000/participants
app.get('/participants', (req, res) => {
    res.send(jsonDataBase)
})
// create route http://localhost:3000/participants/:id validate the id is a number using express validator
app.get('/participants/by_id/:id', [body('id').isNumeric()], (req, res) => {

    const id = parseInt(req.params.id)
    const participant = jsonDataBase.participants.find(participant => participant.id === id)
    // replace previous if with ternary operator
    res.status(participant ? 200 : 404).send(participant ? participant : 'Participant with id ' + id + ' not found')

})
// create route http://localhost:3000/participants//by_nom/:nom validate the name is a string using express validator
app.get('/participants/by_nom/:nom', [body('nom').isString()], (req, res) => {

    const nom = req.params.nom.toLowerCase().trim()
    const participant = jsonDataBase.participants.find(participant => participant.nom.toLowerCase().trim() === nom)
    // replace previous if with ternary operator
    res.status(participant ? 200 : 404).send(participant ? participant : 'Participant with nom ' + nom + ' not found')

})
// create route http://localhost:3000/participants/by_prenom/:prenom validate the prenom is a string using express validator
app.get('/participants/by_prenom/:prenom', [body('prenom').isString()], (req, res) => {

    const prenom = req.params.prenom.toLowerCase().trim()
    const participant = jsonDataBase.participants.find(participant => participant.prenom.toLowerCase().trim() === prenom)
    // replace previous if with ternary operator
    res.status(participant ? 200 : 404).send(participant ? participant : 'Participant with prenom ' + prenom + ' not found')

})
