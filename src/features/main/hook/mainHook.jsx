import {useContext, useState} from 'react';
import {useForm} from 'react-hook-form';
import {useNavigate} from 'react-router';
import {Data} from '../../../app/context/AuthContext';
import {MainData} from '../../../app/context/MainContext';
import {useAuth} from '../../auth/hook/authHook';

export const useQuestion = () => {
  const {register, handleSubmit, formState: {errors}, reset} = useForm ();
  const navigate = useNavigate ();
  const {activeUser} = useContext (Data);
  const {setMockQuestion, mockQuestion, quesEdit, setQuesEdit} = useContext (
    MainData
  );
  const handleForm = data => {
    const ques = JSON.parse (localStorage.getItem ('mockQuestion')) || [];
    let newQues = [
      ...ques,
      {
        user: activeUser.email,
        title: data.title,
        link: data.link,
        category: data.category,
        difficulty: data.difficulty,
        status: data.status,
        notes: data.notes,
      },
    ];
    setMockQuestion (newQues);
    localStorage.setItem ('mockQuestion', JSON.stringify (newQues));
    navigate ('/');
    reset ();
  };

  const userQuestion = mockQuestion.filter (
    val => val.user === activeUser.email
  );
  const completed = userQuestion.filter (val => {
    return val.status === 'Completed';
  });
  const dsa = userQuestion.filter (val => val.category === 'DSA');
  const tech = userQuestion.filter (val => val.category === 'Tech');
  const git = userQuestion.filter (val => val.category === 'Git');
  const counts = [
    userQuestion.length,
    completed.length,
    dsa.length,
    tech.length,
    git.length,
  ];
  const pr = counts[0] !== 0
    ? Number ((counts[1] / counts[0] * 100).toFixed (2))
    : 0;

  const deleteQue = id => {
    console.log (id);
    let que = userQuestion.splice (id, 1);
    console.log (que);
    let arr = mockQuestion.filter (val => {
      console.log (val.title !== que[0].title);
      return val.title !== que[0].title || val.user !== que[0].user;
    });
    setMockQuestion (arr);
    localStorage.setItem ('mockQuestion', JSON.stringify (arr));
  };

  const editQue = (question, id) => {
    console.log (question);
    console.log (id);
  };
  return {
    pr,
    editQue,
    quesEdit,
    setQuesEdit,
    deleteQue,
    handleForm,
    register,
    counts,
    navigate,
    handleSubmit,
    errors,
  };
};

export const useMain = () => {
  const {activeUser, setActiveUser} = useContext (Data);
  const {mockQuestion} = useContext (MainData);

  const [search, setSearch] = useState ('');
  const {handleLogout} = useAuth ();
  const [obj, setObj] = useState ({
    category: 'All Categories',
    difficulty: 'All Difficulties',
    status: 'All Statuses',
  });

  const navigate = useNavigate ();

  const userQuestion = mockQuestion.filter (
    val => val.user === activeUser.email
  );

  const filteredData = userQuestion.filter (val => {
    const matchesSearch = val.title
      .toLowerCase ()
      .includes (search.trim ().toLowerCase ());

    const matchesCategory =
      obj.category === 'All Categories' || val.category === obj.category;

    const matchesDifficulty =
      obj.difficulty === 'All Difficulties' ||
      val.difficulty === obj.difficulty;

    const matchesStatus =
      obj.status === 'All Statuses' || val.status === obj.status;

    return (
      matchesSearch && matchesCategory && matchesDifficulty && matchesStatus
    );
  });

  return {
    setObj,
    handleLogout,
    filteredData,
    setSearch,
    activeUser,
    navigate,
    setActiveUser,
    mockQuestion,
  };
};
