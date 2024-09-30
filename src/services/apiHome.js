export async function getPosts() {
  const URL = 'http://localhost:8080/home/posts';

  const response = await fetch(URL, {
    method: 'GET', // Make a POST request
    headers: {
      'Content-Type': 'application/json', // Tell server you're sending JSON data
      Authorization:
        'Bearer ' +
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImR4bmdyZzIwNThAZ21haWwuY29tIiwidXNlcklkIjoiNjZmNTUzMTdlZWQzMjI4OWFmNGRhODdlIiwiaWF0IjoxNzI3NTIyMDY5LCJleHAiOjE3Mjc1NTgwNjl9.JP_14n8fDpdtX0Hzgqxq4QBrTDUDvYFpCZ2DAhCCd-w',
    },
  });

  if (!response.ok) {
    throw new Error('Failed to create post. Status code: ' + response.status);
  }

  const data = await response.json(); // Parse the JSON response from the server
  console.log('Post created successfully:', data);
  return data;
}

export async function createPostApi(postData, id) {
  const URL = 'http://localhost:8080/home/post'; // Your API endpoint

  try {
    const response = await fetch(URL, {
      method: 'POST', // Make a POST request
      headers: {
        'Content-Type': 'application/json', // Tell server you're sending JSON data
        Authorization:
          'Bearer ' +
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImR4bmdyZzIwNThAZ21haWwuY29tIiwidXNlcklkIjoiNjZmNTUzMTdlZWQzMjI4OWFmNGRhODdlIiwiaWF0IjoxNzI3NTIyMDY5LCJleHAiOjE3Mjc1NTgwNjl9.JP_14n8fDpdtX0Hzgqxq4QBrTDUDvYFpCZ2DAhCCd-w',
      },
      body: JSON.stringify(postData), // Convert your postData object to a JSON string
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
