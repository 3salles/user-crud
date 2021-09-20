import { GoPencil } from 'react-icons/go';
import { FaTrash } from 'react-icons/fa';
import axios from 'axios'

import { useCallback } from 'react';
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

export interface User {
  avatar: string;
  name: string;
  birth: string;
  code: string;
}

interface CardProps {
  user: User;
  action: () => void;
}

export function Card({user, action}: CardProps) {
  return (
    <Container>
      <Infos>
        <div>
          <Photo>
            <PhotoImage
              src={user?.avatar}
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
        <DeleteButton onClick={action}>
          <FaTrash />
        </DeleteButton>
      </ButtonsSection>
    </Container>
  );
}
