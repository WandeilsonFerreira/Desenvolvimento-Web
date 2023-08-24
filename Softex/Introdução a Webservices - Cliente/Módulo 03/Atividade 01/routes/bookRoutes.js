const router = require('express').Router();
const Book = require('../models/bookStore');


router.get('/', (req,res) =>{
    res.json({message: "Express configurado com sucesso!"})
})

router.post('/addBook', async (req,res) => {
    const {name, author, ISBN} = req.body

    const book = {
        name, author, ISBN
    }
    if (!name){
        res.status(422).jason({error: 'O nome é obrigatório!'})
        retunr
    }
    if (!author){
        res.status(422).jason({error: 'O nome é obrigatório!'})
        retunr
    }
    if (!ISBN){
        res.status(422).jason({error: 'O nome é obrigatório!'})
        retunr
    }

    try{
        await Book.create(book)
        res.status(201).json({ message: 'Livro cadastrado com sucesso!'})
    } catch (error){
        res.status(500).json({error})
    }
})

router.get('/books', async (req, res) =>{
    try {
        const book = await Book.find()
        res.status(200).json(book)
        
    } catch (error) {
        res.status(500).json({error: error})
    }
})

router.get('/:id', async (req, res) =>{     
    const id = req.params.id;

    try {
        const book = await Book.findOne({_id: id})

        if(!book){
            res.status(422).json({message: 'O Livro não foi encontrado!'})
            return
        }

        res.status(200).json(book)
    } catch (error) {
        res.status(500).json({error: error})
    }
})

router.patch('/:id', async (req,res) => {
    const id = req.params.id
    const { name, author, ISBN } = req.body

    const book = {
        name, author, ISBN,
    }

    try {
        const updatedBook = await Book.updateOne({ _id: id}, book)

        if(updatedBook.matchedCount === 0){
            res.status(422).json({message: 'O livro não foi atualizado com sucesso!'})
            return
        } else{
           res.status(200).json({message: 'O livro foi atualizado com sucesso!'}) 
           return
        }         
        
    } catch (error) {
        res.status(500).json({error: error})
    }
})

router.delete('/book/:id', async (req,res) => {
    const id = req.params.id
    const book = await Book.findOne({ _id: id })

    if(!book){
        res.status(422).json({message: 'O Livro não foi encontrado!'})
        return
    }

    try {
        await Book.deleteOne({_id: id})
        res.status(200).json({message: 'O Livro foi removido com sucesso!'}) 
        
    } catch (error) {
        res.status(500).json({error: error})
    }

}) 

module.exports = router 

