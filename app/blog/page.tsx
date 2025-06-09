import Link from 'next/link';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

interface BlogPost {
  id: string;
  title: string;
  summary: string;
  author: string;
  date: string;
}

const placeholderPosts: BlogPost[] = [
  {
    id: 'post-1',
    title: 'Getting Started with Our Community',
    summary: 'A quick guide to joining and participating in our vibrant community.',
    author: 'Community Admin',
    date: 'October 26, 2023',
  },
  {
    id: 'post-2',
    title: 'Tips for Engaging in Forum Discussions',
    summary: 'Learn how to contribute meaningfully to our online forums.',
    author: 'Forum Moderator',
    date: 'October 25, 2023',
  },
  {
    id: 'post-3',
    title: 'Upcoming Events You Won\'t Want to Miss',
    summary: 'Check out the exciting events we have planned for the near future.',
    author: 'Events Team',
    date: 'October 24, 2023',
  },
];

const BlogPage: React.FC = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Community Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {placeholderPosts.map((post) => (
            <div key={post.id} className="border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                <p className="text-gray-700 mb-4">{post.summary}</p>
              </div>
              <div className="text-sm text-gray-500">
                <p className="mb-2">By {post.author} on {post.date}</p>
                {/* Optional: Add a Link to the full blog post page */}
                {/* <Link href={`/blog/${post.id}`} className="text-blue-600 hover:underline mt-2 inline-block">Read More</Link> */}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BlogPage;