// TODO: 仮で画面実装している
import React, { useState } from 'react'
import { Box, Checkbox, Flex } from '@radix-ui/themes'
import { Button } from '@/components/atoms/button/Button'
import {
  TaskCreationForm,
  TaskCreationFormData,
} from '@/components/organisms/taskCreationForm'
import { ToggleThroughText } from '@/components/atoms/toggleThroughText'

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
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Flex align="center" gap="8px">
              <Checkbox
                checked={todo.completed}
                onCheckedChange={() => handleToggleComplete(todo.id)}
                style={{
                  cursor: 'pointer',
                }}
              />
              <ToggleThroughText
                isLineThrough={todo.completed}
                onClick={() => handleToggleComplete(todo.id)}
                value={todo.task}
              />
            </Flex>
            <Button onClick={() => handleDeleteTask(todo.id)}>X</Button>
          </li>
        ))}
      </ul>
    </Box>
  )
}

export default TodoList
