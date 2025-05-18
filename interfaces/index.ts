export interface CardProps {
    imageSrc: string;
    title: string;
    pricePerNight: number;
    onClick?: () => void;
  }

  export interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    variant?: 'primary' | 'secondary';
  }
