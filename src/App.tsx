import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Layout from "./components/layout/Layout";
import { UserDataProvider } from "./contexts/UserDataContext";
import { SessionProvider } from "./contexts/SessionContext";
import { ErrorBoundary } from "./components/common/ErrorBoundary";

function App() {
  const ProfileForm = lazy(() => import("./pages/ProfileForm"));
  const ProfileView = lazy(() => import("./pages/ProfileView"));

  return (
    <Router>
      <SessionProvider>
        <UserDataProvider>
          <Layout>
            <ErrorBoundary>
              <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                  <Route path="/" element={<ProfileForm />} />
                  <Route path="/profile" element={<ProfileView />} />
                </Routes>
              </Suspense>
            </ErrorBoundary>
          </Layout>
        </UserDataProvider>
      </SessionProvider>
    </Router>
  );
}

export default App;
