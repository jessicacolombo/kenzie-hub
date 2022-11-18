import './style.css';
import { Header } from '../../components/Header';
import { NavBar } from '../../components/NavBar';
import { useContext } from 'react';
import { ModalAddTech } from '../../components/ModalAddTech';
import { TechListItem } from '../../components/TechListItem';
import { Loading } from '../../components/Loading';
import { TechContext } from '../../contexts/techs';
import { Context } from '../../contexts/user';
import { ModalEditTech } from '../../components/ModalEditTech';
import { StyledMain } from '../../styles/mainContainer';

export function Home() {
  const { userTechnologies } = useContext(Context);
  const { loading, showModal, setShowModal, showEditModal } =
    useContext(TechContext);

  return (
    <StyledMain className='main-container'>
      <NavBar text={'Sair'} />
      <Header />
      <div className='content header'>
        <h2>Tecnologias</h2>
        <button className='pluss-button' onClick={() => setShowModal(true)}>
          +
        </button>
      </div>
      {loading && <Loading className='minor' />}
      {userTechnologies.length > 0 ? (
        <ul className='content list'>
          {userTechnologies.map((element) => {
            return <TechListItem key={element.id} element={element} />;
          })}
        </ul>
      ) : (
        <div className='content list'>
          <h3>Voce ainda não tem nenhuma tecnologia cadastrada.</h3>
        </div>
      )}
      {showModal && <ModalAddTech />}
      {showEditModal && <ModalEditTech />}
    </StyledMain>
  );
}
