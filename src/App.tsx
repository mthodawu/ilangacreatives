import { Suspense } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import React from "react";
import AuthForm from "./components/auth/AuthForm";
import DashboardLayout from "./components/dashboard/DashboardLayout";
import DashboardHome from "./pages/dashboard/DashboardHome";
import routes from "tempo-routes";
import ClientView from './pages/dashboard/clientView';
import CalendarView from './pages/dashboard/CalendarView';
import DocumentsView from './pages/dashboard/DocumentsView';
import MessagesView from './pages/dashboard/MessagesView';

function App() {
  return (
    <Suspense
      fallback={
        <p>
          Loading...
          {/* <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
            Header 1
          </h1> */}
        </p>
      }
    >
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<AuthForm />} />
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<DashboardHome />} />
            <Route path="/dashboard/clients" element={<ClientView />} />
            <Route path="/dashboard/calendar" element={<CalendarView />} />
            <Route path="/dashboard/documents" element={<DocumentsView />} />
            <Route path="/dashboard/messages" element={<MessagesView />} />
          </Route>
        </Routes>
        {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
      </>
    </Suspense>
  );
}

export default App;
