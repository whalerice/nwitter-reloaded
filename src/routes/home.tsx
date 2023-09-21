import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";

export default function Home() {
  const navigate = useNavigate();
  const onLogOut = () => {
    auth.signOut();
    navigate("/login");
  };
  return (
    <div>
      <button onClick={onLogOut}>LogOut</button>
    </div>
  );
}
