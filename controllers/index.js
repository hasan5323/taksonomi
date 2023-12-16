//imports
const { Kingdom } = require("../models");
const { Sequelize, Op } = require("sequelize");
const port = require('../app')


//controller
class Controller {
    static default(req,res){
        res.redirect('/home')
    }
    static home(req,res){
        Kingdom.findAll()
        .then((result) => {
          res.render('dasbord', {result, port})
      })
    }
    
    static add(req,res){
        res.render('add')
    }
    static addPost(req,res){
        
    }
    static donate(req,res){
        res.render('donate')
    }
}

module.exports = Controller