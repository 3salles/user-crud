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
import axios from 'axios';

interface Avatar {
  name: string;
  path: string;
  preview: string;
}
interface NewUserFormData {
  name: string;
  birth: string;
  avatar: Avatar | null;
}

function formatDate(date: any) {
  return new Date(date).toLocaleDateString();
}

const newUserFormSchema = yup.object().shape({
  name: yup.string().required('Nome obrigatório'),
  birth: yup.string().required('Data obrigatória'),
  avatar: yup.object().shape({
    name: yup.string(),
    preview: yup.string(),
    path: yup.string(),
  }),
});

export function User() {
  const { register, handleSubmit, formState, reset } = useForm({
    resolver: yupResolver(newUserFormSchema),
    mode: 'onChange',
  });
  const { errors, isDirty, isValid } = formState;
  const { id } = useParams<{ id: string }>();
  const history = useHistory();

  const [name, setName] = useState('');
  const [birth, setBirth] = useState('');
  const [avatar, setAvatar] = useState<Blob | string>('');
  const [files, setFiles] = useState([]);

  // const avatarUrl = avatar?.preview?.replace("blob:", '')

  // console.log("removeURL: ", avatar?.preview?.replace("blob:", ''))

  useEffect(() => {
    if (id) {
      api
        .get(`/user/${id}`)
        .then((response) => {
          setName(response.data.name);
          setBirth(response.data.birth);
          setAvatar(response.data.avatar.preview);

          reset({
            name: response.data.name,
            birth: response.data.birth,
            avatar: response.data.avatar.preview,
          });
        })
        .catch((error) => console.log(error));
    }
  }, [id, reset]);

  function uploadAvatar() {}

  const handleCreateNewUser: SubmitHandler<NewUserFormData> = async (data) => {
    const formData = new FormData();
    formData.append('file', avatar);
    formData.append('upload_preset', 'o7o1agnl');

    axios
      .post('https://api.cloudinary.com/v1_1/trissalles/image/upload', formData)
      .then((response) => {
        let newData = {
          name: data.name,
          birth: data.birth,
          avatar: response.data.url,
        };

        api
          .post('/user', newData)
          .then(() => {
            history.goBack();
            console.log('Success');
          })
          .catch((err) => {
            console.error(err);
            console.log('Error');
          });
      });
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
              // disabled={!isDirty || (isDirty && !isValid)}
            >
              Salvar
            </SaveButton>
          </Footer>
        </form>
      </Container>
    </AppLayout>
  );
}
