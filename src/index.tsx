import React from 'react';
import { createRoot } from 'react-dom/client';

import './styles/index.css';
import './styles/todo-list.css';
import './styles/filters.css';

import { HashRouter, Route, Routes } from 'react-router-dom';
import { App } from './App';
import { TodoApp } from './components/TodoApp';

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<TodoApp />} />
        <Route path="completed" element={<TodoApp />} />
        <Route path="active" element={<TodoApp />} />
      </Route>
    </Routes>
  </HashRouter>,
  // document.getElementById('root'),
);
