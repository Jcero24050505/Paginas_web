const mockInstagramPosts = [
  {
    id: 1,
    imageUrl: 'https://i.imgur.com/b5jmw3P.jpeg',
    caption: 'Gimnasio Rackets Madrid',
    likes: 24,
  },
  {
    id: 2,
    imageUrl: 'https://i.imgur.com/T68pMnd.jpeg',
    caption: 'Nuestro Bar',
    likes: 18,
  },
  {
    id: 3,
    imageUrl: 'https://i.imgur.com/5C3oq2u.jpeg',
    caption: 'Visita Rackets Madrid',
    likes: 32,
  },
  {
    id: 4,
    imageUrl: 'https://i.imgur.com/YBm6jCb.jpeg',
    caption: 'Nuestra terraza',
    likes: 15,
  },
];

const InstagramSection = () => {
  return (
    <div className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h3 className="text-2xl font-bold text-center mb-8">INSTAGRAM</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {mockInstagramPosts.map((post) => (
            <div key={post.id} className="overflow-hidden rounded-lg shadow-md">
              <div className="relative group">
                <img 
                  src={post.imageUrl} 
                  alt={post.caption} 
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="text-white text-center px-4">
                    <p className="font-medium">{post.caption}</p>
                    <div className="flex items-center justify-center mt-2">
                      <span>❤️ {post.likes}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <a 
            href="https://www.instagram.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white px-6 py-2 rounded-full font-medium hover:from-purple-600 hover:via-pink-600 hover:to-red-600 transition-colors"
          >
            Síguenos en Instagram
          </a>
        </div>
      </div>
    </div>
  );
};

export default InstagramSection;