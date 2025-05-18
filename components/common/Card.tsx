import Image from 'next/image';
import { CardProps } from '../../interfaces';
import Button from './Button';

export default function Card({
  imageSrc,
  title,
  pricePerNight,
  onClick,
}: CardProps) {
  return (
    <div className="overflow-hidden rounded-2xl shadow-md bg-white">
      <Image
        src={imageSrc}
        alt={title}
        width={400}
        height={250}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 space-y-2">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-gray-600">${pricePerNight} / night</p>
        <Button onClick={onClick}>View Details</Button>
      </div>
    </div>
  );
}
