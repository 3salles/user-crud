import { GoPencil } from 'react-icons/go';
import { FaTrash } from 'react-icons/fa';

import {
  Container,
  Infos,
  Photo,
  PhotoImage,
  Name,
  BirthDate,
  ButtonsSection,
  EditButton,
  DeleteButton
} from './styles';
import { useHistory } from 'react-router';
import { AlertModal } from '../Modal/AlertModal';
import { useState } from 'react';

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
  const history = useHistory();

  const [openModal, setOpenModal] = useState(false)

  function handleOnEdit () {
    history.push(`/user/edit/${user?.code}`)
  }

  function handleOnOpenModal () {
    setOpenModal(true);
  }

  function handleOnCloseModal () {
    setOpenModal(false);
  }

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
        <EditButton onClick={handleOnEdit}>
          <GoPencil />
        </EditButton>
        <DeleteButton onClick={handleOnOpenModal}>
          <FaTrash />
        </DeleteButton>
      </ButtonsSection>
      <AlertModal onRequestClose={handleOnCloseModal} isOpen={openModal} />
    </Container>
  );
}
