import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { UserEntity } from '@modules/user/entities/user.entity';

import { EquipmentEntity } from './equipment.entity';

@Entity('ctrl_historial_equipo')
export class EquipmentHistoryEntity {
  @PrimaryGeneratedColumn({comment: 'Identificador del historial del equipo'})
  id: number;

  @Column({comment: 'ID del equipo'})
  equipoId: number;

  @Column({name: 'usu_id_creacion', comment: 'ID del usuario que realizó la acción'})
  usuarioIdCreacion: number;

  @Column({type: 'varchar', length: 255, comment: 'Descripción de la acción realizada'})
  descripcion: string;

  @CreateDateColumn({type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP', comment: 'Fecha y hora de creacion'})
  fechaCreacion: Date;

  @ManyToOne(() => EquipmentEntity)
  @JoinColumn({name: 'equ_id'})
  equipo: EquipmentEntity;

  @ManyToOne(() => UserEntity)
  @JoinColumn({name: 'usu_id_creacion'})
  usuario: UserEntity;
}
