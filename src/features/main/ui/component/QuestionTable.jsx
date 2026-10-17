import QuestionRow from './QuestionRow.jsx';

const QuestionsTable = ({filteredData}) => {
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="border-b border-zinc-100 bg-zinc-50/70 text-[11px] font-semibold uppercase tracking-wider text-zinc-500">
              <th className="w-12 px-5 py-3.5">#</th>
              <th className="px-3 py-3.5">Question</th>
              <th className="px-3 py-3.5">Category</th>
              <th className="px-3 py-3.5">Difficulty</th>
              <th className="px-3 py-3.5">Status</th>
              <th className="px-4 py-3.5 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length > 0
              ? filteredData.map ((question, index) => (
                  <QuestionRow
                    key={question.id}
                    question={question}
                    index={index}
                  />
                ))
              : <tr>
                  <td colSpan={6} className="px-6 py-12 text-center">
                    <p className="text-base font-medium text-zinc-500">
                      No questions found
                    </p>
                    <p className="mt-1 text-sm text-zinc-400">
                      Try changing your search or filters, or add a new question.
                    </p>
                  </td>
                </tr>}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default QuestionsTable;
