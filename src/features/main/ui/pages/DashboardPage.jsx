import DashboardHeader from '../component/DashboardHeader.jsx';
import AppHeader from '../component/AppHeader.jsx';
import StatsGrid from '../component/StatsGrid.jsx';
import ProgressCard from '../component/ProgressCard.jsx';
import QuestionsSection from '../component/QuestionSection.jsx';


const DashboardPage = () => {
  return (
    <div className="min-h-screen bg-zinc-50">
      <AppHeader />
      <main className="mx-auto max-w-7xl px-4 py-7 sm:px-6 sm:py-9 lg:px-8">
        <DashboardHeader />
        <StatsGrid />
        <ProgressCard />
        <QuestionsSection />
        <footer className="mt-8 flex flex-col items-center justify-between gap-2 border-t border-zinc-200 py-5 text-xs text-zinc-400 sm:flex-row">
          <span>© 2026 Interview Tracker</span>
          <span>Small steps every day lead to big results.</span>
        </footer>
      </main>
    </div>
  );
};

export default DashboardPage;
