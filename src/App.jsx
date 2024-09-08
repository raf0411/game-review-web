import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import AddReviewPage from "./pages/AddReviewPage";
import GameReviewPage, { gameReviewLoader } from "./pages/GameReviewPage";
import EditReviewPage from "./pages/EditReviewPage";
import ErrorPage from "./pages/ErrorPage";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/add-review" element={<AddReviewPage />} />
        <Route
          path="/game-review/:id"
          element={<GameReviewPage />}
          loader={gameReviewLoader}
        />
        <Route path="/edit-review/:id" element={<EditReviewPage />} loader={gameReviewLoader} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
