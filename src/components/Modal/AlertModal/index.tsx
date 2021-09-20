import Modal from 'react-modal';

import { GrClose } from 'react-icons/gr';

import { customStyles, Content, Footer, YesButton, NoButton } from './styles';

interface AlertModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function AlertModal({ isOpen, onRequestClose }: AlertModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel='Modal de Alerta'
      style={customStyles}
    >
      <Content>
        <header>
          <button onClick={onRequestClose}>
            <GrClose />
          </button>
        </header>
        <img src='https://img.icons8.com/external-flatarticons-blue-flatarticons/65/000000/external-alert-web-security-flatarticons-blue-flatarticons.png' />

        <h2>Cuidado!</h2>
        <p>Você realmente quer deletar usuário? </p>
        <span>Esta operação não pode ser desfeita!</span>

        <Footer>
          <NoButton>Não</NoButton>
          <YesButton>Sim</YesButton>
        </Footer>
      </Content>
    </Modal>
  );
}
