let pg = require('pg')
let client = new pg.Client(
    {
        user: 'postgres',
        password: 'postgres',
        database: 'nsx',
        host: 'localhost',
        port: 5432
    }
)

client.connect()

// client.query('select * from dm_nv', function(err, results) 
// {
//     console.log(err, results.rows)
// })

//Copy tu https://expressjs.com/en/starter/hello-world.html
const express = require('express')
const app = express()
const port = 5000

app.set('view engine', 'ejs')

app.get('/api/categories', (req, res) => 
{
    let client = new pg.Client(
        {
            user: 'postgres',
            password: 'postgres',
            database: 'nsx',
            host: 'localhost',
            port: 5432
        }
    )
    client.connect()
    client.query('select * from categories', function(err, results) 
    {
        res.render('index', {
            cates: results.rows
        })
        client.end()
    })
})


app.get('/api/customers', (req, res) => 
{
    let client = new pg.Client(
        {
            user: 'postgres',
            password: 'postgres',
            database: 'nsx',
            host: 'localhost',
            port: 5432
        }
    )
    client.connect()
    client.query('select * from customers', function(err, results) 
    {
        res.render('customers', {
            customers: results.rows
        })
        client.end()
    })
})


app.get('/api/farms', (req, res) => 
{
    let client = new pg.Client(
        {
            user: 'postgres',
            password: 'postgres',
            database: 'nsx',
            host: 'localhost',
            port: 5432
        }
    )
        client.connect()
    client.query('select * from farms', function(err, results) 
    {
        res.render('farms', {
            farms: results.rows
        })
        client.end()
    })
})


app.get('/api/products', (req, res) => 
{
    let client = new pg.Client(
        {
            user: 'postgres',
            password: 'postgres',
            database: 'nsx',
            host: 'localhost',
            port: 5432
        }
    )
        client.connect()
    client.query('select * from products', function(err, results) 
    {
        res.render('products', {
            products: results.rows
        })
        client.end()
    })
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))
