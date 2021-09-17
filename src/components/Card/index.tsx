import { GoPencil } from 'react-icons/go';
import { FaTrash } from 'react-icons/fa';

import {
  Container,
  Infos,
  Code,
  Photo,
  PhotoImage,
  Name,
  BirthDate,
  ButtonsSection,
  EditButton,
  DeleteButton
} from './styles';

interface User {
  code: string;
  profile: string;
  name: string;
  birth: string;
}

interface CardProps {
  user: User;
}

export function Card({user}: CardProps) {
  return (
    <Container>
      <Infos>
        <Code>{user?.code}</Code>
        <div>
          <Photo>
            <PhotoImage
              src={user?.profile}
              alt={user?.name}
            />
          </Photo>
          <div>
            <Name>{user?.name}</Name>
            <BirthDate>{user?.birth}</BirthDate>
          </div>
        </div>
      </Infos>
      <ButtonsSection>
        <EditButton>
          <GoPencil />
        </EditButton>
        <DeleteButton>
          <FaTrash />
        </DeleteButton>
      </ButtonsSection>
    </Container>
  );
}
