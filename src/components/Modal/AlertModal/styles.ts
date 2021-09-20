import { Button } from './../../Navbar/styles';
import styled from "styled-components";

export const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  header {
    width: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
  }

  h2 {
    color: var(--red);
  }

  p {
    margin-top: 1rem;
    font-size: 1rem;
  }

  span {
    font-size: 0.875rem;
  }
`

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  gap: 3rem;
  margin-top: 2rem;

  > button {

    border-radius: 8px;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 1.125rem;
    padding: 1rem;
  }
`

export const YesButton = styled.button`
  background: var(--button-background);
  color: #FFF;
`
export const NoButton = styled.button`
  border: 1px solid var(--button-background);
  color: var(--button-background);

  &:hover {
    background: var(--button-background);
    color: #FFF;
  }
`
