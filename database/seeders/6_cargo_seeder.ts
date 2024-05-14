import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Cargo from '../../app/models/cargo.js'

export default class extends BaseSeeder {
  async run() {
    
    return await Cargo.createMany([
      { nome: 'atendente' },
      { nome: 'gerente' },
      { nome: 'chapeiro' },
      { nome: 'garçom' },
    ])

  }
}