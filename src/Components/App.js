import React from "react";
import { Route } from "react-router-dom";

import StreamCreate from "./Streams/StreamCreate";
import StreamEdit from "./Streams/StreamEdit";
import StreamDelete from "./Streams/StreamDelete";
import StreamList from "./Streams/StreamList";
import StreamShow from "./Streams/StreamShow";
import Header from "./Header";

const App = () => {
  return (
    <div className="ui container">
      <Header />
      <Route exact path="/" component={StreamList} />
      <Route exact path="/streams/new" component={StreamCreate} />
      <Route exact path="/streams/edit" component={StreamEdit} />
      <Route exact path="/streams/delete" component={StreamDelete} />
      <Route exact path="/streams/show" component={StreamShow} />
    </div>
  );
};

export default App;
