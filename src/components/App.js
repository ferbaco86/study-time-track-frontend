import LogOut from '../containers/LogOut';
import SignUser from '../containers/SignUser';

function App() {
  return (
    <>
      <SignUser buttonText="Sign up" />
      <SignUser buttonText="Log in" />
      <LogOut />
    </>
  );
}

export default App;
