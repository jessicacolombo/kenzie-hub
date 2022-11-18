import { ContainerModal, ModalContent } from '../../styles/modal';
import { StyledForm } from '../../styles/form';
import { Button } from '../Button';
import { useContext } from 'react';
import { TechContext } from '../../contexts/techs';

export function ModalEditTech() {
  const {
    editRegister,
    editHandleSubmit,
    editErrors,
    editTechnologies,
    removeTechnologies,
    setEditedTech,
    setShowEditModal,
    editedTech,
  } = useContext(TechContext);
  return (
    <ContainerModal
      onClick={() => {
        setEditedTech(null);
        setShowEditModal(false);
      }}
    >
      <ModalContent onClick={(event) => event.stopPropagation()}>
        <div className='modal__header'>
          <h2>Tecnologia Detalhes</h2>
          <button
            onClick={() => {
              setEditedTech(null);
              setShowEditModal(false);
            }}
          >
            X
          </button>
        </div>
        <StyledForm onSubmit={editHandleSubmit(editTechnologies)}>
          <label>
            Nome
            <input
              type='text'
              id='title'
              placeholder={editedTech?.title}
              disabled
            ></input>
          </label>
          <label>
            Selecionar status
            <select
              id='status'
              defaultValue={'default'}
              {...editRegister('status')}
            >
              <option disabled={true} value='default'>
                {editedTech?.status}
              </option>
              <option
                value='Iniciante'
                disabled={editedTech?.status === 'Iniciante'}
              >
                Iniciante
              </option>
              <option
                value='Intermediário'
                disabled={editedTech?.status === 'Intermediário'}
              >
                Intermediário
              </option>
              <option
                value='Avançado'
                disabled={editedTech?.status === 'Avançado'}
              >
                Avançado
              </option>
            </select>
          </label>
          <p>{editErrors.status?.message}</p>
          <div className='buttons'>
            <Button type='submit' color='pink' text='Salvar alteração' />
            <Button
              type='button'
              color='light-grey'
              text='Excluir'
              onClick={() => editedTech && removeTechnologies(editedTech?.id)}
            />
          </div>
        </StyledForm>
      </ModalContent>
    </ContainerModal>
  );
}
