'use client';

import Footer from '@/components/layout/footer';
// Assuming '@/components/ui/dialog' is the correct path to your Dialog component
import Header from '@/components/layout/header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useState } from 'react'; // Assuming you have a Dialog component
const CommunityPage = () => {
  const topicsOfInterest = [
    { name: 'Local News', description: 'Discuss current events and news in our community.' },
    { name: 'Parenting Tips', description: 'Share advice and experiences on raising children.' },
    { name: 'Activities for Children', description: 'Discover and share ideas for kid-friendly activities.' },
    { name: 'Health and Wellness', description: 'Talk about health, fitness, and well-being.' },
  ];

  const additionalTopics = [
    { name: 'Health Education', description: 'Learn and discuss health-related topics.' },
 { name: 'Spiritual', description: 'Share thoughts and discussions on spirituality.' },
    { name: 'Spiritual', description: 'Share thoughts and discussions on spirituality.' },
    { name: 'Business', description: 'Discuss local businesses and entrepreneurship.' },
    { name: 'Entertainment', description: 'Talk about movies, music, books, and other entertainment.' },
    { name: 'Legal Assistance', description: 'Discuss legal topics and find resources.' },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', description: '' });

  const generateRandomContent = (topicName: string) => {
    switch (topicName) {
      case 'Local News':
        const localNews = [
          "City Council approves funding for new park development downtown.",
          "Local school district announces new online learning initiatives.",
          "Community celebrates annual summer festival with record attendance.",
          "Traffic delays expected on Main Street due to road construction.",
        ];
        return localNews[Math.floor(Math.random() * localNews.length)];
      case 'Parenting Tips':
        const parentingTips = [
          "Encourage open communication with your children.",
          "Establish consistent routines for meals and bedtime.",
          "Spend quality time together as a family regularly.",
          "Teach your children problem-solving skills.",
        ];
        return parentingTips[Math.floor(Math.random() * parentingTips.length)];
      case 'Activities for Children':
        const activities = [
          "Visit the local library for story time.",
          "Have a picnic in the park.",
          "Try a new craft project together.",
          "Organize a backyard scavenger hunt.",
        ];
        return activities[Math.floor(Math.random() * activities.length)];
      case 'Health and Wellness':
        const healthTips = [
          "Stay hydrated throughout the day.",
          "Incorporate regular physical activity into your routine.",
          "Prioritize getting enough sleep each night.",
          "Practice mindfulness or meditation for stress reduction.",
        ];
        return healthTips[Math.floor(Math.random() * healthTips.length)];
 case 'Health Education':
 const healthEducation = [
 "Understanding the importance of regular check-ups.",
 "Tips for maintaining a balanced diet.",
 "Recognizing the signs of common illnesses.",
 "The benefits of exercise for mental health.",
 ];
 return healthEducation[Math.floor(Math.random() * healthEducation.length)];
 case 'Spiritual':
 const spiritualTopics = [
 "Exploring different spiritual practices.",
 "Finding peace and mindfulness in daily life.",
 "The role of faith in overcoming challenges.",
 "Connecting with your inner self.",
 ];
 return spiritualTopics[Math.floor(Math.random() * spiritualTopics.length)];
 case 'Business':
 const businessTopics = [
 "Starting a small business in our community.",
 "Marketing strategies for local businesses.",
 "Understanding business permits and regulations.",
 "Networking opportunities for entrepreneurs.",
 ];
 return businessTopics[Math.floor(Math.random() * businessTopics.length)];
 case 'Entertainment':
 const entertainmentTopics = [
 "Latest movie releases and reviews.",
 "Discussing your favorite music artists and albums.",
 "Book recommendations and reading groups.",
 "Upcoming local events and shows.",
 ];
 return entertainmentTopics[Math.floor(Math.random() * entertainmentTopics.length)];
 case 'Legal Assistance':
 const legalAssistanceTopics = [
 "Understanding basic tenant rights.",
 "Finding affordable legal aid.",
 "Family law basics.",
 "Resources for small claims court.",
 ];
 return legalAssistanceTopics[Math.floor(Math.random() * legalAssistanceTopics.length)];
 case 'Form Private Groups':
 return "This section will allow you to create and join private discussion groups based on shared interests. Stay tuned for updates!";
 case 'Local Resources Forum':
 return "Share and discover valuable local resources like childcare, recommended businesses, and information about schools in our community. Click to explore existing posts!";

      // Add cases for other topics here with their specific random content
      default:
        return `This is a placeholder for discussions about ${topicName}. More content coming soon!`;
    }
  };

  const handleCardClick = (title: string, description: string) => {    setModalContent({ title, description });
    setIsModalOpen(true);
  };
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Community Board & Discussion Forums</h1>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Topics of Interest</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topicsOfInterest.map((topic, index) => ( // Use a div or button for click handling instead of Link
              <Card key={index} className="cursor-pointer hover:shadow-md transition-shadow" onClick={() => handleCardClick(topic.name, generateRandomContent(topic.name))}> {/* Added onClick */}
                <CardHeader>
                  <CardTitle>{topic.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{topic.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Private Groups</h2>
          <Card>
            <Card className="cursor-pointer hover:shadow-md transition-shadow" onClick={() => handleCardClick('Form Private Groups', generateRandomContent('Form Private Groups'))}> {/* Added onClick */}
              <CardHeader>
                <CardTitle>Form Private Groups</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Connect with others based on shared interests, location, or specific needs in private discussion groups.
                  (Feature coming soon)
                </CardDescription>
              </CardContent>
            </Card>
          </Card>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Local Resources</h2>
          <Card className="cursor-pointer hover:shadow-md transition-shadow" onClick={() => handleCardClick('Local Resources Forum', generateRandomContent('Local Resources Forum'))}>
            <CardHeader>
              <CardTitle>Local Resources</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>A space to share and find local recommendations for childcare, businesses, schools, and more. Click to explore.</CardDescription>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Additional Topics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> {/* Use a div or button for click handling instead of Link */}
            {additionalTopics.map((topic, index) => (
              <Card key={index} className="cursor-pointer hover:shadow-md transition-shadow" onClick={() => handleCardClick(topic.name, generateRandomContent(topic.name))}> {/* Added onClick */}
                <CardHeader>
                  <CardTitle>{topic.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{topic.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

 {/* Render Dialog only if Dialog component is correctly imported */}
 {typeof Dialog !== 'undefined' && (
 <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
 {typeof DialogContent !== 'undefined' && (
 <DialogContent>
 {typeof DialogHeader !== 'undefined' && (
 <DialogHeader>
 {typeof DialogTitle !== 'undefined' && (
 <DialogTitle>{modalContent.title}</DialogTitle>
 )}
 {typeof DialogDescription !== 'undefined' && (
 <DialogDescription>
 {modalContent.description}
 </DialogDescription>
 )}
 </DialogHeader>
 )}
 </DialogContent>
 )}
 </Dialog>
 )}
      </main>
      <Footer />
    </div>
  );
};

export default CommunityPage;