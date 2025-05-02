import { useState } from 'react';
import { Bell, Zap, Smartphone, Download } from 'lucide-react';

export default function ChaiCodeApp() {
  const [activeTab, setActiveTab] = useState('courses');

  return (
    <div className="flex items-center justify-center py-16 bg-gradient-to-b from-gray-900 to-gray-900- p-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Mobile App Preview */}
        <div className="w-64 h-[600px] bg-[#0B0C1F] rounded-3xl overflow-hidden border-4 border-gray-700 shadow-2xl relative">
          {/* Glow effect */}
          <div className="absolute -inset-0.5 bg-amber-500/20 rounded-3xl blur-sm"></div>
          
          {/* Phone content - above the glow */}
          <div className="relative z-10 h-full flex flex-col">
            {/* Header */}
            <div className="bg-amber-500 text-black p-4 flex justify-between items-center">
              <div className="flex items-center">
                <div className="mr-2 text-sm">&lt;&gt;</div>
                <span className="font-bold">ChaiCode</span>
              </div>
              <Bell size={20} />
            </div>

            {/* Content */}
            <div className="p-2 flex-1 overflow-y-auto">
              {/* Trending */}
              <div className="mb-4">
                <div className="text-amber-500 text-xs font-semibold mb-1">TRENDING</div>
                <div className="bg-gray-800 rounded-lg p-3">
                  <div className="text-white font-semibold">React Native Masterclass</div>
                  <div className="flex justify-between items-center mt-2">
                    <div className="flex items-center text-gray-400 text-xs">
                      <span>4.8 ★</span>
                      <span className="mx-1">•</span>
                      <span>2.5h</span>
                    </div>
                    <span className="bg-amber-500 text-black text-xs px-2 py-1 rounded">LIVE</span>
                  </div>
                </div>
              </div>

              {/* Popular */}
              <div className="mb-4">
                <div className="text-amber-500 text-xs font-semibold mb-1">POPULAR</div>
                <div className="bg-gray-800 rounded-lg p-3">
                  <div className="text-white font-semibold">Full Stack JavaScript</div>
                  <div className="flex justify-between items-center mt-2">
                    <div className="flex items-center text-gray-400 text-xs">
                      <span>4.9 ★</span>
                      <span className="mx-1">•</span>
                      <span>8h</span>
                    </div>
                    <span className="bg-gray-700 text-gray-300 text-xs px-2 py-1 rounded">ENROLLED</span>
                  </div>
                </div>
              </div>

              {/* New */}
              <div className="mb-4">
                <div className="text-amber-400 text-xs font-semibold mb-1">NEW</div>
                <div className="bg-gray-800 rounded-lg p-3">
                  <div className="text-white font-semibold">AI with JavaScript</div>
                  <div className="flex justify-between items-center mt-2">
                    <div className="flex items-center text-gray-400 text-xs">
                      <span>5.0 ★</span>
                      <span className="mx-1">•</span>
                      <span>4h</span>
                    </div>
                    <span className="bg-amber-600 text-white text-xs px-2 py-1 rounded">ENROLL</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Tabs */}
            <div className="bg-gray-900 text-gray-400 flex justify-around py-3 border-t border-gray-700">
              <div 
                className={`flex flex-col items-center ${activeTab === 'courses' ? 'text-amber-500' : ''}`}
                onClick={() => setActiveTab('courses')}
              >
                <div className="p-1 rounded">
                  <div className="w-5 h-5 border-2 border-current rounded mb-1 mx-auto flex items-center justify-center">
                    <div className="w-3 h-3 bg-current rounded-sm"></div>
                  </div>
                </div>
                <span className="text-xs">Courses</span>
              </div>
              <div 
                className={`flex flex-col items-center ${activeTab === 'live' ? 'text-amber-500' : ''}`}
                onClick={() => setActiveTab('live')}
              >
                <Zap size={20} className="mb-1" />
                <span className="text-xs">Live</span>
              </div>
              <div 
                className={`flex flex-col items-center ${activeTab === 'profile' ? 'text-amber-500' : ''}`}
                onClick={() => setActiveTab('profile')}
              >
                <Smartphone size={20} className="mb-1" />
                <span className="text-xs">Profile</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right side content */}
        <div className="md:ml-8 text-white max-w-xl">
          <h1 className="text-5xl font-bold text-amber-300 mb-6">Learn on the go</h1>
          <p className="text-xl text-gray-300 mb-10">
            Take your coding journey anywhere with the ChaiCode mobile app. Access
            courses, join live sessions, and connect with the community - all from your pocket.
          </p>

          <div className="space-y-6 mb-10">
            <div className="flex items-center">
              <div className="bg-amber-900/30 p-3 rounded-full mr-4">
                <Zap size={24} className="text-amber-500" />
              </div>
              <span className="text-lg text-gray-300">Offline course access</span>
            </div>
            
            <div className="flex items-center">
              <div className="bg-amber-900/30 p-3 rounded-full mr-4">
                <Bell size={24} className="text-amber-500" />
              </div>
              <span className="text-lg text-gray-300">Live session notifications</span>
            </div>
            
            <div className="flex items-center">
              <div className="bg-amber-900/30 p-3 rounded-full mr-4">
                <Smartphone size={24} className="text-amber-500" />
              </div>
              <span className="text-lg text-gray-300">Revision while commuting</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#" className="bg-amber-500 hover:bg-amber-600 text-black font-bold py-4 px-6 rounded-lg flex items-center transition-colors">
              <Download size={20} className="mr-2" />
              <div onClick={() => {
              window.location.href = "https://apps.apple.com/in/app/chaicode/id6504993143";
            }}>
                <div className="text-xs">Download on the</div>
                <div className="text-lg">App Store</div>
              </div>
            </a>
            <a href="#" className="bg-amber-500 hover:bg-amber-600 text-black font-bold py-4 px-6 rounded-lg flex items-center transition-colors">
              <Download size={20} className="mr-2" />
              <div  onClick={() => {
              window.location.href = "https://play.google.com/store/apps/details?id=com.chaicode.courses&pcampaignid=web_share";
            }}
              >
                <div className="text-xs">Get it on</div>
                <div className="text-lg">Google Play</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}