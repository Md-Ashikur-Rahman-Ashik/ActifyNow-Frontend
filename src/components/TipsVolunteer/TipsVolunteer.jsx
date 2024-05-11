const TipsVolunteer = () => {
  const tips = [
    {
      id: 1,
      title: "Find the Right Opportunity",
      content:
        "Choose volunteer opportunities that align with your interests, skills, and values. Look for organizations and causes that you are passionate about and where you can make a meaningful impact.",
    },
    {
      id: 2,
      title: "Communicate Clearly",
      content:
        "Communicate effectively with the volunteer organization or project leader. Make sure you understand your role, responsibilities, and expectations. Ask questions and seek clarification when needed.",
    },
    {
      id: 3,
      title: "Manage Your Time Wisely",
      content:
        "Prioritize your volunteer commitments and manage your time effectively. Set aside dedicated time for volunteering and plan ahead to ensure you can fulfill your responsibilities.",
    },
    {
      id: 4,
      title: "Stay Flexible and Adaptable",
      content:
        "Be prepared to adapt to changing circumstances and unexpected challenges while volunteering. Flexibility and adaptability are key qualities for successful volunteers.",
    },
    {
      id: 5,
      title: "Take Care of Yourself",
      content:
        "Remember to prioritize self-care while volunteering. Take breaks when needed, stay hydrated, and listen to your body. It's important to maintain a healthy balance between volunteering and your personal well-being.",
    },
  ];

  return (
    <section className="bg-blue-50 mt-20 py-12">
      <div className="container mx-auto">
        <h2 className="text-4xl text-blue-400 font-bold text-center mb-8">
          Tips for Effective Volunteering
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tips.map((tip) => (
            <div
              key={tip.id}
              className="bg-white hover:scale-105 transition-transform p-6 rounded-lg shadow-md"
            >
              <h3 className="text-lg text-center text-blue-400 font-semibold mb-2">
                {tip.title}
              </h3>
              <p className="text-gray-700">{tip.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TipsVolunteer;
