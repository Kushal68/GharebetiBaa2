// export async function createPropertyApi(postData, id) {
//   //   console.log(postData);
//   const URL = 'http://localhost:8080/property/post'; // Your API endpoint

//   try {
//     const response = await fetch(URL, {
//       method: 'POST', // Make a POST request
//       headers: {
//         'Content-Type': 'application/json', // Tell server you're sending JSON data
//         Authorization:
//           'Bearer ' +
//           'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImR4bmdyZzIwNThAZ21haWwuY29tIiwidXNlcklkIjoiNjZmNTUzMTdlZWQzMjI4OWFmNGRhODdlIiwiaWF0IjoxNzI3NTIyMDY5LCJleHAiOjE3Mjc1NTgwNjl9.JP_14n8fDpdtX0Hzgqxq4QBrTDUDvYFpCZ2DAhCCd-w',
//       },
//       body: JSON.stringify(postData), // Convert your postData object to a JSON string
//     });

//     if (!response.ok) {
//       throw new Error('Failed to create post. Status code: ' + response.status);
//     }

//     const data = await response.json(); // Parse the JSON response from the server
//     console.log('Post created successfully:', data);
//   } catch (error) {
//     console.error('Error creating post:', error);
//   }
// }
// export async function createPropertyApi(postData) {
//   const URL = 'http://localhost:8080/property/post'; // Your API endpoint
//   const images = postData.details.photos_list;
//   const updatedData = { ...postData };
//   delete updatedData.details.photos_list;
//   console.log(
//     '-----------------------------------------------------------------',
//   );
//   console.log(updatedData);
//   console.log(images);
//   //   Create a FormData object to handle both text fields and file uploads
//   const formData = new FormData();

//   // Append text fields from postData
//   formData.append('layout', JSON.stringify(updatedData.layout));
//   formData.append('location', JSON.stringify(updatedData.location));
//   formData.append('details', JSON.stringify(updatedData.details));
//   formData.append('amenities', JSON.stringify(updatedData.amenities));
//   formData.append('price', JSON.stringify(updatedData.price));
//   formData.append('social', JSON.stringify(updatedData.social));

//   // Extract and append image files from postData.details.photos_list
//   if (images) {
//     Object.values(images).forEach((file, index) => {
//       formData.append(`images[]`, file); // Ensure the field name matches the backend
//     });
//   }

//   try {
//     const response = await fetch(URL, {
//       method: 'POST',
//       headers: {
//         Authorization:
//           'Bearer ' +
//           'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImR4bmdyZzIwNThAZ21haWwuY29tIiwidXNlcklkIjoiNjZmNTUzMTdlZWQzMjI4OWFmNGRhODdlIiwiaWF0IjoxNzI3NTIyMDY5LCJleHAiOjE3Mjc1NTgwNjl9.JP_14n8fDpdtX0Hzgqxq4QBrTDUDvYFpCZ2DAhCCd-w', // Authorization header (modify as needed)
//       },
//       body: formData, // FormData will handle the correct content type
//     });

//     if (!response.ok) {
//       throw new Error('Failed to create post. Status code: ' + response.status);
//     }

//     const data = await response.json();
//     console.log('Post created successfully:', data);
//   } catch (error) {
//     console.error('Error creating post:', error);
//   }
// }
export async function createPropertyApi(formData) {
  const URL = 'http://localhost:8080/property/post'; // Your API endpoint

  try {
    const response = await fetch(URL, {
      method: 'POST',
      // No need to set 'Content-Type' for FormData, browser will automatically set the correct boundary
      headers: {
        Authorization:
          'Bearer ' +
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImR4bmdyZzIwNThAZ21haWwuY29tIiwidXNlcklkIjoiNjZmNTUzMTdlZWQzMjI4OWFmNGRhODdlIiwiaWF0IjoxNzI3NTIyMDY5LCJleHAiOjE3Mjc1NTgwNjl9.JP_14n8fDpdtX0Hzgqxq4QBrTDUDvYFpCZ2DAhCCd-w',
      },
      body: formData, // Send FormData, which includes files and other data
    });

    if (!response.ok) {
      throw new Error('Failed to create post. Status code: ' + response.status);
    }

    const data = await response.json(); // Parse the JSON response from the server
    console.log('Post created successfully:', data);
  } catch (error) {
    console.error('Error creating post:', error);
  }
}
