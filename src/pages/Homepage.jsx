import { Link } from "react-router-dom";
import PageNav from "../components/pageNav";
import AppNav from "./AppNav";

function HomePage() {
  return (
    <div>
      <PageNav />
      <AppNav />
      <h1 className="test">WorldWise</h1>
      <Link to="/app">Go to the App</Link>
    </div>
  );
}

export default HomePage;
