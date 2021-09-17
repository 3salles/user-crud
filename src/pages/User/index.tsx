import { GoPencil } from 'react-icons/go';

import { AppLayout } from '../../layouts/AppLayout';

import {
  Container,
  Header,
  InfosSection,
  Photo,
  PhotoImage,
  ChangeImage,
  InfosData,
  Field,
  Footer,
  CancelButton,
  SaveButton,
  Input,
} from './styles';

export function User() {
  return (
    <AppLayout>
      <Container>
        <Header>
          <h1>Novo usuário</h1>
        </Header>
        <form>
          <InfosSection>
            <Photo>
              <ChangeImage>
                <GoPencil />
              </ChangeImage>
            </Photo>
            <InfosData>
              <Field>
                <label>Código</label>
                <Input type='text' placeholder='Digite o código' />
              </Field>
              <Field>
                <label>Nome Completo</label>
                <Input type='text' placeholder='Digite o nome completo' />
              </Field>
              <Field>
                <label>Data de Nascimento</label>
                <Input type='date' placeholder='Selecione uma data' />
              </Field>
            </InfosData>
          </InfosSection>
          <Footer>
            <CancelButton>Cancelar</CancelButton>
            <SaveButton>Salvar</SaveButton>
          </Footer>
        </form>
      </Container>
    </AppLayout>
  );
}
