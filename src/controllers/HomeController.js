import Aluno from '../models/Aluno';

class HomeController {
  async index(request, response) {
    const novoAluno = await Aluno.create({
      nome: 'Maria ',
      sobrenome: 'SouSilvaza',
      email: 'maria@gmail.com',
      idade: 66,
      peso: 56,
      altura: 1.61,
    });
    response.json(novoAluno);
  }
}
export default new HomeController();
