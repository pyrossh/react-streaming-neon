import { shield } from 'telefunc';
import { updateTodo, deleteTodo } from '../../services/todo';

const t = shield.type;

shield(onUpdate, [{ id: t.number, text: t.string, completed: t.optional(t.boolean), createdAt: t.optional(t.string), updatedAt: t.nullable(t.string) }])
export async function onUpdate(data) {
  return await updateTodo(data);
}

shield(onDelete, [t.number])
export async function onDelete(id) {
  return await deleteTodo(id);
}