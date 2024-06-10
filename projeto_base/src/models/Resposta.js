// Importando as dependências necessárias
const db = require('../config/database');
const { Model, DataTypes } = require('sequelize');
const UsuarioDAO = require('./dao/UsuarioDAO');
const PostagemDAO = require('./dao/PostagemDAO');

// Definindo a classe Postagem que estende Model do Sequelize
class Resposta extends Model {
  // Aqui devem vir os métodos que essa classe pode executar
  getAutor() {
    let autor = UsuarioDAO.getById(this.idUsuario)
    return autor;
  }
  getPostagem() {
    let autor = PostagemDAO.getById(this.idPostagem)
    return postagem;
  }
  // Associação com a classe Usuario
  static associate(models) {
    this.belongsTo(models.Usuario, { foreignKey: 'idUsuario', as: 'autor' });
  }
  // Associação com a classe Postagem
  static associate(models) {
    this.belongsTo(models.Postagem, { foreignKey: 'idPostagem', as: 'postagem' });
  }
}

// Inicializando a classe Postagem com o esquema do banco de dados
Resposta.init({
  // idUsuario é a chave estrangeira do usuário que fez o post
  idUsuario: { type: DataTypes.INTEGER, allowNull: false },
  // id da postagem
  idPostagem: { type: DataTypes.INTEGER, allowNull: false },
  // Conteúdo da postagem
  conteudo: { type: DataTypes.STRING, allowNull: false },
  // Data e hora da postagem
  dataHora: { type: DataTypes.DATE, allowNull: false },
}, {
  sequelize: db.sequelize, // Conexão com o banco de dados
  modelName: 'Resposta', // Nome do modelo
  tableName: 'respostas', // Nome da tabela no banco de dados
});

// Exportando a classe Postagem
module.exports = Resposta;