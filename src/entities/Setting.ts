import {
    Entity,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    PrimaryColumn,
  } from "typeorm";
  //  importamos a dependencia uuid versao 4 subrescrevendo como uuid)
  import { v4 as uuid } from "uuid";
  
  // CRIAÇÃO DA ENTIDADE QUE VAI REPRESENTA A TABELA NA APLICACAO
  @Entity("settings") // Diz á aplicao que o setting é uma entidade
  class Setting {
   
    @PrimaryColumn() // diz que o id será  a coluna chave primaria
    id:string;

    @Column()  // será uma coluna
    username:string;

    @Column()
    chat:boolean;

    @UpdateDateColumn()
    updated_at:Date;

    @CreateDateColumn()
    create_at:Date;
    constructor() {
        // se deferente de verdadeiro , id recebe o  uuid universal
        if (!this.id) {
          this.id = uuid();
        }
      }
}
//exporta esse objeto para ser importado em outro script da aplicacao
export {Setting};