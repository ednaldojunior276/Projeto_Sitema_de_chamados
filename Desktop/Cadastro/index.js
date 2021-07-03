const express = require("express")
const app = express();

const handlebars = require("express-handlebars");
const bodyParser = require("body-parser");
const Post =  require("./views/models/Post")

app.use(express.static("public"))


	app.engine("handlebars", handlebars({defaultLayout: "main"}))
	app.set("view engine", "handlebars")

	app.use(bodyParser.urlencoded({extended: false}))
	app.use(bodyParser.json())


 	
	//ROTAS DE PÁGINAS

	//ROTA DA LISTA DO BANCO DE DADOS
	app.get("/listagem", function(req, res){
		Post.findAll().then(function(posts){
			res.render("home",{
				style: "Listagem.css",
				posts: posts
			})
		})	
	})
	
	// ROTA DO MEU FORMULARIO
	app.get("/Cad", function(req, res){
		res.render("formulario",{
			style: "Cad.css"
		})

		
	})
	//ROTA LISTAGEM SUCESSO
	app.get("/lista", function(req, res){
		res.render("lista",{
			style: "Lista.css"
		})
	})

	//ROTA DO MEUS DADOS CADASTRADOS
	app.post("/Cadastro", function(req, res){
		Post.create({
			chamado: req.body.chamado,
			data: req.body.data,
			solicitante: req.body.solicitante,
			descricao: req.body.descricao,
			centro: req.body.centro,
			tecnico: req.body.tecnico
		}).then(function(){
			//res.send("DADOS CADASTRADO COM SUCESSO!")
			 res.redirect("/lista")
	
		}).catch(function(erro){
			res.send(erro, "ao enviar ")
		})

	})
	//ROTA DELETAR CHAMADOS
	app.get("/delete", function(req, res){
		res.render("deletar",{
			style: "Deletar.css"
		})
	})
	//ROTA DE DELETAR POSTAGENS
	app.get("/deletar/:id", function(req, res){
		Post.destroy({where: {"id": req.params.id}}).then(function(){
			//res.send("postagem deletada com sucesso")
			res.redirect("/delete")
		}).catch(function(erro){
				res.send(erro + "esta postagem nao existe! ")
			})
		})
	


app.listen(8081, function(){
	console.log("SERVIDOR RODANDO http://localhost:8081/");
})