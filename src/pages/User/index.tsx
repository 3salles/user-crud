import { useHistory } from 'react-router-dom';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';

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

interface NewUserFormData {
  name: string;
  code: string;
  birth: string;
}

function formatDate(date: any) {
  return new Date(date).toLocaleDateString();
}

const newUserFormSchema = yup.object().shape({
  name: yup.string().required('Nome obrigatório'),
  code: yup.string().required('Código obrigatório'),
  birth: yup
    .date()
    .max(new Date(), 'Você é um viajante do tempo?!')
    .required('Data obrigatória'),
});

export function User() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(newUserFormSchema),
    mode: 'onChange',
  });
  const { errors, isDirty, isValid } = formState;

  const handleCreateNewUser: SubmitHandler<NewUserFormData> = async (
    values
  ) => {
    console.log(values);
    // Add toastfy
  };

  function handleOnCancel() {
    window.history.back();
  }

  return (
    <AppLayout>
      <Container>
        <Header>
          <h1>Novo usuário</h1>
        </Header>
        <form onSubmit={handleSubmit(handleCreateNewUser)}>
          <InfosSection>
            <Photo>
              <ChangeImage type="button">
                <GoPencil />
              </ChangeImage>
            </Photo>
            <InfosData>
              <Field>
                <label>Código</label>
                <Input
                  type='text'
                  placeholder='Digite o código'
                  {...register('code')}
                />
                <p>{errors?.code?.message}</p>
              </Field>
              <Field>
                <label>Nome Completo</label>
                <Input
                  type='text'
                  placeholder='Digite o nome completo'
                  {...register('name')}
                />
                <p>{errors?.name?.message}</p>
              </Field>
              <Field>
                <label>Data de Nascimento</label>
                <Input
                  type='date'
                  placeholder='Selecione uma data'
                  {...register('birth')}
                />
                <p>{errors?.birth?.message}</p>
              </Field>
            </InfosData>
          </InfosSection>
          <Footer>
            <CancelButton onClick={handleOnCancel}>Cancelar</CancelButton>
            <SaveButton
              type='submit'
              disabled={!isDirty || (isDirty && !isValid)}
            >
              Salvar
            </SaveButton>
          </Footer>
        </form>
      </Container>
    </AppLayout>
  );
}
