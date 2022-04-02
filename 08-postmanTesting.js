//we will test all the methods here.
//from postman
//so we will have evry method here.
//only do methods on the path /api/people and on..

const { urlencoded } = require('express');
const express = require('express');
const {people} = require('./data')
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get('/',(req,res) =>{
    res.send('<h1>Home Page</h1>')
})

app.get('/api/people',(req,res) =>{
    res.status(200).json({success:true , data:people})
})

app.post('/api/people',(req,res) =>{
    const {newPerson} = req.body;
    console.log(newPerson)
    
    if(!newPerson){
        return res.status(400).send('<h5>No new member to add!</h5>')
    }
    let updatedPeople = [...people,newPerson];
    res.status(200).json({succes:true,data:updatedPeople});
})

app.delete('/api/people/:id',(req,res) => {
    const id = Number(req.params.id);
    const person = people.find((person) => person.id===id);

    if(!person){
        res.status(400).send('No person available with the given id');
    }
    let updatedPeople = people.filter((person) => people.id!==id);
    res.status(200).json({succes:true,msg:`Person with id ${id} deleted` ,data:updatedPeople});

})

app.put('/api/people/:id', (req,res) => {
    const id = Number(req.params.id);
    const { newName } = req.body ;

    const person = people.find((person) => person.id===id);
    if(!person){
        res.status(400).send('No person available with the given id');
    }
    let updatedPeople = people.map((person) =>{
        if(person.id===id){
            return {id:id,name: newName}
        }
        else return person; 
    })

    res.status(200).json({success:true,msg:`Person with id ${id} updated`,data:updatedPeople});
})

app.listen(3001,()=> console.log('server up and running on 3001..'))