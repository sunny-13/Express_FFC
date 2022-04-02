const {people} = require('../data')

const getPeople = (req,res) =>{
    res.status(200).json({success:true , data:people})
}

const updatePeople = (req,res) => {
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
}
const deletePeople = (req,res) => {
    const id = Number(req.params.id);
    const person = people.find((person) => person.id===id);

    if(!person){
        res.status(400).send('No person available with the given id');
    }
    let updatedPeople = people.filter((person) => person.id!==id);
    res.status(200).json({success:true,msg:`Person with id ${id} deleted` ,data:updatedPeople});

}
const addPeople = (req,res) =>{
    const {newPerson} = req.body;
    console.log(newPerson)
    
    if(!newPerson){
        return res.status(400).send('<h5>No new member to add!</h5>')
    }
    let updatedPeople = [...people,newPerson];
    res.status(200).json({succes:true,data:updatedPeople});
}

module.exports = {getPeople,updatePeople,deletePeople,addPeople}