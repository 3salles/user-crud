import styled from "styled-components";

export const Container = styled.article`
  padding: 3rem;
  width: 100%;

  > form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`
export const Header = styled.header`
  margin-bottom: 1.5rem;

  > h1 {
    font-size: 24px;
  }
`

export const InfosSection = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 2rem;
`

export const Photo = styled.div`
  height: 150px;
  width: 150px;
  border-radius: 999px;
  background: gray;
  position: relative;
`
export const PhotoImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 999px;
`

export const ChangeImage = styled.button`
  position: absolute;
  font-size: 1.125rem;
  color: #FFF;
  bottom: 0.75rem;
  right: 1.5rem;
`

export const InfosData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
`
export const Field = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  width: 100%;

  > label {
    font-size: 0.875rem;
    font-weight: bold;
    color: #999999;
  }

  > p {
    font-size: 0.875rem;
    color: var(--red);
  }
`

export const Input = styled.input`
  width: 100%;
  border: 0;
  border-bottom: 1px solid #999999;
  background: 0;
  padding: 0.5rem 0;
  color: #767676;

  &::placeholder{
    color: #C2C2C2;
  }
`

export const Footer = styled.tfoot`
  margin-top: 3rem;
  display: flex;
  gap: 5rem;
`

export const CancelButton = styled.button`
  padding: 1rem 1.5rem;
  border-radius: 4px;
  text-transform: uppercase;
  font-weight: bold;
  border: 1px solid var(--button-background);
  color: var(--button-background);

  &:hover{
    background-color: var(--red);
    color: #FFF;
    border-color: var(--red);
  }
`

export const SaveButton = styled.button`
  padding: 1rem 1.5rem;
  border-radius: 4px;
  color: #FFF;
  text-transform: uppercase;
  font-weight: bold;
  background: var(--button-background);
`
