
import React, { useState } from 'react';
const Period = () => {
  
    const [lastPeriodDate, setLastPeriodDate] = useState('');
    const [cycleLength, setCycleLength] = useState('');
    const [nextPeriodDate, setNextPeriodDate] = useState(null);

    const calculateNextPeriod = (event) => {
        event.preventDefault();

        if (!lastPeriodDate || !cycleLength) {
            alert("Please fill out both fields");
            return;
        }

        const startDate = new Date(lastPeriodDate);
        const nextPeriod = new Date(startDate);
        nextPeriod.setDate(startDate.getDate() + parseInt(cycleLength));

        setNextPeriodDate(nextPeriod.toISOString().split('T')[0]);
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h2>Period Calculator</h2>
            <form onSubmit={calculateNextPeriod}>
                <div style={{ marginBottom: '15px' }}>
                    <label>
                        Last Period Date: 
                        <input
                            type="date"
                            value={lastPeriodDate}
                            onChange={(e) => setLastPeriodDate(e.target.value)}
                        />
                    </label>
                </div>
                <div className="input box"style={{ marginBottom: '15px' }}>
                    <label>
                        Average Cycle Length (days): 
                        <input
                            type="number"
                            value={cycleLength}
                            onChange={(e) => setCycleLength(e.target.value)}
                        />
                    </label>
                </div>
                <button type="submit">Calculate Next Period</button>
            </form>
            {nextPeriodDate && (
                <div className="input-box"style={{ marginTop: '20px' }}>
                    <h3>Next Period Date: {nextPeriodDate}</h3>
                </div>
            )}
        </div>
    );
};

export default Period;
