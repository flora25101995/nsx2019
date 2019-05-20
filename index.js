const express = require('express')
const app = express()
const port = 5000

app.use(express.static(__dirname + '/assets'))
app.set('view engine', 'ejs')

app.get('/api/getlist', (req, res) => {
    res.json({
        user: 
        [
            {
                name: 'Quyen',
                class: 'PQ-WEB-D002'
            },
            {
                name: 'Dung',
                class: 'PQ-WEB-D002'
            },
            {
                name: 'Thuan',
                class: 'PQ-WEB-D002'
            },
            {
                name: 'Mai',
                class: 'PQ-WEB-D002'
            },
            {
                name: 'Nhi',
                class: 'PQ-WEB-D002'
            },
            {
                name: 'An',
                class: 'PQ-WEB-D002'
            },
            {
                name: 'Linh',
                class: 'PQ-WEB-D002'
            },
            {
                name: 'Do',
                class: 'PQ-WEB-D002'
            },
        ]
    })
})

app.get('/', (req, res) => {
    res.render('index', {
        users: 
        [
            {
                name: 'Quyen',
                class: 'PQ-WEB-D002'
            },
            {
                name: 'Dung',
                class: 'PQ-WEB-D002'
            },
            {
                name: 'Thuan',
                class: 'PQ-WEB-D002'
            },
            {
                name: 'Mai',
                class: 'PQ-WEB-D002'
            },
            {
                name: 'Nhi',
                class: 'PQ-WEB-D002'
            },
            {
                name: 'An',
                class: 'PQ-WEB-D002'
            },
            {
                name: 'Linh',
                class: 'PQ-WEB-D002'
            },
            {
                name: 'Do',
                class: 'PQ-WEB-D002'
            },
        ]
    })
})

app.listen(port, () => {
    console.log(`Server app listening on port ${port}!`)
})