import styled from 'styled-components';
import FeedPost from '../ui/FeedPost';
import Button from '../ui/Button';
import RightSide from '../ui/RightSide';
import Modal from '../ui/Modal';
import CreatePostForm from '../features/Posts/CreatePostForm';
import { usePosts } from '../features/Posts/usePosts';
import Spinner from '../ui/Spinner';

const HomeContainer = styled.div`
  display: flex;
  /* width: ; */
  gap: 2rem;
  /* padding: 2rem; */
  background-color: var(--color-grey-100);
  height: 100vh;
  /* background-color: green; */
`;

const LeftContainer = styled.div`
  width: 70%;
  /* flex: 4; */
  background-color: var(--color-grey-100);
  /* background-color: blue; */
  padding: 1.6rem;
  /* box-shadow: var(--shadow-md); */
  border-radius: var(--border-radius-md);
  overflow-y: scroll;
  /* width: 80%; */
  margin: 0 auto;
  /* margin-bottom: 5rem; */
`;

const RightContainer = styled.div`
  /* flex: 1; */
  width: 25%;
  background-color: white;
  /* background-color: red; */
  padding: 1.6rem;
  box-shadow: var(--shadow-md);
  border-radius: var(--border-radius-md);
`;
const FeedPostButton = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 3rem;
`;
const FeedPostSection = styled.div`
  display: flex;
  flex-direction: column;
  /* background-color: red; */
`;
const H1 = styled.h1`
  color: var(--color-grey-700);
`;
const Plus = styled.span`
  /* font-size: 2%; */
`;
// Home component
function Home() {
  const { isLoading, posts, error } = usePosts();
  if (isLoading) return <Spinner />;
  return (
    <HomeContainer>
      <LeftContainer>
        <FeedPostButton>
          <H1>Welcome</H1>
          <Modal>
            <Modal.Open opens="cabin-form">
              <div>
                <Button variation="secondary" size="medium">
                  Create post +
                </Button>
              </div>
            </Modal.Open>
            <Modal.Window name="cabin-form">
              <CreatePostForm />
            </Modal.Window>
          </Modal>
        </FeedPostButton>
        <FeedPostSection>
          {posts.posts.map((post) => (
            <FeedPost key={post.id} post={post} />
          ))}
          {/* <FeedPost />
          <FeedPost />
          <FeedPost /> */}
        </FeedPostSection>
      </LeftContainer>
      <RightContainer>
        <RightSide />
        {/* You can map over an array of posts and render FeedPost components */}
      </RightContainer>
    </HomeContainer>
  );
}

export default Home;
