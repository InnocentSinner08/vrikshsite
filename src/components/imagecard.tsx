import Image from "next/image";

interface ImageCardProps {
  src: string;
  date: string;
  title: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ src, date, title }) => {
  return (
    <div className="relative w-full max-w-md p-2">
      <Image
        src={src}
        alt={title}
        width={400}
        height={300}
        className="w-full rounded-xl shadow-md"
      />
      <p className="mt-2 text-sm text-gray-500">{title}</p>
    </div>
  );
};

export default ImageCard;
