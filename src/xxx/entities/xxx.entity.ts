import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Xxx {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 30,
  })
  title: string;

  @Column('text')
  content: string;

  @Column()
  createTime: Date;
  @Column()
  updateTime: Date;

  @Column()
  isDelete: boolean;
}
