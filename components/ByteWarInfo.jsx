import React from 'react';

const ByteWarInfo = () => {
  return (
    <section className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-wider text-purple-400">
            WHAT IS BYTEWAR?
          </h1>
        </div>

        {/* Description Section */}
        <div className="max-w-4xl mx-auto text-lg md:text-xl leading-relaxed space-y-6 ">
          <p>
            ByteWar is an innovative nationwide hackathon designed to engage students in solving some of the most pressing challenges faced in everyday life. Launched to foster a culture of innovation and practical problem-solving, ByteWar provides a dynamic platform for participants to develop and showcase their creative solutions to real-world problems. By encouraging participants to think critically and innovatively, the hackathon aims to bridge the gap between academic knowledge and practical application.
          </p>
          <p>
            Since its inception, ByteWar has garnered significant success in promoting out-of-the-box thinking among young minds, particularly engineering students from across the country. Each edition has built on the previous one, refining its approach and expanding its impact. The hackathon not only offers participants an opportunity to showcase their skills but also encourages collaboration with industry experts, government agencies, and other stakeholders.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ByteWarInfo;