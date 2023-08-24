const router = require('express').Router()
const Person = require('../Person')

router.get('/',(req, res) =>{
    res.json({message:"Olá Express"})
})


//Create - rotas 
router.post('/person', async (req, res) => {
    const {name, adress, phone} = req.body

    if(!name){
        res.status(422).json({error: 'O nome é obrigaatorio'})
        return
    }

    if(!adress){
        res.status(422).json({error: 'O endereço é obrigaatorio'})
        return
    }

  

    const  person = {
        name, adress, phone
    }

    //Metodo create do mongoose

    try {
        await Person.create(person)
        res.status(201).json({ message: 'Pessoa criada com sucesso!'})
          
    } catch (error){
        res.status(500).json({error: error})
    }
})

//Read
router.get('/person', async (req, res) =>{
    try {
        const people = await Person.find()
        res.status(200).json(people)
        
    } catch (error) {
        res.status(500).json({error: error})
    }
})

//Rotas dinamicas 
router.get('/:id', async (req, res) =>{
    //Extraindo dados de requisição pela url
    const id = req.params.id;

    try {
        const person = await Person.findOne({_id: id})

        if(!person){
            res.status(422).json({message: 'O usuário não foi encontrado!'})
            return
        }

        res.status(200).json(person)
    } catch (error) {
        res.status(500).json({error: error})
    }
})

//Update - atalização dos dados
router.patch('/:id', async (req,res) => {
    const id = req.params.id
    const { name, adress, phone } = req.body

    const person = {
        name, adress, phone,
    }

    try {
        const updatedPerson = await Person.updateOne({ _id: id}, person)

        if(updatedPerson.matchedCount === 0){
            res.status(422).json({message: 'O usuário não foi atualizado com sucesso!'})
            return
        } else{
           res.status(200).json({message: 'O usuário foi atualizado com sucesso!'}) 
           return
        } 
        
        
    } catch (error) {
        res.status(500).json({error: error})
    }
})

//Delete - Deletar os dados
router.delete('/person/:id', async (req,res) => {
    const id = req.params.id
    const person = await Person.findOne({ _id: id })

    if(!person){
        res.status(422).json({message: 'O usuário não foi encontrado!'})
        return
    }

    try {
        await Person.deleteOne({_id: id})
        res.status(200).json({message: 'O usuário foi removido com sucesso!'}) 
        
    } catch (error) {
        res.status(500).json({error: error})
    }

})

module.exports = router