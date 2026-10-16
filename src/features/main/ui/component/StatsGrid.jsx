import {
  BookOpen,
  CheckCircle2,
  Code2,
  FolderGit2,
  MessageSquareText,
} from 'lucide-react';
import StatCard from './StatCard';
import {useQuestion} from '../../hook/mainHook';

// Here change values to make it dynamic
const StatsGrid = () => {
  const {pr,counts} = useQuestion ();
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
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-5">
      {stats.map (stat => <StatCard key={stat.label} {...stat} />)}
    </div>
  );
};

export default StatsGrid;
