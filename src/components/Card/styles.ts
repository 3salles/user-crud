import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  border-radius: 8px;
`;

export const Infos = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  > div {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`;

export const Code = styled.p`
  font-weight: bold;
  text-transform: uppercase;
  font-size: 1rem;
`;

export const Photo = styled.div`
  height: 64px;
  width: 64px;
  border-radius: 999px;
`;
export const PhotoImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 999px;
`;

export const Name = styled.p`
  font-size: 0.875rem;
`;

export const BirthDate = styled.span`
  font-size: 0.75rem;
  color: #999999;
`;

export const ButtonsSection = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const EditButton = styled.button`
  font-size: 22px;
  color: #d5dbef;

  &:hover {
    color: var(--button-background);
  }
`;

export const DeleteButton = styled.button`
  font-size: 18px;
  color: #d5dbef;

  &:hover {
    color: var(--red);
  }
`;
