import { HashRouter, Route, Routes } from "react-router";
import { DisciplineLayout } from "../layouts/discipline";
import { HomePage } from "../pages/home";
import { SettingsPage } from "../pages/settings";

export function Router() {
  return (
    <DisciplineLayout>
      <HashRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </HashRouter>
    </DisciplineLayout>
  );
}
