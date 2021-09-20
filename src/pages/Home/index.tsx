import { FaPlus } from 'react-icons/fa';

import { AppLayout } from '../../layouts/AppLayout';
import { Card, User } from '../../components/Card';

import { Container, Header, Title, NewUserButton, UserSection } from './styles';

import { useHistory } from 'react-router';
import { useCallback, useEffect, useState } from 'react';

import api from '../../services/api';
import { toast } from 'react-toastify';

export function Home() {
  const history = useHistory();
  const [users, setUsers] = useState<User[]>([]);

  function handleOnNewUser() {
    history.push('/user/new');
  }

  const handleDeleteUser = useCallback(
    (id: string) => {
      api.delete(`/user/${id}`).then(() => {
        const newUser = users.filter((user) => user?.code !== id);
        setUsers(newUser);
        toast.success('Usuário deletado com sucesso!');
      });
    },
    [users]
  );

  useEffect(() => {
    api
      .get('/user')
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

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
            <Card
              key={index}
              user={user}
              action={() => handleDeleteUser(user?.code)}
            />
          ))}
        </UserSection>
      </Container>
    </AppLayout>
  );
}
