import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { Context } from '../../contexts/user';

export function ProtectedRoutes() {
  const { user } = useContext(Context);

  return user ? <Outlet /> : <Navigate to={'/'} replace />;
}
