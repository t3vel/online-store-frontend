import { useState } from "react";
import styles from "./CalculatorInputCard.module.css";

export default function CalculatorInputCard({ onCalculate }) {
  const [formData, setFormData] = useState({
    age: "",
    weightKg: "",
    heightCm: ""
  });
  const [gender, setGender] = useState("MALE");

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
    try {
      const requestData = {
        age: parseInt(formData.age),
        gender: gender,
        weightKg: parseFloat(formData.weightKg),
        heightCm: parseFloat(formData.heightCm)
      };

      const response = await fetch('https://right-bite-store.onrender.com/api/v1/bmi/calculate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData)
      });

      const result = await response.json();
      console.log('BMI Calculation Response:', result);
      
      // Pass the result to parent component
      if (onCalculate) {
        onCalculate(result);
      }
      
    } catch (error) {
      console.error('Error calculating BMI:', error);
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
          >
            <span className="material-symbols-outlined">male</span>
            Male
          </button>
          <button 
            className={`${styles.femaleButton} ${gender === "FEMALE" ? styles.active : ""}`}
            onClick={() => handleGenderChange("FEMALE")}
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
              /> kilograms ( kg )
            </div>
          </div>
        </div>
        <div className={styles.actionButtons}>
          <button className={styles.resetButton} onClick={handleReset}>Reset</button>
          <button className={styles.calculateButton} onClick={handleCalculate}>Calculate</button>
        </div>
      </main>
    </div>
  );
}
