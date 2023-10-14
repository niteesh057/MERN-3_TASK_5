import './App.css';
import Calculator from './components/Calculator';
import Result from './components/Result';
import { useState } from 'react';
import differenceInYears from 'date-fns/differenceInYears';

function App() {

  const [age, setAge] = useState(null);
  const calculateAge = ( birthDate) =>{
    const today = new Date();
    const birthDateObj = new Date(birthDate);
    const ageYears = differenceInYears(today, birthDateObj);

    setAge({
      years: ageYears
    });
  }

  return (
    <div>
      <Calculator  calculateAge={calculateAge}/>
      {age && <Result age={age}/>}
    </div>
  );
}

export default App;
