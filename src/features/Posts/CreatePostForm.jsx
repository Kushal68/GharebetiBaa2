import styled from 'styled-components';
import Input from '../../ui/Input';
import Form from '../../ui/Form';
import Button from '../../ui/Button';
import Textarea from '../../ui/Textarea';
import { useForm } from 'react-hook-form';
import FormRow from '../../ui/FormRow';

import { useCreatePost } from '../Posts/useCreatePost';

import { useDispatch } from 'react-redux';
import { saveRoom } from './PostSlice';
import { useNavigate } from 'react-router-dom';
const Label = styled.label`
  font-weight: 500;
`;
function CreatePostForm({ cabinToEdit = {}, onCloseModal }) {
  const navigate = useNavigate();
  const dispatch = useDispatch(); // Initialize dispatch
  const { createPost, isCreating } = useCreatePost();
  const isWorking = isCreating;
  const { register, handleSubmit, reset, getValues, formState } = useForm({
    // defaultValues: isEditSession ? editValues : {},
    defaultValues: {},
  });
  const { errors } = formState;

  const onSubmit = (data) => {
    dispatch(
      saveRoom(
        // Dispatch saveRoom action
        data.title,
        Number(data.roomNumbers),
        // data.sharedRoom,
        Number(data.preferredFloor),
        data.location,
        data.description,
      ),
    );
    navigate('/editMap');
    // reset(); // Reset the form after successful submission
    // onCloseModal?.(); // Close modal if available
  };
  function onError(errors) {
    console.log(errors);
  }
  return (
    <Form
      onSubmit={handleSubmit(onSubmit, onError)}
      type={onCloseModal ? 'modal' : 'regular'}
    >
      <FormRow label="Title" error={errors?.title?.message}>
        <Input
          type="text"
          id="title"
          disabled={isWorking}
          {...register('title', {
            required: 'This field is required',
          })}
        />
      </FormRow>
      <FormRow label="Total room needed: " error={errors?.roomNumbers?.message}>
        <Input
          type="number"
          id="roomNumbers"
          disabled={isWorking}
          {...register('roomNumbers', {
            required: 'This field is required',
            min: {
              value: 1,
              message: 'Capacity should be at least 1',
            },
          })}
        />
      </FormRow>
      {/* <FormRow
        label="Indoor bathroom needed"
        error={errors?.indoorBathroom?.message}
      >
        <Input type="checkbox" id="indoorBathroom" disabled={isWorking} />
      </FormRow> */}
      {/* <FormRow label="Shared room" error={errors?.sharedRoom?.message}>
        <Input type="checkbox" id="sharedRoom" disabled={isWorking} />
      </FormRow> */}
      <FormRow label="Preferred Floor" error={errors?.preferredFloor?.message}>
        <Input
          type="number"
          id="preferredFloor"
          disabled={isWorking}
          {...register('preferredFloor', {
            required: 'This field is required',
            min: {
              value: 1,
              message: 'Capacity should be at least 1',
            },
          })}
        />
      </FormRow>
      <FormRow label="Location" error={errors?.location?.message}>
        <Input
          type="text"
          id="location"
          disabled={isWorking}
          {...register('location', {
            required: 'This field is required',
          })}
        />
      </FormRow>
      <FormRow
        label="Description for website"
        error={errors?.description?.message}
      >
        <Textarea
          type="number"
          id="description"
          disabled={isWorking}
          defaultValue=""
          {...register('description', {
            required: 'This field is required',
          })}
        />
      </FormRow>
      <FormRow>
        {/* type is an HTML attribute! */}
        <Button
          variation="secondary"
          type="reset"
          onClick={() => onCloseModal?.()}
        >
          Cancel
        </Button>
        <Button variation="primary" size="medium">
          Create Post
        </Button>
      </FormRow>
    </Form>
  );
}

export default CreatePostForm;
