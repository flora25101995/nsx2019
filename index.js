const express = require('express')
const app = express()
const port = 5000

app.set('view engine', 'ejs')

app.get('/api/getlist', (req, res) => {
    res.json(['a', 'b', 'c'])
})

app.get('/', (req, res) => {
    res.render('index', {
        user: {
            name: 'Quyen'
        },
        users: ['apple', 'samsung', 'huawei']
    })
})

app.listen(port, () => {
    console.log(`Server app listening on port ${port}!`)
})