import React ,{useState} from 'react'
// import ReactDOM from 'react-dom';
import './agecalc.css'
export default function Agecalc() {
    const [birthdate, setBirthdate] = useState('');
    const [age, setAge] = useState(0);
 
    const calculateAge = () => {
        const today = new Date();
        const birthdateDate = new Date(birthdate);
 
        if(birthdateDate > today){
            alert("Please enter a valid date of birth");
            return;
        }

        let years = today.getFullYear() - birthdateDate.getFullYear();
        let months = today.getMonth() - birthdateDate.getMonth();
        let days = today.getDate() - birthdateDate.getDate();

        if (months < 0 || (months === 0 && days < 0)) {
          years--;
          months += 12;
        }
    
        if (days < 0) {
          const prevMonthLastDay = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
          days += prevMonthLastDay;
          months--;
        }
        setAge({ years, months, days });
    };
  return (
    <div className="container">
      {/* <div className="bgimg" style={{ backgroundImage:`url(${bg})`,backgroundRepeat:"no-repeat",backgroundSize:"cover", height:600,width:1300}}> */}
      <h1 className="heading">AGE CALCULATOR</h1>
      <h2 className="subheading">Want to find out how old you are?</h2>
      <div className="minicont">
      <div>
      <label htmlFor='birthdate' className="ask"><h2>Enter your date of birth</h2></label>
      </div>
      <div>
      <input className="date" type="date" value={birthdate} onChange={e => setBirthdate(e.target.value)} name="date" id="datei" required />
      </div>
      <button className="btn" onClick={calculateAge}>Calculate</button>
      <div className="output">
        <h2>You are </h2>
        <div className="opcont">
          <div className="box">
            <p>{age.years}</p>
            <p>{age.months}</p>
            <p>{age.days}</p>
          </div>
          <div className="cont">
            <p>years</p>
            <p>months</p>
            <p>days</p>
          </div>
        </div>
        <p className='old'>old</p>
      </div>
      <div className="footer">
        <p>Made with <svg xmlns="http://www.w3.org/2000/svg" height="15" width="15" fill="white" viewBox="0 0 512 512"><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg>  by <a href="https://www.linkedin.com/in/komal-agarwal-95a3a026a" target="_blank" rel="noopener noreferrer"> Komal Agarwal</a></p>
      </div>
      </div>
      {/* </div> */}
    </div>
  )
};

