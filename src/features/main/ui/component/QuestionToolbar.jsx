import {SlidersHorizontal, ChevronDown} from 'lucide-react';

const QuestionsToolbar = ({
  setSearch,
  openDropdown,
  setOpenDropdown,
  filters,
  dropdowns,
  handleSelect,
}) => {

  return (
    <div className="flex flex-col gap-3 border-b border-zinc-100 p-3 sm:p-4 lg:flex-row lg:items-center lg:justify-between lg:px-5">
      <div className="relative w-full lg:max-w-xs">
        <input
          aria-label="Search questions"
          onChange={e => {
            setSearch (e.target.value);
          }}
          placeholder="Search questions..."
          className="h-10 w-full rounded-lg border border-zinc-200 bg-white px-3 text-sm outline-none placeholder:text-zinc-400 focus:border-orange-300"
        />
      </div>

      <div className="flex w-full flex-wrap items-center gap-2 lg:w-auto lg:justify-end">
        <span className="mr-1 hidden items-center gap-1 text-xs font-medium text-zinc-500 md:flex">
          <SlidersHorizontal size={14} /> Filters
        </span>

        {dropdowns.map (dropdown => (
          <div
            key={dropdown.key}
            className="relative min-w-0 flex-1 sm:flex-none"
          >
            <button
              type="button"
              onClick={() =>
                setOpenDropdown (
                  openDropdown === dropdown.key ? null : dropdown.key
                )}
              className="inline-flex h-9 w-full items-center justify-between gap-2 rounded-lg border border-zinc-200 bg-white px-2.5 text-xs font-medium text-zinc-600 transition-colors hover:border-orange-300 hover:bg-orange-50/30 sm:min-w-32 sm:px-3"
            >
              <span className="truncate">{filters[dropdown.key]}</span>
              <ChevronDown
                size={13}
                className={`shrink-0 text-zinc-400 transition-transform ${openDropdown === dropdown.key ? 'rotate-180' : ''}`}
              />
            </button>

            {openDropdown === dropdown.key &&
              <div className="absolute right-0 z-50 mt-2 w-full min-w-36 overflow-hidden rounded-lg border border-zinc-200 bg-white p-1 shadow-lg sm:min-w-40">
                <button
                  type="button"
                  onClick={() => {
                    handleSelect (dropdown.key, dropdown.label, dropdown.label);
                  }}
                  className={`w-full rounded-md px-3 py-2 text-left text-xs transition-colors hover:bg-orange-50 hover:text-orange-600 ${filters[dropdown.key] === dropdown.label ? 'bg-orange-50 font-semibold text-orange-600' : 'text-zinc-600'}`}
                >
                  {dropdown.label}
                </button>

                {dropdown.options.map (option => (
                  <button
                    type="button"
                    key={option}
                    onClick={() => {
                      handleSelect (dropdown.key, option);
                    }}
                    className={`w-full rounded-md px-3 py-2 text-left text-xs transition-colors hover:bg-orange-50 hover:text-orange-600 ${filters[dropdown.key] === option ? 'bg-orange-50 font-semibold text-orange-600' : 'text-zinc-600'}`}
                  >
                    {option}
                  </button>
                ))}
              </div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionsToolbar;
