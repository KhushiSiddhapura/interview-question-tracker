import {ArrowUpRight, Target} from 'lucide-react';
import Card from '../../../../shared/components/Card';
import {useMain} from '../../hook/mainHook';

const ProgressCard = () => {
  const {pr} = useMain ();
  return (
    <Card className="mt-5 p-5 sm:p-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-50 text-orange-600">
              <Target size={17} />
            </div>
            <h2 className="font-semibold text-zinc-900">
              Overall Preparation Progress
            </h2>
          </div>
          <p className="mt-2 text-sm text-zinc-500">
            You're building great momentum. Keep it up!
          </p>
        </div>
        <div className="flex items-center gap-2 self-start rounded-lg bg-emerald-50 px-2.5 py-1.5 text-xs font-semibold text-emerald-700 sm:self-center">
          <ArrowUpRight size={14} /> {pr}% complete
        </div>
      </div>
      <div className="mt-5">
        <div className="mb-2 flex items-center justify-between text-xs">
          <span className="font-medium text-zinc-600">
            Preparation progress
          </span>
        </div>
        <div className="h-2.5 overflow-hidden rounded-full bg-zinc-100">
          {/* Here make changes to make it dynamic */}
          <div
            className="h-full rounded-full bg-orange-500"
            style={{width: `${pr}%`}}
          />
        </div>
      </div>
    </Card>
  );
};

export default ProgressCard;
