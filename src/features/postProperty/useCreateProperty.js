import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createPropertyApi } from '../../services/apiProperty';
import toast from 'react-hot-toast';

// export function useCreateProperty() {
//   const queryClient = useQueryClient();
//   const { mutate: createProperty, isLoading: isCreating } = useMutation({
//     mutationFn: createPropertyApi,
//     onSuccess: () => {
//       toast.success('New post sucessfully created');
//       queryClient.invalidateQueries({
//         queryKey: ['properties'],
//       });
//     },
//     onError: (err) => toast.error(err.message),
//   });
//   return { createProperty, isCreating };
// }
export function useCreateProperty() {
  const queryClient = useQueryClient();

  const { mutate: createProperty, isLoading: isCreating } = useMutation({
    mutationFn: async (propertyData) => {
      // Create FormData object
      const formData = new FormData();

      // Append all text fields
      formData.append('layout', JSON.stringify(propertyData.layout));
      formData.append('location', JSON.stringify(propertyData.location));
      formData.append('details', JSON.stringify(propertyData.details));
      formData.append('amenities', JSON.stringify(propertyData.amenities));
      formData.append('price', JSON.stringify(propertyData.price));
      formData.append('social', JSON.stringify(propertyData.social));

      // Append all files (images)
      Array.from(propertyData.details.photos).forEach((file, index) => {
        formData.append(`photos_list`, file); // 'photos_list' matches Multer field name
      });

      // Send data to the API
      await createPropertyApi(formData);
    },
    onSuccess: () => {
      toast.success('New post successfully created');
      queryClient.invalidateQueries({
        queryKey: ['properties'],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { createProperty, isCreating };
}
