import { ContainerModal, ModalContent } from '../../styles/modal';
import { StyledForm } from '../../styles/form';
import { Button } from '../Button';
import { useContext } from 'react';
import { TechContext } from '../../contexts/techs';

export function ModalAddTech() {
  const { register, handleSubmit, errors, newTechnology, setShowModal } =
    useContext(TechContext);
  return (
    <ContainerModal onClick={() => setShowModal(false)}>
      <ModalContent onClick={(event) => event.stopPropagation()}>
        <div className='modal__header'>
          <h2>Cadastrar Tecnologia</h2>
          <button onClick={() => setShowModal(false)}>X</button>
        </div>
        <StyledForm onSubmit={handleSubmit(newTechnology)}>
          <label>
            Nome
            <input
              type='text'
              id='title'
              placeholder='Tecnologia'
              {...register('title')}
            ></input>
            <p>{errors.title?.message}</p>
          </label>
          <label>
            Selecionar status
            <select
              id='status'
              defaultValue={'default'}
              {...register('status')}
            >
              <option disabled={true} value='default'>
                Status:
              </option>
              <option value='Iniciante'>Iniciante</option>
              <option value='Intermediário'>Intermediário</option>
              <option value='Avançado'>Avançado</option>
            </select>
          </label>
          <p>{errors.status?.message}</p>
          <Button type='submit' color='pink' text='Cadastrar Tecnologia' />
        </StyledForm>
      </ModalContent>
    </ContainerModal>
  );
}
