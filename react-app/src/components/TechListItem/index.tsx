import { TechContext } from '../../contexts/techs';
import { StyledLi } from '../../styles/listItem';
import { useContext } from 'react';
import { iTechnology } from '../../services/authUserByToken';

interface iTechListItemProps {
  element: iTechnology;
}

export function TechListItem({ element }: iTechListItemProps) {
  const { setEditedTech, setShowEditModal } = useContext(TechContext);

  return (
    <StyledLi
      onClick={() => {
        setEditedTech(element);
        setShowEditModal(true);
      }}
    >
      <h3>{element.title}</h3>
      <span>{element.status}</span>
    </StyledLi>
  );
}
