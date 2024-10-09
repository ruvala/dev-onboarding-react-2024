import { Route, Switch } from "wouter";
import HelloPage from "./pages/HelloPage";

export default function App() {
  return (
    <>
      <Switch>
        {/* Display a basic welcome page when the path is / */}
        <Route path="/" component={HelloPage} />

        {/* Shows a 404 error if the path doesn't match anything */}
        {
          <Route>
            <p className="p-4">404: Page Not Found</p>
          </Route>
        }
      </Switch>
    </>
  );
}



