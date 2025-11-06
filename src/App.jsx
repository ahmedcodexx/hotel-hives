import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ModalProvider from "./hooks/modal/ModalProvider";
import {
  Bookings,
  Cabins,
  CreateUser,
  Dashboard,
  Login,
  PageNotFound,
  Settings,
  UserProfile,
  Users,
} from "./pages/index";
import {
  CheckIn,
  Layout,
  ModalManager,
  ProtectApp,
} from "./components/index";
import { AppModeProvider } from "./hooks";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        // staleTime: 60 * 1000,
        staleTime: 0,
      },
    },
  });
  return (
    <AppModeProvider>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <ModalProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route
                element={
                  <ProtectApp>
                    <Layout />
                  </ProtectApp>
                }
              >
                <Route index element={<Navigate replace to="/dashboard" />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/bookings" element={<Bookings />} />
                <Route
                  path="/checkin/:bookingId"
                  element={<CheckIn />}
                />
                <Route path="/login" element={<Login />} />
                <Route path="/cabins" element={<Cabins />} />
                <Route path="/users" element={<Users />} />
                <Route path="/profile" element={<UserProfile />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="*" element={<PageNotFound />} />
              </Route>
            </Routes>
          </BrowserRouter>
          <ModalManager />
        </ModalProvider>
      </QueryClientProvider>
    </AppModeProvider>
  );
}

export default App;
