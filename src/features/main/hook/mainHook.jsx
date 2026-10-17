import {useContext, useEffect, useState} from 'react';
import {useForm} from 'react-hook-form';
import {useNavigate} from 'react-router';
import {Data} from '../../../app/context/AuthContext';
import {MainData} from '../../../app/context/MainContext';
import {useAuth} from '../../auth/hook/authHook';
import {
  BookOpen,
  CheckCircle2,
  Code2,
  FolderGit2,
  MessageSquareText,
} from 'lucide-react';
import {nanoid} from 'nanoid';

export const useMain = () => {
  const {handleLogout} = useAuth ();
  const {register, handleSubmit, formState: {errors}, reset} = useForm ({
    defaultValues: {
      title: '',
      link: '',
      category: '',
      difficulty: '',
      status: 'Not Started',
      notes: '',
    },
  });
  const navigate = useNavigate ();
  const {activeUser, setActiveUser} = useContext (Data);
  const {setMockQuestion, mockQuestion, quesEdit, setQuesEdit} = useContext (
    MainData
  );
  const [search, setSearch] = useState ('');
  const [openDropdown, setOpenDropdown] = useState (null);
  const [showOptions, setShowOptions] = useState (false);
  const [showQuestion, setShowQuestion] = useState (false);
  const [obj, setObj] = useState ({
    category: 'All Categories',
    difficulty: 'All Difficulties',
    status: 'All Statuses',
  });
  const [filters, setFilters] = useState ({
    category: 'All Categories',
    difficulty: 'All Difficulties',
    status: 'All Statuses',
  });
  const userQuestion = mockQuestion.filter (
    val => val.user === activeUser.email
  );
  const dsa = userQuestion.filter (val => val.category === 'DSA');
  const tech = userQuestion.filter (val => val.category === 'Tech');
  const git = userQuestion.filter (val => val.category === 'Git');
  const completed = userQuestion.filter (val => {
    return val.status === 'Completed';
  });
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
  const stats = [
    {
      label: 'Total Questions',
      value: `${counts[0]}`,
      note: 'Questions in your list',
      icon: BookOpen,
      accent: 'orange',
    },
    {
      label: 'Completed',
      value: `${counts[1]}`,
      note: `${pr}% of all questions`,
      icon: CheckCircle2,
      accent: 'green',
    },
    {
      label: 'DSA Problems',
      value: `${counts[2]}`,
      note: 'Coding practice questions',
      icon: Code2,
      accent: 'blue',
    },
    {
      label: 'Technical Questions',
      value: `${counts[3]}`,
      note: 'Technical & behavioral',
      icon: MessageSquareText,
      accent: 'purple',
    },
    {
      label: 'Git & GitHub',
      value: `${counts[4]}`,
      note: 'Version Control',
      icon: FolderGit2,
      accent: 'cyan',
    },
  ];

  const colors = {
    orange: 'bg-orange-50 text-orange-600',
    green: 'bg-emerald-50 text-emerald-600',
    blue: 'bg-blue-50 text-blue-600',
    purple: 'bg-violet-50 text-violet-600',
    cyan: 'bg-cyan-50 text-cyan-600',
  };

  const dropdowns = [
    {
      key: 'category',
      label: 'All Categories',
      options: ['DSA', 'Tech', 'Git'],
    },
    {
      key: 'difficulty',
      label: 'All Difficulties',
      options: ['Easy', 'Medium', 'Hard'],
    },
    {
      key: 'status',
      label: 'All Statuses',
      options: ['Not Started', 'In Progress', 'Completed'],
    },
  ];

  const handleSelect = (key, value) => {
    setFilters (prev => ({
      ...prev,
      [key]: value,
    }));

    setObj (prev => ({
      ...prev,
      [key]: value,
    }));

    setOpenDropdown (null);
  };

  const handleForm = data => {
    if (!quesEdit) {
      const ques = JSON.parse (localStorage.getItem ('mockQuestion')) || [];
      let newQues = [
        ...ques,
        {
          id: nanoid (),
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
    } else {
      const ques = mockQuestion.filter (val => val.id !== quesEdit);
      const updatedQues = [
        ...ques,
        {
          id: quesEdit,
          user: activeUser.email,
          title: data.title,
          link: data.link,
          category: data.category,
          difficulty: data.difficulty,
          status: data.status,
          notes: data.notes,
        },
      ];
      setMockQuestion (updatedQues);
      localStorage.setItem ('mockQuestion', JSON.stringify (updatedQues));
    }
    navigate ('/');
    reset ();
  };

  const deleteQue = id => {
    let arr = mockQuestion.filter (val => {
      return val.id !== id;
    });
    setMockQuestion (arr);
    localStorage.setItem ('mockQuestion', JSON.stringify (arr));
  };

  const editQue = id => {
    setQuesEdit (id);
    navigate ('/addQuestion');
  };

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

  useEffect (
    () => {
      if (quesEdit) {
        const question = mockQuestion.find (val => val.id === quesEdit);
        reset ({
          title: question.title || '',
          link: question.link || '',
          category: question.category || '',
          difficulty: question.difficulty || '',
          status: question.status || 'Not Started',
          notes: question.notes || '',
        });
      } else {
        reset ({
          title: '',
          link: '',
          category: '',
          difficulty: '',
          status: 'Not Started',
          notes: '',
        });
      }
    },
    [quesEdit, mockQuestion, reset]
  );

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
    setObj,
    handleLogout,
    filteredData,
    setSearch,
    activeUser,
    setActiveUser,
    mockQuestion,
    stats,
    colors,
    openDropdown,
    setOpenDropdown,
    filters,
    setFilters,
    dropdowns,
    handleSelect,
    showOptions,
    setShowOptions,
    showQuestion,
    setShowQuestion,
  };
};
