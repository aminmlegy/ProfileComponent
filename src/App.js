import "./App.css";
import ProfileComponen from "./Profile/ProfileProp";
import code from "./Profile/aTMLLVVZ_400x400.jpg";
function App() {
  function handleName(fullName) {
    alert(`yourName is ${fullName}`);
  }
  return (
    <>
      <ProfileComponen
        bio='FrontEnd'
        profession='FrontEnd'
        handleName={handleName}>
        {<img src={code} alt='code' />}
      </ProfileComponen>
    </>
  );
}

export default App;
