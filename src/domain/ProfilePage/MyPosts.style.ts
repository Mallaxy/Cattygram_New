import styled from 'styled-components';

export const MainBlock = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1em;
  border: 2px solid ${({ theme }) => theme.default};
  border-radius: 10px;
  padding: 1em;
`;

export const TopBlock = styled.div`
  align-self: flex-start;
  div {
    display: flex;
    justify-content: space-between;
  }
`;

export const Textarea = styled.textarea`
  grid-area: textarea;
  font: inherit;
  padding: 10px;
  border: 2px solid ${({ theme }) => theme.default};
  border-radius: 10px;
  width: 300px;
  height: 75px;
  resize: none;
  margin-bottom: 1em;
`;

export const PostBlock = styled.article`
  display: flex;
  gap: 1em;
`;

export const PostAvatarContainer = styled.div`
  width: 100px;
  height: 100px;
  flex-basis: 100px;
  border: 2px solid ${({ theme }) => theme.default};
  border-radius: 10px;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const PostContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  h3 {
    text-transform: uppercase;
    font-weight: 600;
  }
`;
