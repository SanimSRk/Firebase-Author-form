import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivetRoued = ({ children }) => {
  const { users, loding } = useContext(AuthContext);
  if (loding) {
    return <span className="loading loading-spinner loading-lg"></span>;
  }
  if (users) {
    return children;
  }
  return (
    <div>
      <Navigate to={'/login'}></Navigate>
    </div>
  );
};

export default PrivetRoued;
