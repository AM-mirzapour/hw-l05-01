import Link from 'next/link';

interface PostCardProps {
  id: number;
  title: string;
  body: string;
}

export default function PostCard({ id, title, body }: PostCardProps) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 bg-white flex flex-col h-full">
      <Link href={`/posts/${id}`} className="block mb-3">
        <h2 className="text-xl font-bold text-gray-800 capitalize hover:text-blue-600 transition-colors line-clamp-2">
          {title}
        </h2>
      </Link>
      <p className="text-gray-600 line-clamp-3 mb-6 flex-grow">{body}</p>
      <div className="mt-auto">
        <Link href={`/posts/${id}`} className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-800 bg-blue-50 px-4 py-2 rounded-lg transition-colors">
          Read More
        </Link>
      </div>
    </div>
  );
}
