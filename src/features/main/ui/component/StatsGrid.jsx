import StatCard from './StatCard';
import {useMain} from '../../hook/mainHook';

// Here change values to make it dynamic
const StatsGrid = () => {
  const {stats} = useMain ();
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-5">
      {stats.map (stat => <StatCard key={stat.label} {...stat} />)}
    </div>
  );
};

export default StatsGrid;
