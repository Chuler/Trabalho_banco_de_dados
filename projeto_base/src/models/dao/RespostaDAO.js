const Resposta = require('../Resposta'); // Importe o modelo da Resposta

class RespostaDAO {
  // Cria e persiste uma resposta
  async create({ idUsuario, idPostagem, conteudo, dataHora }) {
    let newResposta;
    try {
      newResposta = await Resposta.create({ idUsuario, idPostagem, conteudo, dataHora });
    } catch (error) {
      console.error('Erro ao criar resposta:', error);
    } finally {
      return newResposta; // Retorne a resposta criada
    }
  }

  async getAll() {
    let respostas;
    try {
      respostas = await Resposta.findAll();
    } catch (error) {
      console.error('Erro ao buscar usuários:', error);
    } finally {
      return respostas;
    }
  }

  async getById(respId) {
    let resp;
    try {
      resp = await Resposta.findByPk(respId);
    } catch (error) {
      console.error('Erro ao buscar resposta por ID:', error);
    } finally {
      return resp;
    }
  }
}

module.exports = new RespostaDAO();