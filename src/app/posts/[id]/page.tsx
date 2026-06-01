import Link from 'next/link';

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

async function getPost(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!res.ok) throw new Error('Failed to fetch post');
  return res.json();
}

export default async function PostDetail({ params }: { params: { id: string } }) {
  const post: Post = await getPost(params.id);

  return (
    <main className="max-w-3xl mx-auto p-6 md:p-12 min-h-screen flex flex-col py-20">
      <div className="mb-10">
        <Link 
          href="/" 
          className="inline-flex items-center text-slate-600 hover:text-slate-900 font-medium transition-colors"
        >
          <span className="mr-2">&larr;</span> Back to Posts
        </Link>
      </div>
      <article className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-200">
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-8 capitalize leading-tight">
          {post.title}
        </h1>
        <div className="prose prose-lg text-slate-700">
          <p className="leading-relaxed whitespace-pre-wrap">
            {post.body}
          </p>
        </div>
      </article>
    </main>
  );
}