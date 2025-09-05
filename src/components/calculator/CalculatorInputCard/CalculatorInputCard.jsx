import { useState } from "react";
import styles from "./CalculatorInputCard.module.css";
const API_URL = import.meta.env.VITE_API_URL;

export default function CalculatorInputCard({ onCalculate }) {
  const [formData, setFormData] = useState({
    age: "",
    gender: "",
    weightKg: "",
    heightCm: ""
  });
  const [gender, setGender] = useState("MALE");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleGenderChange = (selectedGender) => {
    setGender(selectedGender);
  };

  const handleCalculate = async () => {
    if (isLoading) return;
    
    setErrorMessage("");
    setIsLoading(true);
    try {
      const requestData = {
        age: parseInt(formData.age),
        gender: gender,
        weightKg: parseFloat(formData.weightKg),
        heightCm: parseFloat(formData.heightCm)
      };

      const response = await fetch(`${API_URL}/api/v1/bmi/calculate`, {
        method: 'POST',
        headers: {
          accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });

      const contentType = response.headers.get('content-type') || '';
      let payload = null;
      try {
        if (contentType.includes('application/json')) {
          payload = await response.json();
        } else {
          const text = await response.text();
          payload = text ? { message: text } : null;
        }
      } catch (_) {
        payload = null;
      }

      if (!response.ok) {
        const message = (payload && (payload.message || payload.error)) || `Request failed with status ${response.status}`;
        setErrorMessage(message);
        return;
      }

      if (onCalculate) {
        onCalculate(payload);
      }
      
    } catch (error) {
      console.error('Error calculating BMI:', error);
      setErrorMessage('Network or server error. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setFormData({
      age: "",
      weightKg: "",
      heightCm: ""
    });
    setGender("MALE");
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Adult BMI Calculator</h2>
      <main className={styles.main}>
        <div className={styles.genderButtonsContainer}>
          <button 
            className={`${styles.maleButton} ${gender === "MALE" ? styles.active : ""}`}
            onClick={() => handleGenderChange("MALE")}
            disabled={isLoading}
          >
            <span className="material-symbols-outlined">male</span>
            Male
          </button>
          <button 
            className={`${styles.femaleButton} ${gender === "FEMALE" ? styles.active : ""}`}
            onClick={() => handleGenderChange("FEMALE")}
            disabled={isLoading}
          >
            <span className="material-symbols-outlined">female</span>
            Female
          </button>
        </div>
        <div className={styles.inputsContainer}>
          <div>
            <div className={styles.inputLabel}>Age</div>
            <div>
              <input 
                type="number" 
                value={formData.age}
                onChange={(e) => handleInputChange("age", e.target.value)}
                disabled={isLoading}
              /> years ( yrs )
            </div>
          </div>
          <div>
            <div className={styles.inputLabel}>Height</div>
            <div>
              <input 
                type="number" 
                value={formData.heightCm}
                onChange={(e) => handleInputChange("heightCm", e.target.value)}
                disabled={isLoading}
              /> centimeters ( cm )
            </div>
          </div>
          <div>
            <div className={styles.inputLabel}>Weight</div>
            <div>
              <input 
                type="number" 
                value={formData.weightKg}
                onChange={(e) => handleInputChange("weightKg", e.target.value)}
                disabled={isLoading}
              /> kilograms ( kg )
            </div>
          </div>
        </div>
        <div className={styles.actionButtons}>
          <button 
            className={styles.resetButton} 
            onClick={handleReset}
            disabled={isLoading}
          >
            Reset
          </button>
          <button 
            className={`${styles.calculateButton} ${isLoading ? styles.loading : ""}`} 
            onClick={handleCalculate}
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <div className={styles.spinner}></div>
                Calculating...
              </>
            ) : (
              "Calculate"
            )}
          </button>
        </div>
        {errorMessage && (
          <div style={{ color: '#c62828', marginTop: '8px', textAlign: 'center' }}>
            {errorMessage}
          </div>
        )}
      </main>
    </div>
  );
}
