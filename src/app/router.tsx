import { BrowserRouter, Route, Routes } from "react-router";
import { DisciplineLayout } from "../layouts/discipline";
import { HomePage } from "../pages/home";
import { SettingsPage } from "../pages/settings";

export function Router() {
  return (
    <DisciplineLayout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </BrowserRouter>
    </DisciplineLayout>
  );
}
