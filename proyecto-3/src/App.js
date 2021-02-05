import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SongsContextProvider from "./contexts/SongsContext";
import LyricsContextProvider from "./contexts/LyricsContext";
import Header from "./components/Common/Header";
import Songs from "./components/Songs";
import Lyrics from "./components/Lyrics";
import NotFound from "./components/NotFound";

const App = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/">
        <SongsContextProvider>
          <Songs />
        </SongsContextProvider>
      </Route>
      <Route path="/lyrics/track/:commontrack_id">
        <LyricsContextProvider>
          <Lyrics />
        </LyricsContextProvider>
      </Route>
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default App;
