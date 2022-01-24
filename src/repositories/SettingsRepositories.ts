  // importamos da biblioteca do typeOrm
import { Repository, EntityRepository } from "typeorm";
import { Setting } from "../entities/Setting";
// do tipo Entidade
@EntityRepository(Setting)
// Aqui a classe SettingsRepository herda os atributos e metodos do objeto "Setting"
class SettingsRepository extends Repository<Setting> {}

export { SettingsRepository };