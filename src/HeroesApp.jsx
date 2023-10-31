import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext, AuthProvider } from './auth';
import { Navbar } from './ui';
 
export const HeroesApp = () => {

  const { logged } = useContext(AuthContext)

  return (
    <>
      <Navbar />
      <div className='container'>
        {
          logged ? <Outlet /> : <Navigate to={ '/login' } />
        }
      </div>     
    </> 
  );
};