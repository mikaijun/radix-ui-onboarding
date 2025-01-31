import { useCallback } from 'react'
import { useQueryTask } from '#useQueryTask'
import { TaskCreationFormData } from '@organisms/taskCreationForm'

export const useTaskList = () => {
  const { todos, addTaskMutation, toggleTaskMutation, deleteTaskMutation } =
    useQueryTask()

  const handleAddTask = useCallback(
    (data: TaskCreationFormData) => {
      addTaskMutation.mutate(data)
    },
    [addTaskMutation]
  )

  const handleToggleTask = useCallback(
    (id: number) => {
      toggleTaskMutation.mutate(id)
    },
    [toggleTaskMutation]
  )

  const handleDeleteTask = useCallback(
    (id: number) => {
      deleteTaskMutation.mutate(id)
    },
    [deleteTaskMutation]
  )

  return {
    todos,
    handleAddTask,
    handleToggleTask,
    handleDeleteTask,
  }
}
