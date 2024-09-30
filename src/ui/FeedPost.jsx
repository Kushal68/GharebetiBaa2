import styled from 'styled-components';
import { FaComment, FaPaperPlane } from 'react-icons/fa';
import ShowMap from '../features/Posts/ShowMap';

const PostContainer = styled.div`
  background-color: var(--color-grey-0);
  width: 77%;
  margin: auto;
  padding: 2rem;
  border-radius: var(--border-radius-md);
  box-shadow: var(--shadow-md);
  margin-bottom: 4rem;
`;

const PostHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const ProfilePicture = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const ProfileName = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--color-grey-800);
`;

const PostTitle = styled.h2`
  font-size: 1.8rem;
  margin: 1.5rem 0;
  color: var(--color-blue-600);
`;

const PostDescription = styled.p`
  font-size: 1.4rem;
  color: var(--color-grey-700);
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const PostDetails = styled.div`
  font-size: 1.2rem;
  color: var(--color-grey-600);
  margin: 1rem 0;
`;

const PostImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: var(--border-radius-md);
  margin: 1.5rem 0;
  box-shadow: var(--shadow-sm);
`;

const PostActions = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
`;

const CommentButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 1.4rem;
  color: var(--color-blue-600);
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    color: var(--color-blue-800);
  }
`;

const MessageButton = styled.button`
  background-color: var(--color-orange-500);
  border: none;
  color: white;
  padding: 0.8rem 1.6rem;
  border-radius: var(--border-radius-sm);
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    background-color: var(--color-orange-700);
  }
`;

const CommentSection = styled.div`
  margin-top: 2rem;
  border-top: 1px solid var(--color-grey-200);
  padding-top: 1.5rem;
`;

const CreatedAt = styled.div`
  font-size: 1.2rem;
  color: var(--color-grey-500);
  margin: 0.5rem 0;
`;

function FeedPost({ post }) {
  console.log(post.geoJson);

  // Format the creation date
  const formattedDate = new Date(post.createdAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <PostContainer>
      <PostHeader>
        <ProfilePicture src="/public/logo.png" alt="Profile" />
        <ProfileName>{post.creator.name}</ProfileName>
      </PostHeader>
      <PostTitle>{post.title}</PostTitle>
      <PostDescription>{post.description}</PostDescription>
      <PostDetails>
        <div>Location: {post.location}</div>
        <div>Room Numbers: {post.roomNumbers}</div>
        <div>Preferred Floor: {post.preferredFloor}</div>
      </PostDetails>
      <CreatedAt>Posted on: {formattedDate}</CreatedAt>
      <ShowMap geoJson={post.geoJson} />
      {/* <PostImage src="/public/map.jpeg" alt="Post" /> */}
      <PostActions>
        <CommentButton>
          <FaComment /> Comment
        </CommentButton>
        <MessageButton>
          <FaPaperPlane /> Message
        </MessageButton>
      </PostActions>
      <CommentSection>{/* Add comment list or input here */}</CommentSection>
    </PostContainer>
  );
}

export default FeedPost;
