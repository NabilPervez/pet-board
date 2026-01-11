import { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { PostCard } from './components/PostCard';
import { SAMPLE_POSTS } from './data/sampleData';
import { Search, Filter, MapPin } from 'lucide-react';

function App() {
  const [activeTab, setActiveTab] = useState<'Lost' | 'Found' | 'All'>('All');

  // Drill-down states
  const [selectedState, setSelectedState] = useState<string>('');
  const [selectedCounty, setSelectedCounty] = useState<string>('');
  const [selectedCity, setSelectedCity] = useState<string>('');

  // Derived filters for dropdowns
  const availableStates = useMemo(() => {
    return Array.from(new Set(SAMPLE_POSTS.map(p => p.location.state))).sort();
  }, []);

  const availableCounties = useMemo(() => {
    if (!selectedState) return [];
    return Array.from(new Set(
      SAMPLE_POSTS
        .filter(p => p.location.state === selectedState)
        .map(p => p.location.county)
    )).sort();
  }, [selectedState]);

  const availableCities = useMemo(() => {
    if (!selectedCounty) return [];
    return Array.from(new Set(
      SAMPLE_POSTS
        .filter(p => p.location.county === selectedCounty && p.location.state === selectedState)
        .map(p => p.location.city)
    )).sort();
  }, [selectedState, selectedCounty]);

  // Filtered Posts
  const filteredPosts = useMemo(() => {
    return SAMPLE_POSTS.filter(post => {
      // Tab Filter
      if (activeTab !== 'All' && post.status !== activeTab) return false;

      // Location Drilldown
      if (selectedState && post.location.state !== selectedState) return false;
      if (selectedCounty && post.location.county !== selectedCounty) return false;
      if (selectedCity && post.location.city !== selectedCity) return false;

      return true;
    });
  }, [activeTab, selectedState, selectedCounty, selectedCity]);

  const handleStateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedState(e.target.value);
    setSelectedCounty('');
    setSelectedCity('');
  };

  const handleCountyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCounty(e.target.value);
    setSelectedCity('');
  };

  return (
    <div className="min-h-screen bg-creamy-white font-sans text-dark-slate pb-20">
      <Header />

      {/* Hero Section */}
      <div className="bg-soft-teal/10 py-12 md:py-20 px-4 mb-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-dark-slate mb-6 tracking-tight leading-tight">
            Let's get them <span className="text-soft-teal">home safe.</span>
          </h1>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            The central database for lost and found pets. Connect with your community to reunite pets with their families.
          </p>

          {/* Main Action Toggle */}
          <div className="inline-flex bg-white p-1 rounded-full shadow-lg mb-8 mx-auto">
            <button
              onClick={() => setActiveTab('Lost')}
              className={`px-8 py-3 rounded-full font-bold transition-all duration-200 ${activeTab === 'Lost' ? 'bg-warm-orange text-white shadow-md' : 'text-gray-500 hover:bg-gray-50'}`}
            >
              I Lost a Pet
            </button>
            <button
              onClick={() => setActiveTab('Found')}
              className={`px-8 py-3 rounded-full font-bold transition-all duration-200 ${activeTab === 'Found' ? 'bg-soft-teal text-white shadow-md' : 'text-gray-500 hover:bg-gray-50'}`}
            >
              I Found a Pet
            </button>
            <button
              onClick={() => setActiveTab('All')}
              className={`px-6 py-3 rounded-full font-bold transition-all duration-200 ${activeTab === 'All' ? 'bg-dark-slate text-white shadow-md' : 'text-gray-500 hover:bg-gray-50'}`}
            >
              View All
            </button>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Filters Bar */}
        <div className="bg-white p-6 rounded-2xl shadow-card mb-10 -mt-16 relative z-10 border border-gray-100">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="flex items-center gap-2 text-soft-teal font-bold min-w-fit">
              <Filter className="h-5 w-5" />
              <span>Filter Location</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
              <div className="relative">
                <select
                  className="w-full appearance-none bg-gray-50 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded-xl focus:outline-none focus:ring-2 focus:ring-soft-teal focus:border-transparent"
                  value={selectedState}
                  onChange={handleStateChange}
                >
                  <option value="">All States</option>
                  {availableStates.map(state => (
                    <option key={state} value={state}>{state}</option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                  <MapPin className="h-4 w-4" />
                </div>
              </div>

              <div className="relative">
                <select
                  className="w-full appearance-none bg-gray-50 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded-xl focus:outline-none focus:ring-2 focus:ring-soft-teal focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
                  value={selectedCounty}
                  onChange={handleCountyChange}
                  disabled={!selectedState}
                >
                  <option value="">All Counties</option>
                  {availableCounties.map(county => (
                    <option key={county} value={county}>{county}</option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                  <MapPin className="h-4 w-4" />
                </div>
              </div>

              <div className="relative">
                <select
                  className="w-full appearance-none bg-gray-50 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded-xl focus:outline-none focus:ring-2 focus:ring-soft-teal focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  disabled={!selectedCounty}
                >
                  <option value="">All Cities</option>
                  {availableCities.map(city => (
                    <option key={city} value={city}>{city}</option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                  <MapPin className="h-4 w-4" />
                </div>
              </div>
            </div>

            <button
              onClick={() => { setSelectedState(''); setSelectedCounty(''); setSelectedCity(''); }}
              className="text-gray-400 hover:text-warm-orange text-sm font-bold whitespace-nowrap px-4"
            >
              Reset
            </button>
          </div>
        </div>

        {/* Results Info */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-dark-slate">
            {activeTab === 'All' ? 'Recent Posts' : activeTab === 'Lost' ? 'Lost Pets Near You' : 'Found Pets Near You'}
            <span className="ml-3 text-sm font-normal text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
              {filteredPosts.length} Results
            </span>
          </h2>
        </div>

        {/* Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map(post => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-gray-200">
            <div className="bg-gray-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="h-8 w-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-bold text-dark-slate mb-2">No pets found in this area</h3>
            <p className="text-gray-500 max-w-md mx-auto">
              Try adjusting your filters or expanding your search radius.
            </p>
            <button onClick={() => { setSelectedState(''); setSelectedCounty(''); setSelectedCity(''); }} className="mt-6 btn btn-primary">
              Clear Filters
            </button>
          </div>
        )}
      </main>
    </div>
  )
}

export default App
