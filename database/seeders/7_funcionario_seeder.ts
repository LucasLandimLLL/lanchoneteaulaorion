import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Funcionario from '../../app/models/funcionario.js'

export default class extends BaseSeeder {
  async run() {
    
    await Funcionario.createMany([
      {nome:"Nome1", cpf:"111.111.111-11", endereco:"qnn0345", sexo:"M", telefone:"4578978", cargoId: 2},
      {nome:"Nome2", cpf:"222.222.222-22", endereco:"qnn0345", sexo:"M", telefone:"321788978", cargoId: 2},
      {nome:"Nome3", cpf:"333.333.333-33", endereco:"qnn0345", sexo:"M", telefone:"456620978", cargoId: 2},
      {nome:"Nome4", cpf:"444.444.444-44", endereco:"qnn0345", sexo:"M", telefone:"354578978", cargoId: 2},
      {nome:"Nome5", cpf:"555.555.555-55", endereco:"qnn0345", sexo:"M", telefone:"256744978", cargoId: 2}      
    ])

  }
}