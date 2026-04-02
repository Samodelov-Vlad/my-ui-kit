import React from 'react';

interface MyButtonProps {
  label: string;
  onClick?: () => void;
  primary?: boolean;
}

export const MyButton = ({ label, onClick, primary }: MyButtonProps) => {
  const style: React.CSSProperties = {
    backgroundColor: primary ? 'blue' : 'gray',
    color: 'white',
    padding: '10px 20px',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer'
  };

  return (
    <button style={style} onClick={onClick}>
      {label}
    </button>
  );
};