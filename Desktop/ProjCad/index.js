const express =  require("express")
const app = express()
const Post = require("./views/models/Post")

    const handlebars = require("express-handlebars")
    const bodyParser = require("body-parser")


        app.engine("handlebars", handlebars({defaultLayout: "main"}))
        app.set("view engine", "handlebars")

          app.use(bodyParser.urlencoded({extended: false}))
          app.use(bodyParser.json())

          //CONEXÃO CSS
          app.use(express.static("public"))

        //ROTAS

            app.get("/cad", function(req, res){
                res.render("formulario",{
                    style: "Formulario.css"

                })
            })

            app.get("/lista", function(req, res){
                    res.render("lista")
            })

            app.get("/sucesso", function(req, res){
                    res.render("sucesso",{
                        style: "Sucesso.css"
                    })
            })

            app.post("/form", function(req, res){
               Post.create({
                   numero: req.body.numero,
                   data: req.body.data,
                   nome:  req.body.nome,
                   descricao: req.body.descricao,
                   centrocusto: req.body.centro,
                   tecnico: req.body.tecnico
               }).then(function(){
                   //res.send("cadastrado com sucesso");
                   res.redirect("/sucesso")

               }).catch(function(){
                   console.log("ero ao enviar")
               })

            })


            app.get("/listagem", function(req, res){
                Post.findAll().then(function(lista){
                    res.render("chamados",{
                        lista: lista,
                        style: "Lista.css"
                    })
                })
            })

            app.get("/delete", function(req, res){
                res.render("deletado",{
                    style: "Del.css"
                })
            }) 

            app.get("/del/:id", function(req, res){
                Post.destroy({where: {"id": req.params.id}}).then(function(){
                    res.redirect("/delete")        
                }).catch(function(){
                    res.send("erro !!")
                })
            })
                    
                


    app.listen(8081, function(){
        console.log("SERVIDOR RODANDO NA PORTA 8081!");
    })