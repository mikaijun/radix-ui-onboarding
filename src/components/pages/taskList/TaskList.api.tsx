import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { TaskCreationFormData } from '@organisms/taskCreationForm'

type Todo = {
  id: number
  task: string
  completed: boolean
}

const endPoint = '/api/todos'
const queryKey = ['todos']
const headers = { 'Content-Type': 'application/json' }

const fetchTodos = async (): Promise<Todo[]> => {
  const res = await fetch(endPoint)
  return res.json()
}

export const useQueryTask = () => {
  const queryClient = useQueryClient()

  const { data: todos = [] } = useQuery({
    queryKey,
    queryFn: fetchTodos,
  })

  const addTaskMutation = useMutation({
    mutationFn: async (data: TaskCreationFormData) => {
      const res = await fetch(endPoint, {
        method: 'POST',
        headers,
        body: JSON.stringify(data),
      })
      return res.json()
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey })
    },
  })

  const toggleTaskMutation = useMutation({
    mutationFn: async (id: number) => {
      const res = await fetch(endPoint, {
        method: 'PUT',
        headers,
        body: JSON.stringify({ id }),
      })
      return res.json()
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey })
    },
  })

  const deleteTaskMutation = useMutation({
    mutationFn: async (id: number) => {
      await fetch(endPoint, {
        method: 'DELETE',
        headers,
        body: JSON.stringify({ id }),
      })
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey })
    },
  })

  return {
    todos,
    addTaskMutation,
    toggleTaskMutation,
    deleteTaskMutation,
  }
}
