import { FiUsers } from 'react-icons/fi';

import { Container, Logo, Button } from './styles';

export function Navbar() {
  return (
    <Container>
      <Logo>Develcode</Logo>
      <Button isActive>
        <FiUsers />
        <p>Usuários</p>
      </Button>
    </Container>
  );
}
