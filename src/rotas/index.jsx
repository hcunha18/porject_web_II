import React, { useState, useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LinearProgress from '@mui/material/LinearProgress';
const Home = lazy(() => import('../pages/Home'));
const CreateEvent = lazy(() => import('../pages/CreateEvent'));

export default function Rotas() {

  return (
    <Router>
          <Suspense fallback={<LinearProgress />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="CreateEvent" element={<CreateEvent />} />
            </Routes>
          </Suspense>
    </Router>
  );
}
