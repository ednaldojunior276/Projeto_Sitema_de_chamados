const Sequelize = require("Sequelize")

//OBJETO
const sequelize = new Sequelize("gerdau","root", "87644568",{
	host: "localhost",
	dialect: "mysql"
})

sequelize.authenticate().then(function(conectado){
	console.log("conectado ao banco de dados");
}).catch(function(erro){
	console.log(erro, "ao se conectar ao banco de dados");
})

//CRIANDO TABELAS NO BANCO

const Post = sequelize.define("Chamados",{

	numero_do_chamado: {
		type: Sequelize.STRING
	},

	data: {
		type: Sequelize.STRING
	},

	solicitante: {
		type: Sequelize.STRING

	},

	descricao: {
		type: Sequelize.STRING
	},

	centro_de_custo: {
		type: Sequelize.STRING
	},

	tecnico: {
		type: Sequelize.STRING
	}

})

//Post.sync({force:true})
module.exports = Post