
import QuizPage from "./Components/QuizPage";
import Results from "./Components/Results";
import Welcome from "./Components/Welcome";

import { RouterProvider, createBrowserRouter } from "react-router-dom";


const router = createBrowserRouter([
  { path: '/', element: <Welcome /> },
  { path: '/quiz', element: <QuizPage /> },
  { path: '/results', element: <Results /> }
])

function App() {


  return (
    <RouterProvider router={router} />
  );
}

export default App;
