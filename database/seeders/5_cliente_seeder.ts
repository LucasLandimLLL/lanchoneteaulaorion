import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Cliente from '../../app/models/cliente.js'

export default class extends BaseSeeder {
  async run() {
   
await Cliente.createMany([
{nome:"Nome1", cpf:"111.111.111-11", telefone:"123456789", email:"nome1@gmail.com"},
{nome:"Nome2", cpf:"222.222.222-22", telefone:"123456789", email:"nome2@gmail.com"},
{nome:"Nome3", cpf:"333.333.333-33", telefone:"123456789", email:"nome3@gmail.com"},
{nome:"Nome4", cpf:"444.444.444-44", telefone:"123456789", email:"nome4@gmail.com"},
{nome:"Nome5", cpf:"555.555.555-55", telefone:"123456789", email:"nome5@gmail.com"}

])

  }
}