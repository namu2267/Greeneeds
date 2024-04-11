import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import NotFound from "./pages/Notfound.tsx";
import MainPage from "../src/pages/Main/MainPage.tsx";
import ChatPage from "./pages/Chat/ChatPage.tsx";
import SustainabilityPage from "./pages/Sustainability/SustainabilityPage.tsx";
import IntroducePage from "./pages/Introduce/IntroducePage";

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
        element: <IntroducePage />,
      },
      {
        index: true,
        path: "sustainability",
        element: <SustainabilityPage />,
      },
    ],
  },
]);