import React, { useState, useEffect } from "react";
import "./Counter.css";
import { FaPlus, FaMinus, FaRedo, FaSun, FaMoon, FaInfoCircle, FaHistory, FaHashtag } from "react-icons/fa";

function Counter() {
    const [count, setCount] = useState(0);
    const [history, setHistory] = useState([]);
    const [step, setStep] = useState(1);
    const [maxLimit, setMaxLimit] = useState(0);
    const [minLimit, setMinLimit] = useState(0);
    const [isDark, setIsDark] = useState(false);
    const [showPopup, setShowPopup] = useState(true);

    // Increment function with user-defined max limit
    function Increment() {
        if (count + step <= maxLimit) {
            const newCount = count + step;
            setCount(newCount);
            setHistory([...history, newCount]);
        }
    }

    // Decrement function with user-defined min limit
    function Decrement() {
        if (count - step >= minLimit) {
            const newCount = count - step;
            setCount(newCount);
            setHistory([...history, newCount]);
        }
    }

    // Reset function
    function Reset() {
        setCount(0);
        setHistory([]);
    }

    // Theme toggle function
    function toggleTheme() {
        setIsDark(!isDark);
    }

    return (
        <div className={`counter-container ${isDark ? "dark" : "light"}`}>
            {showPopup && (
                <div className="popup-overlay">
                    <div className="popup">
                        <FaInfoCircle className="popup-icon" />
                        <h2>Welcome to Kathir's Counter App!</h2>
                        <p>Instructions:</p>
                        <ul>
                            <li>Click <strong>+</strong> to increment by the step value.</li>
                            <li>Click <strong>-</strong> to decrement by the step value.</li>
                            <li>Set your own <strong>max and min limits</strong> to restrict the counter.</li>
                            <li>Use <strong>Reset</strong> to start again from zero.</li>
                            <li><strong>Dark Mode</strong> or <strong>Light Mode</strong> for a personalized look.</li>
                            <li>View all <strong>history</strong> in the section below.</li>
                        </ul>
                        <button onClick={() => setShowPopup(false)}>Got it!</button>
                    </div>
                </div>
            )}

            <h2> <FaHashtag /> Kathir's Interactive Counter</h2>
            <h1 className={`counter-value ${count > 0 ? "positive" : count < 0 ? "negative" : ""}`}>
                {count}
            </h1>

            <div className="buttons">
                <button onClick={Increment} disabled={count + step > maxLimit}>
                    <FaPlus /> INC
                </button>
                <button onClick={Decrement} disabled={count - step < minLimit}>
                    <FaMinus /> DEC
                </button>
                <button onClick={Reset}>
                    <FaRedo /> RESET
                </button>
            </div>

            <div className="step-input">
                <label>Step:</label>
                <input
                    type="number"
                    value={step}
                    onChange={(e) => setStep(Number(e.target.value))}
                    min="1"
                />
            </div>

            <div className="limit-input">
                <div className="Max-Limit">
                    <label>Max Limit:</label>
                    <input
                        type="number"
                        value={maxLimit}
                        onChange={(e) => setMaxLimit(Number(e.target.value))}
                    />
                </div>
                <div className="Min-Limit">
                    <label>Min Limit:</label>
                    <input
                        type="number"
                        value={minLimit}
                        onChange={(e) => setMinLimit(Number(e.target.value))}
                    />
                </div>
            </div>

            <button onClick={toggleTheme} className="theme-toggle">
                {isDark ? <FaSun /> : <FaMoon />} {isDark ? "Light Mode" : "Dark Mode"}
            </button>

            <div className="history">
                <h3><FaHistory /> History</h3>
                <ul>
                    {history.map((value, index) => (
                        <li key={index}>{value}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Counter;