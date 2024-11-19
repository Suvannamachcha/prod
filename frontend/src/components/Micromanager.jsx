// /frontend/src/components/Micromanager.jsx
import React, { useState } from 'react';
import axios from 'axios';

const Micromanager = () => {
  const [goal, setGoal] = useState('');
  const [steps, setSteps] = useState([]);
  const [intervalId, setIntervalId] = useState(null);

  const handleGenerateSteps = async () => {
    try {
      const response = await axios.post(
        'https://api-inference.huggingface.co/models/mistral-7b-v0',
        {
          inputs: `Break down this goal into steps: ${goal}`,
        },
        {
          headers: {
            Authorization: `Bearer dYYi267aLLCVuCfJoU3ADO8vn4qmCXid`,
          },
        }
      );

      const generatedSteps = response.data[0].generated_text.split('\n');
      setSteps(generatedSteps);
    } catch (error) {
      console.error('Error generating steps:', error);
    }
  };

  const startPomodoro = () => {
    let currentStep = 0;
    if (steps.length === 0) return alert('No steps to track!');
    alert(`Focus on Step: ${steps[currentStep]}`);

    const id = setInterval(() => {
      currentStep++;
      if (currentStep >= steps.length) {
        clearInterval(id);
        alert('All steps completed!');
      } else {
        alert(`Next Step: ${steps[currentStep]}`);
      }
    }, 25 * 60 * 1000); // 25 minutes
    setIntervalId(id);
  };

  const stopPomodoro = () => {
    if (intervalId) clearInterval(intervalId);
    setIntervalId(null);
  };

  return (
    <div>
      <h1>AI Micromanager</h1>
      <textarea
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
        placeholder="Describe your goal..."
        rows={4}
      />
      <button onClick={handleGenerateSteps}>Generate Steps</button>
      <ul>
        {steps.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ul>
      <button onClick={startPomodoro}>Start Focus Session</button>
      <button onClick={stopPomodoro}>Stop</button>
    </div>
  );
};

export default Micromanager;
