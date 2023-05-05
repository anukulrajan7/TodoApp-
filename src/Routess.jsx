import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/Login";
import Signup from "./pages/Signup";
import { useContext } from "react";
import { TodoContext } from "./context/TodoContext";
import TodoPage from "./pages/TodoPage";
export default function Routess() {
  const {user} = useContext(TodoContext)
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/" element={<TodoPage />} />
    </Routes>
  );
}
