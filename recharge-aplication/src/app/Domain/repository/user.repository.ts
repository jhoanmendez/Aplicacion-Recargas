import { Usuario } from '../models/user.model';

export abstract class AuthRepository {
  abstract login(correo: string, password: string, rol: string): Promise<Usuario>;
}
