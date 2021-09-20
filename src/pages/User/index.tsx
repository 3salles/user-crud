import { useHistory, useParams } from 'react-router-dom';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';


import { AppLayout } from '../../layouts/AppLayout';

import {
  Container,
  Header,
  InfosSection,
  InfosData,
  Field,
  Footer,
  CancelButton,
  SaveButton,
  Input,
} from './styles';
import { useEffect, useState } from 'react';
import api from '../../services/api';
import { PhotoDropzone } from '../../components/PhotoDropzone';

interface NewUserFormData {
  name: string;
  birth: string;
}

function formatDate(date: any) {
  return new Date(date).toLocaleDateString();
}

const newUserFormSchema = yup.object().shape({
  name: yup.string().required('Nome obrigatório'),
  birth: yup.string()
    .required('Data obrigatória'),
});

export function User() {
  const { register, handleSubmit, formState, reset } = useForm({
    resolver: yupResolver(newUserFormSchema),
    mode: 'onChange',
  });
  const { errors, isDirty, isValid } = formState;
  const { id } = useParams<{ id: string }>()
  const history = useHistory()

  const [name, setName] = useState('')
  const [birth, setBirth] = useState('')
  const [avatar, setAvatar] = useState(null)

  console.log('avatar: ', avatar)


  useEffect(() => {
    if (id) {
      api.get(`/user/${id}`).then((response) => {
        setName(response.data.name)
        setBirth(response.data.birth)

        reset({
          name: response.data.name,
          birth: response.data.birth
        })
      }).catch((error) => console.log(error))
    }
  }, [id, reset])

  const handleCreateNewUser: SubmitHandler<NewUserFormData> = async (
    data
  ) => {
    const newData = { ...data };
    if (id) {
      const formData = new FormData()

      formData.append('id', id);

      Object.entries(newData).forEach(([column, value]) => {
            formData.append(column, String(value));
          });


          api.patch("/user", formData).then(() => {
            // add toast
          }).catch((error) => {
            console.log(error)
            // toast
          })
    } else {
      const formData = new FormData();
      Object.entries(newData).forEach(([column, value]) => {
        formData.append(column, String(value));
      });

      api.post('/user', formData).then(() => {
        history.goBack()
        // add toast
      }).catch((error) => {
        console.log(error)
        // add toast
      })
    }
  };


  function handleOnCancel() {
    window.history.back();
  }

  return (
    <AppLayout>
      <Container>
        <Header>
          <h1>{id ? 'Editar Usuário' : 'Novo Usuário'}</h1>
        </Header>
        <form onSubmit={handleSubmit(handleCreateNewUser)}>
          <InfosSection>
            <PhotoDropzone file={avatar} setFile={setAvatar} />
            <InfosData>
              <Field>
                <label>Nome Completo</label>
                <Input
                  type='text'
                  placeholder='Digite o nome completo'
                  {...register('name')}
                  onChange={(event) => setName(event.target.value)}
                />
                <p>{errors?.name?.message}</p>
              </Field>
              <Field>
                <label>Data de Nascimento</label>
                <Input
                  type='text'
                  placeholder='dd/mm/yyyy'
                  {...register('birth')}
                  onChange={(event) => setBirth(event.target.value)}
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
