import {Plus, ChevronDown, ArrowLeftIcon} from 'lucide-react';
import Button from '../../../../shared/components/Button';
import {useMain} from '../../hook/mainHook';

const Field = ({label, children}) => (
  <label className="block">
    <span className="mb-1.5 block text-sm font-medium text-zinc-700">
      {label}
    </span>
    {children}
  </label>
);
const inputClass =
  'h-10 w-full rounded-lg border border-zinc-200 bg-white px-3 text-sm text-zinc-700 outline-none placeholder:text-zinc-400 focus:border-orange-300';

const QuestionModal = () => {
  const {
    register,
    handleSubmit,
    errors,
    quesEdit,
    setQuesEdit,
    navigate,
    handleForm,
  } = useMain ();
  return (
    <div className="mx-auto max-w-xl rounded-2xl border border-zinc-200 bg-white p-6 shadow-xl">
      <div className="flex items-start justify-between">
        <div>
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
            <Plus size={19} />
          </div>
          <h2 className="mt-4 text-xl font-bold text-zinc-900">
            {quesEdit ? 'Edit Question' : 'Add Question'}
          </h2>

          <p className="mt-1 text-sm text-zinc-500">
            {quesEdit
              ? 'Update your question details.'
              : 'Add a new question to your preparation list.'}
          </p>
        </div>
        <button
          onClick={() => {
            setQuesEdit (null);
            navigate ('/');
          }}
          className="rounded-lg p-2 text-zinc-400 hover:bg-zinc-100 border border-zinc-50 cursor-pointer"
          aria-label="Close"
        >
          <span className="flex gap-1 items-center">
            <ArrowLeftIcon size={18} /> Back to Dashboard
          </span>
        </button>
      </div>
      <form onSubmit={handleSubmit (handleForm)} className="mt-6 space-y-4">
        <Field label="Question title">
          <input
            {...register ('title', {
              required: 'Question Title is required',
            })}
            className={inputClass}
            placeholder="e.g. Two Sum"
          />
          {errors.title &&
            <p className="text-red-600">{errors.title.message}</p>}

        </Field>
        <Field label="Question link (optional)">
          <input
            {...register ('link')}
            className={inputClass}
            placeholder="https://leetcode.com/..."
          />
        </Field>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Category">
            <div className="relative">
              <select
                {...register ('category', {
                  required: 'Question category is required',
                })}
                defaultValue=""
                className={`${inputClass} appearance-none`}
              >
                <option value="" disabled>Select category</option>
                <option value="DSA">DSA Problem</option>
                <option value="Tech">Technical Problem</option>
                <option value="Git">Git & GitHub Problem</option>
              </select>
              <ChevronDown
                size={15}
                className="pointer-events-none absolute right-3 top-3 text-zinc-400"
              />
              {errors.category &&
                <p className="text-red-600">{errors.category.message}</p>}

            </div>
          </Field>
          <Field label="Difficulty">
            <div className="relative">
              <select
                {...register ('difficulty', {
                  required: 'Question difficulty is required',
                })}
                defaultValue=""
                className={`${inputClass} appearance-none`}
              >
                <option value="" disabled>Select difficulty</option>
                <option>Easy</option>
                <option>Medium</option>
                <option>Hard</option>
              </select>
              <ChevronDown
                size={15}
                className="pointer-events-none absolute right-3 top-3 text-zinc-400"
              />
              {errors.difficulty &&
                <p className="text-red-600">{errors.difficulty.message}</p>}

            </div>
          </Field>
        </div>
        <Field label="Status">
          <div className="relative">
            <select
              {...register ('status', {
                required: 'Question status is required',
              })}
              defaultValue="Not Started"
              className={`${inputClass} appearance-none`}
            >
              <option>Not Started</option>
              <option>In Progress</option>
              <option>Completed</option>
            </select>
            <ChevronDown
              size={15}
              className="pointer-events-none absolute right-3 top-3 text-zinc-400"
            />

          </div>
        </Field>
        <Field label="Notes (optional)">
          <textarea
            {...register ('notes')}
            rows="3"
            className="w-full resize-none rounded-lg border border-zinc-200 bg-white px-3 py-2.5 text-sm outline-none placeholder:text-zinc-400 focus:border-orange-300"
            placeholder="Add notes or things to remember..."
          />
          {errors.notes &&
            <p className="text-red-600">{errors.notes.message}</p>}
        </Field>
        <div className="mt-6 flex justify-end gap-2 border-t border-zinc-100 pt-5">
          <span
            onClick={() => {
              setQuesEdit (null);
              navigate ('/');
            }}
          >
            <Button type="button" variant="outline">Cancel</Button>
          </span>
          <Button type="submit">
            <Plus size={15} />
            {quesEdit ? 'Update Question' : 'Add Question'}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default QuestionModal;
