import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { priorityEnum } from '../interface/notes.interface';

@Entity({ name: "notes" })
class Notes {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ name: "notes", type: "varchar"})
  notes: string;

  @Column({ name: "name", type: "varchar"})
  name: string;

  @Column({ name: "is_active", type: "tinyint", default: 1 })
  isActive: boolean;

  @Column({ name: "due_date" })
  dueDate: Date;

  // @Column({ name: "priority", type: "enum", enum: ["none", "low", "medium", "high"], default: "none" })
  @Column('text', { name: "priority" })
  priority: priorityEnum;

  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt: Date;
}

export { Notes }