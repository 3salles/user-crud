import { FaPlus } from 'react-icons/fa';

import { AppLayout } from '../../layouts/AppLayout';
import { Card } from '../../components/Card';

import { Container, Header, Title, NewUserButton, UserSection } from './styles';

import users from '../../utils/users.json';
import { useHistory } from 'react-router';

export function Home() {
  const history = useHistory();

  function handleOnNewUser() {
    history.push('/user/new');
  }

  return (
    <AppLayout>
      <Container>
        <Header>
          <Title>Usuários</Title>
          <NewUserButton onClick={handleOnNewUser}>
            <FaPlus />
            <p>Novo usuário</p>
          </NewUserButton>
        </Header>
        <UserSection>
          {users?.map((user, index) => (
            <Card key={index} user={user} />
          ))}
        </UserSection>
      </Container>
    </AppLayout>
  );
}