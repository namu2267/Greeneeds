import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import NotFound from "./pages/Notfound.tsx";
import MainPage from "./pages/MainPage.tsx";
import ChatPage from "./pages/Chat/ChatPage.tsx";
import Introduce from "./pages/IntroducePage.tsx";
import SustainabilityPage from "./pages/sustainability/sustainabilityPage.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        path: "",
        element: <MainPage />,
      },
      {
        index: true,
        path: "chat",
        element: <ChatPage />,
      },
      {
        index: true,
        path: "introduce",
        element: <Introduce />,
      },
      {
        index: true,
        path: "sustainability",
        element: <SustainabilityPage />,
      },
    ],
  },
]);
