import React from 'react';
import './Input.scss';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label: string;
  type?: string;
}

const Input: React.FC<InputProps> = ({ 
  label, 
  type = 'text',
  ...props 
}) => {
  return (
    <div className="input-group">
      <label>{label}</label>
      {type === 'textarea' ? (
        <textarea {...props} className="input input--textarea" />
      ) : (
        <input type={type} {...props} className="input" />
      )}
    </div>
  );
};

export default Input;