import { LuLayoutDashboard } from "react-icons/lu";
import { MdOutlinePostAdd } from "react-icons/md";
import { Route, Router, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";

const AdminDashboardLayout = () => {
  return (
    <div className="flex h-screen border">
      <div className="border w-1/6">
        <div>
          <button className="border mt-3 p-2 flex items-center justify-center gap-3 w-full">
            <LuLayoutDashboard />
            Dashboard
          </button>
        </div>
        <div>
          <button className="border mt-3 p-2 flex items-center justify-center gap-3 w-full">
            <MdOutlinePostAdd />
            Posts
          </button>
        </div>
      </div>
      <div className="border w-full p-6">
        <h1 className="text-xl">
          Welcome <span className="font-mono font-bold">Integral</span>,
        </h1>
        <Router>
          <Routes>
            <Route path="/admin/dashboard" element={<Dashboard />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
};

export default AdminDashboardLayout;
