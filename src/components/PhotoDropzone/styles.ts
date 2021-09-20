import styled from 'styled-components';

export const Photo = styled.div`
  height: 150px;
  width: 150px;
  border-radius: 999px;
  background: gray;
  position: relative;
  cursor: pointer;
`;
export const PhotoImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 999px;
`;

export const ChangeImage = styled.button`
  position: absolute;
  font-size: 1.125rem;
  color: #fff;
  bottom: 0.75rem;
  right: 1.5rem;
`;
