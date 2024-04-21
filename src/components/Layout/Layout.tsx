import { Dashboard } from '../../pages/Dashboard/Dashboard';
import { Header } from '../Header/Header';

export const Layout = () => {
  return (
    <div className='flex flex-col h-screen'>
      <Header />
      <Dashboard />
    </div>
  );
};
