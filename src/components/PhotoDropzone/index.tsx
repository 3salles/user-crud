import { Photo, ChangeImage, PhotoImage } from './styles';
import { useDropzone } from 'react-dropzone';
import { useEffect } from 'react';
import { MdDelete } from 'react-icons/md';

interface PhotoDropzoneProps {
  file: any;
  setFile: (image: any) => void;
}

export function PhotoDropzone({ file, setFile }: PhotoDropzoneProps) {
  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: (acceptedFiles) => {
      setFile(
        Object.assign(acceptedFiles[0], {
          preview: URL.createObjectURL(acceptedFiles[0]),
        })
      );
    },
  });

  function handleOnDelete() {
    setFile(null);
  };

  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      if (file) {
        URL.revokeObjectURL(file.preview);
      }
    },
    [file]
  );

  return (
    <>
      {file ? (
        <Photo>
          <PhotoImage src={file.preview} />
          <ChangeImage type='button' onClick={handleOnDelete}>
            <MdDelete />
          </ChangeImage>
        </Photo>
      ) : (
        <Photo {...getRootProps()} type='button'>
          <input {...getInputProps()} multiple={false} />
        </Photo>
      )}
    </>
  );
}
