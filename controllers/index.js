//imports
const { Kingdom } = require("../models");
const { Sequelize, Op } = require("sequelize");
// const port  = require('../helpers/port')
// const port = 1000


//controller
class Controller {
    static async default(req,res){
        res.redirect('/home')
    }
    static async home(req,res){
        let result
        Kingdom.findAll()
        .then((data) => {
            result = data
            // console.log(result[0].dataValues.name);
          res.render('dasbord', {result})
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
    static species(req,res){
        let kingdom =   req.params.kingdom
        res.render('species')
    }
}

module.exports = Controller