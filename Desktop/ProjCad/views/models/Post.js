const Sequelize =  require("sequelize");
const sequelize = new Sequelize("chamadogerdau", "root", "87644568",{
    host: "localhost",
    dialect: "mysql"
})

    sequelize.authenticate().then(function(){
        console.log ("Conectado ao banco de dados");

    }).catch(function(erro){
        console.log(erro, "ao se conectar ao banco de dados");
    })


    const Chamados = sequelize.define("Chamados", {

        numero:{type: Sequelize.STRING},
        data:{type: Sequelize.STRING},
        nome: {type: Sequelize.STRING},
        descricao: {type: Sequelize.STRING},
        centrocusto: {type: Sequelize.STRING},
        tecnico: {type: Sequelize.STRING}
    })

        //Chamados.sync({force:true})
        module.exports = Chamados
