import { useDispatch } from 'react-redux';
import { resetData } from '../actions';

const LogOut = () => {
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(resetData());
    localStorage.removeItem('token');
  };
  (
    <button type="button" onClick={handleLogOut}>Log Out</button>
  );
};

export default LogOut;
