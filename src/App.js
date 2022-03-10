import { Route, Routes } from "react-router-dom";

import AllMeetupPage from "./pages/AllMeetups";
import FavoritePage from "./pages/Favorites";
import NewMeetupPage from "./pages/NewMeetup";

import Layout from './layout/Layout';
function App() {
  return (
    <Layout>
      
      <Routes>
        <Route path="/" exact element={<AllMeetupPage />} />

        <Route path="/new-meetup" exact element={<NewMeetupPage />} />

        <Route path="/favorites" exact element={<FavoritePage />} />
      </Routes>
    </Layout>
  );
}

export default App;
