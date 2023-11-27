const express = require('express');
const mongoose = require('mongoose');

const app = express();
// const User= require('../src/model/user.schema.js')
import User from '../model/user.schema.js'

app.use(express.json());


mongoose.connect(' mongodb://127.0.0.1:27017/employee', { useNewUrlParser: true });

app.post('/insert', async(req, res) => {
    const FirstName = req.body.firstName
    const CompanyRole = req.body.companyRole

    const formData = new User({
        name: FirstName,
        role: CompanyRole
    })

    try {
        await formData.save();
        res.send("inserted data..")
    } catch(err) {
        console.log(err)
    }
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});