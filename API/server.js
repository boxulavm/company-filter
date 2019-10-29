const path = require('path') 
const express = require('express');
const companies = require('./db')


const app = express();
const publicDirectoryPath = path.join(__dirname, './public')

app.use(express.static(publicDirectoryPath))

// comapany filter function

const companyFilter = id => companies.companies.filter(company => company.id === id);


// Get all comanies JSON data
app.get('/companies', (req, res) => {
    res.send(companies)
})
 

// Get single company by ID
app.get('/company', (req, res) => {    
    const companyToDisplay =  companyFilter(Number(req.query.id));
    if(companyToDisplay.length === 0){
        res.send('No company with that ID')
    } else {
        res.send(companyToDisplay)
    }
    
})

    
PORT = 3000;

app.listen(3000, () => {
    console.log(`Listening on port ${PORT}...`)
})