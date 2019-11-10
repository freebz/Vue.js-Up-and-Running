// Routing

const app = () => (
  <Router history={hashHistory}>
    <Route path="/" component={PageHome} />
    <Route path="/user/:userId" component={PageUser} />

    <Route path="/settings" component={PageSettings}>
      <Route path="/profile" component={PageSettingsProfile} />
      <Route path="/email" component={PageSettingsEmail} />
    </Route>
  </Route>
);
