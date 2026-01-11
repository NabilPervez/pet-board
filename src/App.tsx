import { useState } from 'react';
import { Home } from './pages/Home';
import { Search } from './pages/Search';
import { Report } from './pages/Report';
import { ReportLocation } from './pages/ReportLocation';

// Define the valid view states
type ViewState = 'home' | 'search' | 'report' | 'report-location' | 'report-found';

function App() {
  const [currentView, setCurrentView] = useState<ViewState>('home');

  const renderView = () => {
    switch (currentView) {
      case 'home':
        return <Home onNavigate={(view) => setCurrentView(view as ViewState)} />;
      case 'search':
        return <Search onNavigate={(view) => setCurrentView(view as ViewState)} />;
      case 'report':
      case 'report-found':
        return <Report
          onBack={() => setCurrentView('home')}
          onNext={() => setCurrentView('report-location')}
        />;
      case 'report-location':
        return <ReportLocation
          onBack={() => setCurrentView('report')}
          onNext={() => console.log('Final Step')}
        />;
      default:
        return <Home onNavigate={(view) => setCurrentView(view as ViewState)} />;
    }
  };

  return (
    <>
      {renderView()}
    </>
  );
}

export default App;
