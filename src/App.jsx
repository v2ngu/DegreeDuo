import { useState } from "react";

function Ratemyprofessor() {
  const [count, setCount] = useState(0)
  const [professor, setProfessor] = useState(null);
  const [school, setSchool] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const fetchProfessor = async () => {
  const url = `http://127.0.0.1:5000/api/professor?school=${school}&name=${name}`;
  console.log('Fetching URL:', url);

  try {
    const response = await fetch(url);
    console.log('Response Status:', response.status);
    if (response.ok) {
      const data = await response.json();
      console.log('Response Data:', data);
      setProfessor(data);
      setError('');
    } else {
      const errorData = await response.json();
      console.error('Error Data:', errorData);
      setError(errorData.error);
      setProfessor(null);
    }
  } catch (error) {
    console.error('Fetch Error:', error);
    setError('Error fetching professor data');
    setProfessor(null);
  }
};

  return (
    <>
      <div>
            <h1>Rate My Professor Lookup</h1>
            <input
              type="text"
              placeholder="School Name"
              value={school}
              onChange={(e) => setSchool(e.target.value)}
            />
            <input
              type="text"
              placeholder="Professor Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <button onClick={fetchProfessor}>Search</button>
            {error && <p>{error}</p>}
            {professor && (
              <div>
                <h2>{professor.name}</h2>
                <p>Department: {professor.department}</p>
                <p>School: {professor.school}</p>
                <p>Rating: {professor.rating}</p>
                <p>Difficulty: {professor.difficulty}</p>
                <p>Number of Ratings: {professor.num_ratings}</p>
                <p>Would Take Again: {professor.would_take_again}</p>
              </div>
            )}
          </div>
    </>
  )
}

export default Ratemyprofessor