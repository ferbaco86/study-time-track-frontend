import { Redirect } from 'react-router-dom';
// import SignUser from '../containers/SignUser';
import UserDetail from './UserDetail';

const ProtectedWrapper = () => {
  const token = localStorage.getItem('token');
  if (!token) return <Redirect to="/login" />;
  return (
    <div>
      Protected Wrapper
      <Redirect to="/user" component={UserDetail} />
    </div>
  );
};

export default ProtectedWrapper;
