import React from 'react';
import Form from './components/Form';


const handleClick = () => {
  window.location.href = "https://houssam5544.github.io/cv-app/";
};

const App: React.FC = () => {
  return (
    <section className='bg'>
      <div className='fixed'>
        <button type="button" onClick={handleClick} className=" font-bold ml-4 hover:bg-purple-700 bg-orange-400 text-white rounded py-3 px-2 mt-4">vers mon cv</button>
      </div>
      <div className="min-h-screen flex items-center justify-center">
      <Form />
    </div>
    </section>
    
  );
};

export default App;
