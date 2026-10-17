import { useShared } from "../hook/sharedHook";

const Badge = ({children}) => {
  const {styles} = useShared();
  return (
    <span
      className={`inline-flex whitespace-nowrap rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ${styles[children] || 'bg-zinc-100 text-zinc-600 ring-zinc-200'}`}
    >
      {children}
    </span>
  );
};

export default Badge;
