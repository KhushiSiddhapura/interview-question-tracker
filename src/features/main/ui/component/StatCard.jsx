import Card from '../../../../shared/components/Card';
import {useMain} from '../../hook/mainHook';

const StatCard = ({label, value, note, icon: Icon, accent = 'orange'}) => {
  const {colors} = useMain ();
  return (
    <Card className="p-5">
      <div className="flex items-start justify-between gap-3">
        <p className="text-sm font-medium text-zinc-500">{label}</p>
        <div
          className={`flex h-9 w-9 items-center justify-center rounded-lg ${colors[accent]}`}
        >
          <Icon size={18} />
        </div>
      </div>
      <div className="mt-3 flex items-end justify-between">
        <div>
          <div className="text-3xl font-bold tracking-tight text-zinc-900">
            {value}
          </div>
          <p className="mt-1 text-xs text-zinc-500">{note}</p>
        </div>
      </div>
    </Card>
  );
};

export default StatCard;
