import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { saveDetails } from './PropertySlice';

// Styled components for form elements
const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-weight: bold;
`;

const Input = styled.input`
  padding: 0.5rem;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const TextArea = styled.textarea`
  padding: 0.5rem;
  border-radius: 4px;
  border: 1px solid #ccc;
  resize: none;
`;

const PreviewImages = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 4px;
  }
`;

function Description() {
  const dispatch = useDispatch();
  const detailsData = useSelector((state) => state.propertymap.details) || {
    title: '',
    description: '',
    photos: [],
  };

  // Handle input changes and update Redux on every change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch(
      saveDetails({
        ...detailsData,
        [name]: value,
      }),
    );
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);

    const updatedData = {
      ...detailsData,
      photos: files, // Store the actual file objects for uploading
    };

    dispatch(saveDetails(updatedData));
  };

  // Handle image file selection and update Redux
  // const handleImageChange = (e) => {
  //   // console.log(e.target.files);
  //   const files = Array.from(e.target.files);
  //   const photoUrls = files.map((file) => URL.createObjectURL(file));

  //   const updatedData = {
  //     ...detailsData,
  //     photos: photoUrls, // Store image URLs
  //     photos_list: e.target.files, // Store the actual file objects
  //   };

  //   dispatch(saveDetails(updatedData));

  //   // Revoke the object URLs on unmount
  //   return () => {
  //     photoUrls.forEach((url) => URL.revokeObjectURL(url));
  //   };
  // };
  // const handleImageChange = (e) => {
  //   const files = Array.from(e.target.files);
  //   const photoUrls = files.map((file) => URL.createObjectURL(file)); // For preview

  //   // Store the actual files in Redux state
  //   const updatedData = {
  //     ...detailsData,
  //     photos: files, // Store the actual file objects
  //   };

  //   dispatch(saveDetails(updatedData));

  //   // Revoke the object URLs on unmount
  //   return () => {
  //     photoUrls.forEach((url) => URL.revokeObjectURL(url));
  //   };
  // };

  return (
    <Form>
      {/* Title */}
      <FormGroup>
        <Label htmlFor="title">Property Title</Label>
        <Input
          type="text"
          id="title"
          name="title"
          value={detailsData.title}
          onChange={handleInputChange}
          placeholder="Enter property title"
          required
        />
      </FormGroup>

      {/* Description */}
      <FormGroup>
        <Label htmlFor="description">Property Description</Label>
        <TextArea
          id="description"
          name="description"
          rows="4"
          value={detailsData.description}
          onChange={handleInputChange}
          placeholder="Enter property description"
        />
      </FormGroup>

      {/* Photos */}
      <FormGroup>
        <Label htmlFor="photos">Upload Photos</Label>
        <Input
          type="file"
          id="photos"
          name="photos"
          multiple
          accept="image/*"
          onChange={handleImageChange}
        />
      </FormGroup>

      {/* Image Preview */}
      {detailsData.photos.length > 0 && (
        <FormGroup>
          <Label>Image Preview</Label>
          <PreviewImages>
            {detailsData.photos.map((photo, index) => (
              <img key={index} src={photo} alt={`Preview ${index + 1}`} />
            ))}
          </PreviewImages>
        </FormGroup>
      )}
    </Form>
  );
}

export default Description;
