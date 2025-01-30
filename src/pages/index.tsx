// TODO: 仮で画面実装している
import React, { useState } from 'react'
import { Box } from '@radix-ui/themes'
import { Button } from '@/components/atoms/button/Button'
import {
  TaskCreationForm,
  TaskCreationFormData,
} from '@/components/organisms/taskCreationForm'
import { CheckThroughText } from '@/components/molecules/checkThroughText'

interface Todo {
  id: number
  task: string
  completed: boolean
}

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([])

  const handleAddTask = (data: TaskCreationFormData) => {
    setTodos([...todos, { id: Date.now(), task: data.task, completed: false }])
  }

  const handleToggleComplete = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  const handleDeleteTask = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  return (
    <Box>
      <h1>TODO List</h1>
      <TaskCreationForm onSubmit={handleAddTask} />
      {todos.map((todo) => (
        <Box
          key={todo.id}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <CheckThroughText
            isLineThrough={todo.completed}
            onClick={() => handleToggleComplete(todo.id)}
            value={todo.task}
          />
          <Button onClick={() => handleDeleteTask(todo.id)}>X</Button>
        </Box>
      ))}
    </Box>
  )
}

export default TodoList
