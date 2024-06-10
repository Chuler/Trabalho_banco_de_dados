const Postagem = require('../Postagem'); // Importe o modelo da postagem

class PostagemDAO {
  // Cria e persiste uma postagem
  async create({ idUsuario, titulo, conteudo, dataHora }) {
    let newPostagem;
    try {
      newPostagem = await Postagem.create({ idUsuario, titulo, conteudo, dataHora });
    } catch (error) {
      console.error('Erro ao criar postagem:', error);
    } finally {
      return newPostagem; // Retorne a postagem criada
    }
  }

  async getAll() {
    let posts;
    try {
      posts = await Postagem.findAll();
    } catch (error) {
      console.error('Erro ao buscar usuários:', error);
    } finally {
      return posts;
    }
  }

  async getById(postId) {
    let post;
    try {
      post = await Postagem.findByPk(postId);
    } catch (error) {
      console.error('Erro ao buscar postagem por ID:', error);
    } finally {
      return post;
    }
  }
}



module.exports = new PostagemDAO();
