import { useState } from 'react';
import { Header } from './components/Header';
import { ExpertSection } from './components/ExpertSection';
import { ConsultationForm } from './components/ConsultationForm';
import { ResultsSection } from './components/ResultsSection';
import { Footer } from './components/Footer';
import { PigBreed } from './types';
import { calculateCompatibility } from './utils/consultationLogic';

function App() {
  const [showResults, setShowResults] = useState(false);
  const [userConditions, setUserConditions] = useState<any>(null);
  const [results, setResults] = useState<{ breed: PigBreed; score: number }[]>([]);

  const handleConsultation = (conditions: any) => {
    setUserConditions(conditions);
    const scoredResults = calculateCompatibility(conditions);
    setResults(scoredResults);
    setShowResults(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleReset = () => {
    setShowResults(false);
    setUserConditions(null);
    setResults([]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      
      {!showResults ? (
        <>
          <ExpertSection onStartConsultation={() => {}} />
          <ConsultationForm onConsult={handleConsultation} />
        </>
      ) : (
        <ResultsSection 
          results={results} 
          userConditions={userConditions}
          onReset={handleReset}
        />
      )}
      
      <Footer />
    </div>
  );
}

export default App;
