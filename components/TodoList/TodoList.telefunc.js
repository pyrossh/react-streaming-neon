import { getContext, shield } from 'telefunc';
import { createTodo, getTodos } from '../../services/todo'

const t = shield.type;

export async function onLoad() {
  return await getTodos();
}

shield(onNewTodo, [{ text: t.string }])
export async function onNewTodo({ text }) {
  return await createTodo({ text, completed: false, createdAt: new Date() });
}