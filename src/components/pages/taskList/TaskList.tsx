import React from 'react'
import { Container, Flex, Text } from '@radix-ui/themes'
import { useTaskList } from '@pages/taskList/TaskList.hooks'
import { TaskCreationForm } from '@organisms/taskCreationForm'
import { TaskItem } from '@organisms/taskItem'

export const TaskList: React.FC = () => {
  const { todos, handleAddTask, handleToggleTask, handleDeleteTask } =
    useTaskList()

  return (
    <Container maxWidth="800px" p="16px">
      <Text as="p" mb="4" size="8">
        TODO リスト
      </Text>
      <TaskCreationForm onSubmit={handleAddTask} />
      <Flex direction="column" gap="8px" mt="4">
        {todos.map((todo) => (
          <TaskItem
            id={todo.id}
            isLineThrough={todo.completed}
            key={todo.id}
            onDelete={handleDeleteTask}
            onToggle={handleToggleTask}
            value={todo.task}
          />
        ))}
      </Flex>
    </Container>
  )
}
