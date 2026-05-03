/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';

export default function App() {
  const [currentView, setCurrentView] = useState<'landing' | 'app'>('landing');

  return (
    <>
      {currentView === 'landing' ? (
        <Landing onStart={() => setCurrentView('app')} />
      ) : (
        <Dashboard onBack={() => setCurrentView('landing')} />
      )}
    </>
  );
}
