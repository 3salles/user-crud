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

import { GoPencil } from 'react-icons/go';
import { FaTrash } from 'react-icons/fa';

export function Card() {
  return (
    <Container>
      <Infos>
        <Code>DEL00</Code>
        <div>
          <Photo>
            <PhotoImage
              src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80'
              alt='Foto'
            />
          </Photo>
          <div>
            <Name>Nome Completo</Name>
            <BirthDate>dd/mm/yyyy</BirthDate>
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
