import React from "react";
import Layout from "./components/Layout/Layout";
import AppRoutes from "./components/AppRoutes";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import { useReservations } from "./hooks/useReservations";

const App: React.FC = () => {
  const { reservationData, addReservation, isLoading, error } =
    useReservations();

  return (
    <ErrorBoundary>
      <Layout>
        <AppRoutes
          reservationData={reservationData}
          onAddReservation={addReservation}
          isLoading={isLoading}
          error={error}
        />
      </Layout>
    </ErrorBoundary>
  );
};

export default App;
