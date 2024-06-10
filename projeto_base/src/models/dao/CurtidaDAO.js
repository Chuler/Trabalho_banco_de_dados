const Curtida = require('../Curtida'); // Importe o modelo da Curtida

class CurtidaDAO {
  // Cria e persiste uma Curtida
  async create({ idUsuario, idPostagem}) {
    let newCurtida;
    try {
      newCurtida = await Curtida.create({ idUsuario, idPostagem});
    } catch (error) {
      console.error('Erro ao criar curtida:', error);
    } finally {
      return newCurtida; // Retorne a curtida criada
    }
  }

  async getAll() {
    let likes;
    try {
      likes = await Curtida.findAll();
    } catch (error) {
      console.error('Erro ao buscar usuários:', error);
    } finally {
      return likes;
    }
  }

  async getById(curtidaId) {
    let curtida;
    try {
      curtida = await Curtida.findByPk(curtidaId);
    } catch (error) {
      console.error('Erro ao buscar usuário por ID:', error);
    } finally {
      return curtida;
    }
  }

  async delete(curtidaId) {
    let deletado = false
    try {
      const like = await Curtida.findByPk(curtidaId);
      if (like) {
        await like.destroy()
        deletado = true;
      } else {
        console.error('Usuário não encontrado para exclusão.');
      }
    } catch (error) {
      console.error('Erro ao excluir usuário:', error);
    } finally {
      return deletado;
    }
  }
}

module.exports = new CurtidaDAO();