import { useSelector } from 'react-redux';
import { selectUsers } from '../../redux/users/users.selectors';
import User from './User';

export default function Users() {
  const users = useSelector(selectUsers);

  return (
    <ul>
      {users?.map((user) => (
        <li key={user.id}>
          <User user={user} />
        </li>
      ))}
    </ul>
  );
}
