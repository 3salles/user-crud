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
  Foto: string;
  Nome: string;
  DtNasci: string;
  Codigo: string;
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
              src={user?.Foto}
              alt={user?.Nome}
            />
          </Photo>
          <div>
            <Name>{user?.Nome}</Name>
            <BirthDate>{user?.DtNasci}</BirthDate>
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
