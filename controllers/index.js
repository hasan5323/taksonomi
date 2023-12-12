class Controller {
    static default(req,res){
        res.redirect('/home')
    }
    static home(req,res){
        res.render('dasbord')
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