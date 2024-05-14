import { BaseSeeder } from '@adonisjs/lucid/seeders'
import ProdutoComanda from '../../app/models/produto_comanda.js'

export default class extends BaseSeeder {
  async run() {
    
    await ProdutoComanda.createMany([
      {produtoId: 3, comandaId: 2, quantidade: 1},
      {produtoId: 2, comandaId: 3, quantidade: 6},
      {produtoId: 1, comandaId: 5, quantidade: 8},
      {produtoId: 4, comandaId: 4, quantidade: 4},
      {produtoId: 6, comandaId: 4, quantidade: 3},
      {produtoId: 8, comandaId: 3, quantidade: 2},
      {produtoId: 9, comandaId: 5, quantidade: 4},
      {produtoId: 7, comandaId: 1, quantidade: 6},
    ])

  }
}