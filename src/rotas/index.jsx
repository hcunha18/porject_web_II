import React, { useState, useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LinearProgress from '@mui/material/LinearProgress';
const Home = lazy(() => import('../pages/Home'));
const CreateEvent = lazy(() => import('../pages/CreateEvent'));
const EditEvent = lazy(() => import('../pages/EditEvent'));

export default function Rotas() {

  return (
    <Router>
          <Suspense fallback={<LinearProgress />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="CreateEvent" element={<CreateEvent />} />
              <Route path="EditEvent" element={<EditEvent />} />
            </Routes>
          </Suspense>
    </Router>
  );
}
