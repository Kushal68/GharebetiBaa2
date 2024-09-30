import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createPostApi } from '../../services/apiHome';
import toast from 'react-hot-toast';

export function useCreatePost() {
  const queryClient = useQueryClient();
  const { mutate: createPost, isLoading: isCreating } = useMutation({
    mutationFn: createPostApi,
    onSuccess: () => {
      toast.success('New post sucessfully created');
      queryClient.invalidateQueries({
        queryKey: ['cabins'],
      });
    },
    onError: (err) => toast.error(err.message),
  });
  return { createPost, isCreating };
}
