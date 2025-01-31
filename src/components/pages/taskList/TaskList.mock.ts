import { fn } from '@storybook/test'
import { useState } from 'react'
import { pipe, map, filter } from 'remeda'
import { TaskCreationFormData } from '@organisms/taskCreationForm'

type Todo = {
  id: number
  task: string
  completed: boolean
}

const initialMockTodos: Todo[] = [
  { id: 1, task: 'Test Task 1', completed: false },
  { id: 2, task: 'Test Task 2', completed: true },
]

export const useQueryTask = fn(
  (): {
    todos: Todo[]
    addTaskMutation: {
      mutate: (data: TaskCreationFormData) => void
    }
    toggleTaskMutation: {
      mutate: (id: number) => void
    }
    deleteTaskMutation: {
      mutate: (id: number) => void
    }
  } => {
    const [todos, setTodos] = useState<Todo[]>(initialMockTodos)

    const updateTodos = (newTodos: Todo[]) => {
      setTodos([...newTodos])
    }

    return {
      todos,
      addTaskMutation: {
        mutate: (data: TaskCreationFormData) => {
          const newTodo = {
            id: Math.floor(Math.random() * Number.MAX_SAFE_INTEGER),
            task: data.task,
            completed: false,
          }
          updateTodos([...todos, newTodo])
        },
      },
      toggleTaskMutation: {
        mutate: (id: number) => {
          const updatedTodos = pipe(
            todos,
            map((todo) =>
              todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
          )
          updateTodos(updatedTodos)
        },
      },
      deleteTaskMutation: {
        mutate: (id: number) => {
          const updatedTodos = pipe(
            todos,
            filter((todo) => todo.id !== id)
          )
          updateTodos(updatedTodos)
        },
      },
    }
  }
).mockName('useQueryTask')
