import React from 'react';
import { Instagram } from 'lucide-react';

const instagramPosts = [
  {
    id: 1,
    imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80',
    caption: 'Students loving our carpooling feature! 🚗 #UniLife #Sustainable',
    likes: 234,
    comments: 45
  },
  {
    id: 2,
    imageUrl: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=600&q=80',
    caption: 'Campus marketplace in action! 📚 #StudentLife #UniMarket',
    likes: 189,
    comments: 32
  },
  {
    id: 3,
    imageUrl: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=600&q=80',
    caption: 'Making university life easier, one ride at a time 🎓 #CampusLife',
    likes: 321,
    comments: 56
  },
  {
    id: 4,
    imageUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80',
    caption: 'Connect with your campus community 🤝 #UniMarket #Community',
    likes: 276,
    comments: 41
  }
];

export default function InstagramFeed() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#1877F2]/5">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-3 mb-12">
          <Instagram className="w-8 h-8 text-[#1877F2]" />
          <h2 className="text-3xl md:text-4xl font-bold">Follow Us @sellwase</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {instagramPosts.map((post) => (
            <div key={post.id} className="group relative overflow-hidden rounded-xl shadow-lg">
              <img
                src={post.imageUrl}
                alt={post.caption}
                className="w-full aspect-square object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <p className="text-white text-sm mb-2 line-clamp-2">{post.caption}</p>
                <div className="flex items-center gap-4">
                  <span className="text-white text-sm">❤️ {post.likes}</span>
                  <span className="text-white text-sm">💬 {post.comments}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://instagram.com/sellwase"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#1877F2] to-[#1877F2]/80 text-white px-8 py-3 rounded-full hover:from-[#1877F2]/90 hover:to-[#1877F2]/70 transition-all"
          >
            <Instagram className="w-5 h-5" />
            Follow Us on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}