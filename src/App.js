import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';

// Todo: Confimr sign up screen needs to be edited...telling user
// to check their email for confirmation code

// Email needs to be edited for awesomeness

// TODO: or a note or something  - At first, the app will fetch a hardcoded
// array of items from the function. The the function will
//  make an asynchronous HTTP request to another API to
//  retrieve data and return it to the client.

function App() {
  return (
    <div className="App">
    <h1>CODE FREQUENCY AMPERSEND</h1>
    <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);
