import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Comanda from '../../app/models/comanda.js'

export default class extends BaseSeeder {
  async run() {
   
    await Comanda.createMany([
      {mesa:"E1", funcionarioId:1, clienteId:1, forma_pagamentoId:2, dataPagamento:20052024, data:1302024},
      {mesa:"C1", funcionarioId:2, clienteId:2, forma_pagamentoId:2, dataPagamento:20052024, data:13062024},
      {mesa:"E4", funcionarioId:3, clienteId:3, forma_pagamentoId:3, dataPagamento:20052024, data:13062024},
      {mesa:"C5", funcionarioId:4, clienteId:4, forma_pagamentoId:4, dataPagamento:20052024, data:13062024},
      {mesa:"C6", funcionarioId:5, clienteId:5, forma_pagamentoId:5, dataPagamento:20052024, data:13062024}
    ])
  }
}