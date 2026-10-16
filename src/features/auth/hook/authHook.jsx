import {useContext} from 'react';
import {useForm} from 'react-hook-form';
import {useNavigate} from 'react-router';
import {toast} from 'react-toastify';
import {Data} from '../../../app/context/AuthContext';

export const useAuth = () => {
  const {
    register,
    reset,
    handleSubmit,
    watch,
    formState: {errors},
  } = useForm ();
  const navigate = useNavigate ();
  const {users, activeUser, setUsers, setActiveUser} = useContext (Data);

  const handleLogin = data => {
    const currentUser = {
      email: data.email,
      password: data.password,
    };
    const findEmail = users.find (value => {
      return currentUser.email === value.email;
    });
    let findUser = false;
    if (findEmail) {
      findUser = users.find (value => {
        return currentUser.password === value.password;
      });
    }

    if (findUser) {
      const activeUser = users.filter (value => {
        return value.email === currentUser.email;
      });
      localStorage.setItem ('activeUser', JSON.stringify (activeUser[0]));
      setActiveUser (activeUser[0]);
      navigate ('/');
    } else {
      toast.error ('Invalid credentials');
    }
    reset ();
  };

  const handleRegister = data => {
    const users = JSON.parse (localStorage.getItem ('users')) || [];
    const currentUser = {
      name: data.name,
      email: data.email,
      password: data.password,
    };
    const ifUserExist = users.find (val => {
      return val.email == currentUser.email;
    });
    if (!ifUserExist) {
      setUsers ([...users, currentUser]);
      localStorage.setItem ('users', JSON.stringify ([...users, currentUser]));
      setActiveUser (currentUser);
      localStorage.setItem ('activeUser', JSON.stringify (currentUser));
      navigate ('/');
    } else {
      toast.error ('User already exits');
    }
    reset ();
  };

  const handleLogout = () => {
    setActiveUser (null);
    localStorage.setItem ('activeUser', null);
    navigate ('/auth');
  };

  return {
    register,
    activeUser,
    handleRegister,
    handleSubmit,
    errors,
    navigate,
    handleLogin,
    watch,
    handleLogout,
  };
};
