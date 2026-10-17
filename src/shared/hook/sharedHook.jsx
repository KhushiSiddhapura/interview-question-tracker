export const useShared = () => {
  const styles = {
    Easy: 'bg-emerald-50 text-emerald-700 ring-emerald-200',
    Medium: 'bg-amber-50 text-amber-700 ring-amber-200',
    Hard: 'bg-rose-50 text-rose-700 ring-rose-200',
    Completed: 'bg-emerald-50 text-emerald-700 ring-emerald-200',
    'In Progress': 'bg-orange-50 text-orange-700 ring-orange-200',
    'Not Started': 'bg-zinc-100 text-zinc-600 ring-zinc-200',
  };

  return {
    styles,
  };
};
