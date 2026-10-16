import {BookOpenCheck, LogOutIcon} from 'lucide-react';
import {useMain} from '../../hook/mainHook';

const AppHeader = () => {
  const {activeUser, handleLogout} = useMain ();
  return (
    <header className="sticky top-0 z-20 border-b border-zinc-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-17 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-500 text-white shadow-sm">
            <BookOpenCheck size={19} strokeWidth={2.2} />
          </div>
          <div className="text-[15px] font-bold tracking-tight text-zinc-900">
            Interview Tracker
          </div>
        </div>
        <div className="flex items-center gap-2 sm:gap-4">
          <div className="flex items-center gap-2">
            <span className="hidden text-sm font-medium text-zinc-700 sm:block">
              {activeUser.name}
            </span>
            <div
              onClick={() => {
                let res = confirm ('Are you sure want to logout?');
                if (res) {
                  handleLogout ();
                }
              }}
              className="rounded-lg px-3.5 py-2 text-sm font-medium text-red-400 flex items-center gap-1 hover:bg-red-100 hover:text-red-500 cursor-pointer"
            >
              <LogOutIcon size={15} className="text-red-400" />
              Logout
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
