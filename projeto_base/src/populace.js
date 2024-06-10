const db = require('./config/database');
const PostagemDAO = require('./models/dao/PostagemDAO');
const UsuarioDAO = require('./models/dao/UsuarioDAO');
const CurtidaDAO = require('./models/dao/CurtidaDAO');
const RespostaDAO = require('./models/dao/RespostaDAO');

// Sincronize os modelos com o banco de dados
db.sequelize.sync({ force: true }).then(async () => {

  console.log('Inserindo dados de exemplo.');

  // Adicionando os usuários
  await UsuarioDAO.create({
    nome: 'Matthew Hettinger',
    email: 'matthewh@example.com',
    senha: 'senha123',
  })
  await UsuarioDAO.create({
    nome: 'Kristin Sykes',
    email: 'kristins@example.com',
    senha: 'senha123',
  })
  await UsuarioDAO.create({
    nome: 'Clement Merrifield',
    email: 'clementm@example.com',
    senha: 'senha123',
  })
  await UsuarioDAO.create({
    nome: 'Tommy Blackburn',
    email: 'tommyb@example.com',
    senha: 'senha123',
  })
  await UsuarioDAO.create({
    nome: 'Agnes Walker',
    email: 'agnesw@example.com',
    senha: 'senha123',
  })

  await UsuarioDAO.create({
    nome: 'Jobemar Antônio',
    email: 'jobemara@example.com',
    senha: 'senha123',
  })

  await UsuarioDAO.create({
    nome: 'Eurico Felipo',
    email: 'euricof@example.com',
    senha: 'senha123',
  })

  await UsuarioDAO.create({
    nome: 'Manoel Pires',
    email: 'manoelp@example.com',
    senha: 'senha123',
  })

  await UsuarioDAO.create({
    nome: 'Antonio Tomasi',
    email: 'antoniot@example.com',
    senha: 'senha123',
  })

  await UsuarioDAO.create({
    nome: 'Amanda Querida',
    email: 'amandaq@example.com',
    senha: 'senha123',
  })

  await PostagemDAO.create({
    idUsuario: 1,
    titulo: "Um post",
    conteudo: "Conteúdo de um post",
    dataHora: new Date('2020-11-11T03:24:00')
  });

  await PostagemDAO.create({
    idUsuario: 2,
    titulo: "Outro post",
    conteudo: "Conteúdo de outro post",
    dataHora: new Date('2020-12-11T03:24:00')
  });

  await PostagemDAO.create({
    idUsuario: 3,
    titulo: "Mais um post",
    conteudo: "Conteúdo de mais um post",
    dataHora: new Date('2020-11-11T03:24:00')
  });

  await PostagemDAO.create({
    idUsuario: 4,
    titulo: "São muitos posts",
    conteudo: "Muitos posts",
    dataHora: new Date('2022-01-01T03:24:00')
  });

  await PostagemDAO.create({
    idUsuario: 5,
    titulo: "Post, de novo",
    conteudo: "Post atrás de post",
    dataHora: new Date('2023-06-04T03:24:00')
  });

  await PostagemDAO.create({
    idUsuario: 6,
    titulo: "Oi",
    conteudo: "Oi, so um post",
    dataHora: new Date('2015-10-24T03:24:00')
  });

  await PostagemDAO.create({
    idUsuario: 7,
    titulo: "E agora?",
    conteudo: "Quando isso acaba?",
    dataHora: new Date('2020-03-27T03:24:00')
  });

  await PostagemDAO.create({
    idUsuario: 8,
    titulo: "Terminei isso",
    conteudo: "Tenho muito conhecimento",
    dataHora: new Date('2022-02-13T03:24:00')
  });

  await PostagemDAO.create({
    idUsuario: 9,
    titulo: "Post bacana",
    conteudo: "Esse é legal :)",
    dataHora: new Date('2020-02-12T03:24:00')
  });

  await PostagemDAO.create({
    idUsuario: 10,
    titulo: "É o ultimo...",
    conteudo: "...Por enquanto",
    dataHora: new Date('2021-08-04T03:24:00')
  });

  await CurtidaDAO.create({
    idUsuario: 1,
    idPostagem: 2,
  });

  await CurtidaDAO.create({
    idUsuario: 2,
    idPostagem: 3,
  });

  await CurtidaDAO.create({
    idUsuario: 3,
    idPostagem: 4,
  });

  await CurtidaDAO.create({
    idUsuario: 4,
    idPostagem: 5,
  });

  await CurtidaDAO.create({
    idUsuario: 5,
    idPostagem: 6,
  });

  await CurtidaDAO.create({
    idUsuario: 6,
    idPostagem: 7,
  });

  await CurtidaDAO.create({
    idUsuario: 7,
    idPostagem: 8,
  });

  await CurtidaDAO.create({
    idUsuario: 8,
    idPostagem: 9,
  });

  await CurtidaDAO.create({
    idUsuario: 9,
    idPostagem: 10,
  });

  await CurtidaDAO.create({
    idUsuario: 10,
    idPostagem: 1,
  });

  await RespostaDAO.create({
    idUsuario: 1,
    idPostagem: 10,
    conteudo: "Que começe o ciclo novamente",
    dataHora: new Date('2021-08-04T03:24:00')
  });

  await RespostaDAO.create({
    idUsuario: 2,
    idPostagem: 1,
    conteudo: "E aí, como vai?",
    dataHora: new Date('2023-10-14T03:24:00')
  });

  await RespostaDAO.create({
    idUsuario: 3,
    idPostagem: 2,
    conteudo: "Hoje é sexta?",
    dataHora: new Date('2019-07-22T03:24:00')
  });

  await RespostaDAO.create({
    idUsuario: 4,
    idPostagem: 3,
    conteudo: "Talvez hoje seja sexta",
    dataHora: new Date('2015-04-30T03:24:00')
  });

  await RespostaDAO.create({
    idUsuario: 5,
    idPostagem: 4,
    conteudo: "Que fome!",
    dataHora: new Date('2024-06-05T03:24:00')
  });

  await RespostaDAO.create({
    idUsuario: 6,
    idPostagem: 5,
    conteudo: "Não vejo a hora de ganhar dinheiro",
    dataHora: new Date('2023-09-05T03:24:00')
  });

  await RespostaDAO.create({
    idUsuario: 7,
    idPostagem: 6,
    conteudo: "AAAAAAAAAAAAAAAAAAAA",
    dataHora: new Date('2022-02-02T03:24:00')
  });

  await RespostaDAO.create({
    idUsuario: 8,
    idPostagem: 7,
    conteudo: "Está quase!",
    dataHora: new Date('2021-06-05T03:24:00')
  });

  await RespostaDAO.create({
    idUsuario: 9,
    idPostagem: 8,
    conteudo: "Muito perto!",
    dataHora: new Date('2018-11-17T03:24:00')
  });

  await RespostaDAO.create({
    idUsuario: 10,
    idPostagem: 9,
    conteudo: "Terminei.",
    dataHora: new Date('2020-12-25T03:24:00')
  });

  console.log('Dados de exemplo criados com sucesso.');
  process.exit(0);
});
