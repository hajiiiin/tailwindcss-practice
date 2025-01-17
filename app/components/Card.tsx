export interface CardProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default function Card({ title, body }: CardProps) {
  return (
    <div className="flex flex-1 pb-4 border-b mb-4 h-120">
      <div className="border-2 rounded-lg p-5 w-40 h-40 m-3">이미지</div>
      <div className="flex flex-col items-start gap-4 py-2">
        <h2 className="line-clamp-2 text-xl font-bold text-gray-900">
          {title}
        </h2>
        <p className="text-gray-900">{body}</p>
      </div>
    </div>
  );
}
