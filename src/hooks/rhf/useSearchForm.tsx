import { useForm, type UseFormReturn } from 'react-hook-form'

interface useSearchFormValues {
  search: string
}

function useSearchForm(): UseFormReturn<useSearchFormValues, any> {
  const form = useForm({
    defaultValues: {
      search: ''
    }
  })

  return form
}

export default useSearchForm
