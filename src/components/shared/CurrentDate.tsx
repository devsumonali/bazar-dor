'use client';

interface currentDateProps {
     className?: string;
}

const CurrentDate = ({ className = '' }: currentDateProps) => {
     const date = new Date().toLocaleDateString('bn-BD', {
          dateStyle: 'full',
     });
     return <span className={className}>{date}</span>;
};

export default CurrentDate;
