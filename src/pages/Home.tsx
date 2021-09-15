import { AppLayout } from '../layouts/AppLayout';

import { FaPlus } from 'react-icons/fa';

import { Container, Header, Title, NewUserButton } from './styles';

export function Home() {
  return (
    <AppLayout>
      <Container>
        <Header>
          <Title>Usuários</Title>
          <NewUserButton>
            <FaPlus />
            <p>Novo usuário</p>
          </NewUserButton>
        </Header>
        <article></article>
      </Container>
    </AppLayout>
  );
}
