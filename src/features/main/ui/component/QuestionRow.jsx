import {useState} from 'react';
import {MoreHorizontal, Pencil, Trash2, ExternalLink, Eye} from 'lucide-react';
import Badge from '../../../../shared/components/Badge';
import {useQuestion} from '../../hook/mainHook';

const QuestionRow = ({question, index}) => {
  const {deleteQue, editQue} = useQuestion ();
  const [showOptions, setShowOptions] = useState (false);
  const [showQuestion, setShowQuestion] = useState (false);

  return (
    <tr className="group border-b border-zinc-100 last:border-0 hover:bg-zinc-50/70">
      <td className="w-12 px-5 py-4 text-xs text-zinc-400">
        {String (index + 1).padStart (2, '0')}
      </td>

      <td className="min-w-57.5 px-3 py-4">
        <div className="font-semibold text-zinc-800">{question.title}</div>
        <a
          href={question.link}
          target="_blank"
          rel="noreferrer"
          className="mt-1 cursor-pointer flex items-center gap-1 text-xs text-zinc-400"
        >
          {question.link}<ExternalLink size={11} />
        </a>
      </td>

      <td className="whitespace-nowrap px-3 py-4 text-sm text-zinc-600">
        {question.category}
      </td>

      <td className="px-3 py-4"><Badge>{question.difficulty}</Badge></td>
      <td className="px-3 py-4"><Badge>{question.status}</Badge></td>

      <td className="px-4 py-4">
        <div className="flex items-center justify-end gap-1 opacity-70 transition-opacity group-hover:opacity-100">
          <button
            onClick={() => {
              editQue (question,index);
            }}
            className="rounded-md p-1.5 text-zinc-500 hover:bg-orange-50 hover:text-orange-600"
            aria-label="Edit question"
          >
            <Pencil size={15} />
          </button>

          <button
            onClick={() => {
              deleteQue (index);
            }}
            className="rounded-md p-1.5 text-zinc-500 hover:bg-rose-50 hover:text-rose-600"
            aria-label="Delete question"
          >
            <Trash2 size={15} />
          </button>

          <div className="relative">
            <button
              onClick={() => setShowOptions (!showOptions)}
              className="rounded-md p-1.5 text-zinc-400 hover:bg-zinc-100"
              aria-label="More options"
            >
              <MoreHorizontal size={16} />
            </button>

            {showOptions &&
              <div className="absolute right-0 top-full z-20 mt-1 w-44 rounded-lg border border-zinc-200 bg-white p-1 shadow-md">
                <button
                  onClick={() => {
                    setShowOptions (false);
                    setShowQuestion (true);
                  }}
                  className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm text-zinc-700 hover:bg-orange-50 hover:text-orange-600"
                >
                  <Eye size={15} />
                  View Question
                </button>
              </div>}
          </div>
        </div>
      </td>

      {showQuestion &&
        <td colSpan={6}>
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 p-4">
            <div className="w-full max-w-lg rounded-xl bg-white p-6 shadow-xl">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-lg font-semibold text-zinc-900">
                  View Question
                </h2>
                <button
                  onClick={() => setShowQuestion (false)}
                  className="rounded-md px-2 py-1 text-zinc-500 hover:bg-zinc-100"
                >
                  ✕
                </button>
              </div>

              <h3 className="mb-2 text-base font-semibold text-zinc-800">
                {question.title}
              </h3>

              <div className="mb-4 flex flex-wrap gap-2">
                <Badge>{question.category}</Badge>
                <Badge>{question.difficulty}</Badge>
                <Badge>{question.status}</Badge>
              </div>

              <p className="mb-2 text-sm font-medium text-zinc-700">
                Question Link
              </p>
              <a
                href={question.link}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 break-all text-sm text-orange-600 hover:underline"
              >
                {question.link}
                <ExternalLink size={13} />
              </a>

              {question.notes &&
                <div className="mt-4">
                  <p className="mb-1 text-sm font-medium text-zinc-700">
                    Notes
                  </p>
                  <p className="whitespace-pre-wrap text-sm text-zinc-600">
                    {question.notes}
                  </p>
                </div>}

              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => setShowQuestion (false)}
                  className="rounded-lg bg-orange-500 px-4 py-2 text-sm font-medium text-white hover:bg-orange-600"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </td>}
    </tr>
  );
};

export default QuestionRow;
