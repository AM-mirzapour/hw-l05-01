import PostCard from '@/components/PostCard';

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

async function getPosts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!res.ok) throw new Error('Failed to fetch data');
  return res.json();
}

export default async function Home() {
  const allPosts: Post[] = await getPosts();
  const posts = allPosts.slice(0, 5);

  return (
    <main className="max-w-5xl mx-auto p-6 md:p-12 min-h-screen">
      <header className="mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
          Latest Blog Posts
        </h1>
        <p className="text-lg text-slate-500">
          Discover our latest updates and articles.
        </p>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <PostCard 
            key={post.id} 
            id={post.id} 
            title={post.title} 
            body={post.body} 
          />
        ))}
      </div>
    </main>
  );
}