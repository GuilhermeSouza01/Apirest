import User from '../models/User';

class UserController {
  // eslint-disable-next-line class-methods-use-this
  async store(request, response) {
    try {
      const novoUser = await User.create(request.body);
      const { id, nome, email } = novoUser;
      return response.json({ id, nome, email });
    } catch (e) {
      return response.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}
export default new UserController();
