import { NextApiRequest, NextApiResponse } from 'next'
import { map, filter, find } from 'remeda'

let todos = [
  { id: 1, task: 'Sample Task 1', completed: false },
  { id: 2, task: 'Sample Task 2', completed: true },
]

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    return res.status(200).json(todos)
  }

  if (req.method === 'POST') {
    const { task } = req.body
    const newTodo = { id: Date.now(), task, completed: false }
    todos = [...todos, newTodo]
    return res.status(201).json(newTodo)
  }

  if (req.method === 'PUT') {
    const { id } = req.body
    todos = map(todos, (todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )
    return res.status(200).json(find(todos, (todo) => todo.id === id))
  }

  if (req.method === 'DELETE') {
    const { id } = req.body
    todos = filter(todos, (todo) => todo.id !== id)
    return res.status(200).json({ id })
  }

  return res.status(405).end()
}
