import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

export enum DefectStates {
  OPEN,
  IN_WORK,
  REJECTED,
  DONE,
}

@Entity()
export class Defect extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  location: string;
  @Column({ length: 80 })
  descriptionShort: string;
  @Column()
  descriptionLong: string;
  @CreateDateColumn()
  reportedDate: Date;
  @Column({ default: DefectStates.OPEN })
  status: DefectStates;

  constructor(obj: Partial<Defect>) {
    super();
    Object.assign(this, obj);
  }
}
