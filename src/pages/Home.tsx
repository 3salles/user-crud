import { AppLayout } from '../layouts/AppLayout';

import { FaPlus } from 'react-icons/fa';

import { Container, Header, Title, NewUserButton } from './styles';
import { Card } from '../components/Card';

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
        <article>
          <Card />
        </article>
      </Container>
    </AppLayout>
  );
}
