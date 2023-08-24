const express = require('express');
const router = express.Router();

router.get('/rota01', (req,res)=>{
  res.sendFile('rota01.html', {root: 'public'});
}); 

router.get('/rota02', (req,res)=>{
  res.sendFile('rota02.html', {root: 'public'});
}); 

router.get('/rota03', (req,res)=>{
  res.sendFile('rota03.html', {root: 'public'});
}); 

module.exports = router;