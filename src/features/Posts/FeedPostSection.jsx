import styled from 'styled-components';
const Empty = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
  text-align: center;
  margin: 2.4rem;
`;
const FeedPostSections = styled.div`
  display: flex;
  flex-direction: column;
  /* background-color: red; */
`;
const FeedPostSection = ({ data, render }) => {
  if (!data.length) return <Empty>No data to show at the moment</Empty>;

  //   return <FeedPostSections>{data.map(render)}</FeedPostSections>;
  return <FeedPostSections>Hello</FeedPostSections>;
  //   return <div>{data.map((post) => render(post))}</div>;
};
export default FeedPostSection;
