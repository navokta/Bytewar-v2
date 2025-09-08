// Organizer Header Component
const OrganizerHeader = () => {
  return (
    <div className="w-full bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 py-6 sm:py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-4">
          Organised by Navokta Team
        </h1>
        <div className="mt-4 sm:mt-6 flex justify-center">
          <div className="relative w-full max-w-4xl aspect-video sm:aspect-[3/1] bg-gray-800 rounded-lg overflow-hidden shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20"></div>
            <img
              src="/All.jpg"
              alt="Navokta Team"
              className="h-full w-full object-fill"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextElementSibling.style.display = 'flex';
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center" style={{ display: 'none' }}>
              <div className="text-center text-gray-300 p-4">
                <div className="w-16 h-16 sm:w-24 sm:h-24 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 sm:h-12 sm:w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <p className="text-sm sm:text-base font-medium">Group Photo Will Appear Here</p>
                <p className="text-xs sm:text-sm text-gray-400 mt-2">Image of the Navokta Team organizing this event</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganizerHeader;