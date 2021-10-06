import styled from 'styled-components';

export const MainBlock = styled.section`
  display: flex;
  overflow: hidden;
`;

export const AvatarContainer = styled.div`
  height: 250px;
  width: 250px;
  flex: 1;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 10px 0 0 10px;
    border: 2px solid ${({ theme }) => theme.default};
    overflow: hidden;
  }
`;

export const SideBlock = styled.div`
  display: grid;
  grid-template:
    'about contacts' 3fr
    'status status' 1fr / 1fr 1fr;
  flex: 2;
  border: 2px solid ${({ theme }) => theme.default};
  border-radius: 0 10px 10px 0;
  overflow: hidden;
  font-size: 20px;
  & > *:first-child {
    border-right: 2px solid ${({ theme }) => theme.default};
  }
  & > *:last-child {
    border-top: 2px solid ${({ theme }) => theme.default};
  }
`;

export const AboutBlock = styled.div`
  grid-area: about;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  & div:first-child {
    text-transform: capitalize;
    font-weight: 600;
  }
`;

export const StatusBlock = styled.div`
  grid-area: status;
  padding: 10px;
`;

export const ContactBlock = styled.ul`
  grid-area: contacts;
  padding: 10px;
`;
