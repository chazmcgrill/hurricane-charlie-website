import React from 'react';

interface LoadingSpinnerProps {
    text: string;
}

const LoadingSpinner = ({ text }: LoadingSpinnerProps) => (
    <div className="loader-wrapper">
        <div className="loader" />
        <p>{text}</p>
    </div>
);

export default LoadingSpinner;
