import React, { useEffect } from 'react';

export default function TweetLove() {
  useEffect(() => {
    // Load Twitter's widget script to render the embedded tweets
    const script = document.createElement('script');
    script.src = 'https://platform.twitter.com/widgets.js';
    script.async = true;
    script.charset = 'utf-8';
    document.body.appendChild(script);

    return () => {
      // Cleanup script if the component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="bg-[#000001] py-12 sm:py-16 md:py-20 text-center text-gray-300">
      <div className="max-w-4xl mx-auto px-4">
        <p className="text-gray-400 mb-2">Love that we get from our community</p>
        
        <h2 className="text-4xl font-bold mb-8 text-amber-300">Tweet Love</h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8  h-25">
  {/* First Twitter Card */}
  <div className="border-2 border-gray-700 rounded-lg bg-[#0B0C1F] shadow-lg transition-transform duration-300 hover:scale-105 hover:border-amber-500  h-50 ">
    <div >
      <div
        dangerouslySetInnerHTML={{
          __html: `
            <blockquote class="twitter-tweet">
              <p lang="en" dir="ltr">
                Feeling super blessed to receive a prize from Hitesh sir! Now my motivation level is officially higher than my phone’s screen time 😁.
                <br>Thank you sir!
                <a href="https://twitter.com/Hiteshdotcom?ref_src=twsrc%5Etfw">@Hiteshdotcom</a>
                <a href="https://twitter.com/piyushgarg_dev?ref_src=twsrc%5Etfw">@piyushgarg_dev</a>
                <a href="https://t.co/tyIxF4nyJD">pic.twitter.com/tyIxF4nyJD</a>
              </p>
              &mdash; Saurabh (@saurabhHD)
              <a href="https://twitter.com/saurabhHD/status/1906390359841640771?ref_src=twsrc%5Etfw">March 30, 2025</a>
            </blockquote>
          `,
        }}
      />
    </div>
  </div>

  {/* Second Twitter Card */}
  <div className="border-2 border-gray-700 rounded-lg bg-[#0B0C1F] shadow-lg transition-transform duration-300 hover:scale-105 hover:border-amber-500">
    <div className="aspect-w-16 aspect-h-9 flex items-center justify-center">
    <div >
      <div
        dangerouslySetInnerHTML={{
          __html: `
            <blockquote class="twitter-tweet">
              <p lang="en" dir="ltr">
                Feeling super blessed to receive a prize from Hitesh sir! Now my motivation level is officially higher than my phone’s screen time 😁.
                <br>Thank you sir!
                <a href="https://twitter.com/Hiteshdotcom?ref_src=twsrc%5Etfw">@Hiteshdotcom</a>
                <a href="https://twitter.com/piyushgarg_dev?ref_src=twsrc%5Etfw">@piyushgarg_dev</a>
                <a href="https://t.co/tyIxF4nyJD">pic.twitter.com/tyIxF4nyJD</a>
              </p>
              &mdash; Saurabh (@saurabhHD)
              <a href="https://twitter.com/saurabhHD/status/1906390359841640771?ref_src=twsrc%5Etfw">March 30, 2025</a>
            </blockquote>
          `,
        }}
      />
    </div>

      
    </div>
  </div>

  {/* Third Twitter Card */}
  <div className="border-2 border-gray-700 rounded-lg bg-[#0B0C1F] shadow-lg transition-transform duration-300 hover:scale-105 hover:border-amber-500">
    <div className="aspect-w-16 aspect-h-9 flex items-center justify-center">
      <p className="text-gray-300">
        Twitter cards<br />
        with course reviews
      </p>
    </div>
  </div>
</div>
        
        <button className="px-6 py-3 border border-amber-500 text-amber-300 rounded-md hover:bg-amber-500 hover:text-black transition-colors">
          Join Cohorts Live Classes
        </button>
      </div>
    </div>
  );
}