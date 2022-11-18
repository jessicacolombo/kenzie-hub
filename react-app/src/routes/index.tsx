import { Routes, Route } from 'react-router-dom';
import { ProtectedRoutes } from '../components/ProtectedRoutes';
import { Home } from '../pages/Home';
import { LoginPage } from '../pages/LoginPage';
import { NotFound } from '../pages/NotFound';
import { RegisterPage } from '../pages/RegisterPage';

export function RoutesMain() {
  return (
    <Routes>
      <Route path='/' element={<LoginPage />} />
      <Route path='/register' element={<RegisterPage />} />
      <Route path='*' element={<NotFound />} />
      <Route element={<ProtectedRoutes />}>
        <Route path='/dashboard' element={<Home />} />
      </Route>
    </Routes>
  );
}
