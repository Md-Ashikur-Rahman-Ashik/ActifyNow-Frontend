const VolunteerStories = () => {
  const successStories = [
    {
      id: 1,
      title: "Making a Difference: My Volunteer Journey",
      author: "John Doe",
      content:
        "I started volunteering at a local community center last year, and it has been an incredibly rewarding experience. Helping kids with their homework and organizing educational activities has allowed me to make a positive impact on their lives.",
      imageUrl: "https://i.ibb.co/gTdYFnf/first-Story.png",
    },
    {
      id: 2,
      title: "Inspiring Change: A Volunteer's Story",
      author: "Jane Smith",
      content:
        "Last summer, I joined a group of volunteers for a beach clean-up event, and it was a transformative experience. Seeing the amount of trash polluting our coastline was disheartening, but working together with other volunteers to clean up the beach filled me with hope.",
      imageUrl: "https://i.ibb.co/Wv1Zh6F/second-Story.png",
    },
    {
      id: 3,
      title: "Volunteering: A Journey of Self-Discovery",
      author: "Alice Johnson",
      content:
        "Volunteering abroad in a humanitarian mission was a life-changing experience for me. I had the opportunity to work alongside medical professionals and provide essential healthcare services to underserved communities.",
      imageUrl: "https://i.ibb.co/1zYnKjk/third-Story.png",
    },
  ];

  return (
    <section className="bg-blue-50 py-12 mt-20">
      <div className="container mx-auto">
        <h2 className="text-4xl text-blue-400 font-bold text-center mb-8">
          Volunteer Success Stories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {successStories.map((story) => (
            <div
              key={story.id}
              className="bg-white hover:scale-105 transition-transform p-6 rounded-lg shadow-md"
            >
              <img
                src={story.imageUrl}
                alt={story.title}
                className="w-full object-cover h-40 rounded-md mb-4"
              />
              <h3 className="text-lg font-semibold text-blue-400 mb-2">
                {story.title}
              </h3>
              <p className="text-gray-600 font-bold text-center mb-4">
                {story.author}
              </p>
              <p className="text-gray-700">{story.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VolunteerStories;
