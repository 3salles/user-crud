import styled, { css } from 'styled-components';

interface IButtonProps {
  isActive: boolean;
}

export const Container = styled.aside`
  background: var(--navbar-background);
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 200px;
  width: 100%;
  height: 100vh;
  max-height: 100%;

  @media (max-width: 768px) {
    max-width: 100vw;
    width: 100%;
    max-height: 4rem;
    height: 100%;
    position: fixed;
    bottom: 0;
    align-items: flex-start;
    flex-direction: row;
  }
`;

export const Logo = styled.p`
  color: #f7ad00;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1.5rem;
  margin-bottom: 12rem;
  padding: 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Button = styled.button<IButtonProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #46a4c6;
  font-size: 1.125rem;

  ${({ isActive }) =>
    isActive &&
    css`
      background: #4a4b5d;
      width: 100%;
      padding: 0.5rem;
      border-left: 2px solid #46a4c6;

      @media (max-width: 768px) {
        width: 6.25rem;
        border: 0;
        border-top: 2px solid #46a4c6;
      }
    `}

  @media(max-width: 768px) {
    flex-direction: column;
  }
`;
