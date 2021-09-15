import styled from "styled-components";

export const Container = styled.section`
  padding: 3rem;
  width: 100%;
`

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Title = styled.h1`
  font-size: 24px;
`
export const NewUserButton = styled.button`
  background: #4F84CA;
  padding: 1rem 1.5rem;
  border-radius: 4px;
  color: #FFF;
  text-transform: uppercase;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const UserSection = styled.article`
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`
