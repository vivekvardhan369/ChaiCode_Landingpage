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
      try {
        // Cleanup script if the component unmounts
        document.body.removeChild(script);
      } catch (e) {
        // Handle the case where script might have been removed already
        console.log("Script already removed");
      }
    };
  }, []);

  return (
    <div className="bg-[#000001] py-12 sm:py-16 md:py-20 text-center text-gray-300">
      <div className="max-w-4xl mx-auto px-4">
        <p className="text-gray-400 mb-2">Love that we get from our community</p>
        
        <h2 className="text-4xl font-bold mb-8 text-amber-300">Tweet Love</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* First Twitter Card */}
          <div className="border-2 border-gray-700 rounded-lg bg-[#0B0C1F] shadow-lg transition-transform duration-300 hover:scale-105 hover:border-amber-500 h-[600px] ">
            <div className="h-full flex items-center justify-center p-4">
              <div
                dangerouslySetInnerHTML={{
                  __html: `
                    <blockquote class="twitter-tweet">
                      <p lang="en" dir="ltr">
                        Feeling super blessed to receive a prize from Hitesh sir! Now my motivation level is officially higher than my phone's screen time 😁.
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
          <div className="border-2 border-gray-700 rounded-lg bg-[#0B0C1F] shadow-lg transition-transform duration-300 hover:scale-105 hover:border-amber-500 h-[600px] ">
            <div className="h-full flex items-center justify-center p-4">
              <div
                dangerouslySetInnerHTML={{
                  __html: `
                    <blockquote class="twitter-tweet"><p lang="en" dir="ltr">Our cohorts are experience to have. When you learn from real world experienced folks, it’s totally a game changer. <br>These small talks can happen only in live classes. <br><br>Check out <a href="https://twitter.com/hashtag/chaiCode?src=hash&amp;ref_src=twsrc%5Etfw">#chaiCode</a> for our new cohorts <a href="https://t.co/I4kwrK2pFe">pic.twitter.com/I4kwrK2pFe</a></p>&mdash; Hitesh Choudhary (@Hiteshdotcom) <a href="https://twitter.com/Hiteshdotcom/status/1905574126112153860?ref_src=twsrc%5Etfw">March 28, 2025</a></blockquote> 
                  `,
                }}
              />
            </div>
          </div>

          {/* Third Twitter Card */}
          <div className="border-2 border-gray-700 rounded-lg bg-[#0B0C1F] shadow-lg transition-transform duration-300 hover:scale-105 hover:border-amber-500 h-[600px] ">
            <div className="h-full flex items-center justify-center p-4">
              <div
                dangerouslySetInnerHTML={{
                  __html: `
                     <blockquote class="twitter-tweet">
                      <p lang="en" dir="ltr">
                        Feeling super blessed to receive a prize from Hitesh sir! Now my motivation level is officially higher than my phone's screen time 😁.
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
        
        <button className="px-6 py-3 border border-amber-500 text-amber-300 rounded-md hover:bg-amber-500 hover:text-black transition-colors"
        onClick={() => {
          // Redirect to the login page
          window.location.href = "https://courses.chaicode.com/learn/view-all?show=batch&type=17";
        }}>
          Join Cohorts Live Classes
        </button>
      </div>
    </div>
  );
}