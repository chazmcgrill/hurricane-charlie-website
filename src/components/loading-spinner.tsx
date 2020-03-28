import React from 'react';

interface LoadingSpinnerProps {
    text: string;
}

const LoadingSpinner = ({ text }: LoadingSpinnerProps) => (
    <div className="loader-wrapper">
        <div className="loader" />
        <body>{text}</body>
    </div>
);

export default LoadingSpinner;