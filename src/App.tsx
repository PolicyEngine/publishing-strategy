import { ProgressBar } from './components/ProgressBar';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { CurrentState } from './components/CurrentState';
import { Vision } from './components/Vision';
import { InteractiveDriven } from './components/InteractiveDriven';
import { Timeline } from './components/Timeline';
import { WeeklyRhythm } from './components/WeeklyRhythm';
import { IdeaPipeline } from './components/IdeaPipeline';
import { EndToEndDelivery } from './components/EndToEndDelivery';
import { ContentTypes } from './components/ContentTypes';
import { NextSteps } from './components/NextSteps';
import './styles/variables.css';
import './App.css';

function App() {
  return (
    <>
      <ProgressBar />
      <Navigation />
      <Hero />
      <CurrentState />
      <Vision />
      <InteractiveDriven />
      <Timeline />
      <WeeklyRhythm />
      <ContentTypes />
      <IdeaPipeline />
      <EndToEndDelivery />
      <NextSteps />
    </>
  );
}

export default App;
