import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="w-screen h-screen relative">
        <Image
          src="/stoic.png"
          alt="Stoic"
          fill
          className="object-cover"
          priority
        />
      </section>
      <section className="w-screen min-h-screen bg-white text-gray-900 py-16 px-4 sm:px-8 flex flex-col justify-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl font-bold mb-16 text-center text-gray-900 tracking-tight">CoNecto Rules</h1>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-xl font-bold mb-2 text-gray-900">1. FERBS and Post FERBS</h2>
                <p className="text-gray-700">State what you are going to accomplish in a day and end of day confirm what you achieved.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-xl font-bold mb-2 text-gray-900">2. Minimize Distractions</h2>
                <p className="text-gray-700">Turn off your phone and hide all notifications</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-xl font-bold mb-2 text-gray-900">3. Limit Context Switching</h2>
                <p className="text-gray-700">Batch long conversations to avoid interruptions</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-xl font-bold mb-2 text-gray-900">4. Relax After Dinner</h2>
                <p className="text-gray-700">Allow yourself to work comfortably only after dinner</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-xl font-bold mb-2 text-gray-900">5. Follow the 50/10 Rule</h2>
                <p className="text-gray-700">Work for 50 minutes, then take a 10-minute break</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-xl font-bold mb-2 text-gray-900">6. Pair Up</h2>
                <p className="text-gray-700">Work with a partner to stay accountable</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-xl font-bold mb-2 text-gray-900">7. Optional Meditation</h2>
                <p className="text-gray-700">Meditate before long work sessions to enhance focus</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-xl font-bold mb-2 text-gray-900">8. Structured Brainstorming</h2>
                <p className="text-gray-700">Ensure brainstorming sessions are well-organized</p>
              </div>
            </div>
            <div className="space-y-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-xl font-bold mb-2 text-gray-900">9. Music</h2>
                <p className="text-gray-700">Only classical and lofi music + hardcore music in hyperfocus mode</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-xl font-bold mb-2 text-gray-900">10. Break Down Tasks</h2>
                <p className="text-gray-700">Divide epics into smaller tasks to boost confidence by achieving quick wins</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-xl font-bold mb-2 text-gray-900">11. Respect Hyperfocus</h2>
                <p className="text-gray-700">Don't interrupt someone's hyperfocus unless you have a critical blocker, Hyperfocus is signaled by wearing headsets.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-xl font-bold mb-2 text-gray-900">12. Daily Exercise</h2>
                <p className="text-gray-700">Work out or walk for at least 1 hour every day</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-xl font-bold mb-2 text-gray-900">13. Eat Smart</h2>
                <p className="text-gray-700">Have small bites throughout the day</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-xl font-bold mb-2 text-gray-900">14. Healthy Snacks</h2>
                <p className="text-gray-700">Avoid sugar and processed snacks</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-xl font-bold mb-2 text-gray-900">15. No Alcohol or Smoking</h2>
                <p className="text-gray-700">Abstain from alcohol and smoking</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-xl font-bold mb-2 text-gray-900">16. Cold Showers</h2>
                <p className="text-gray-700">Cold showers are encouraged but optional</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-xl font-bold mb-2 text-gray-900">17. Stay Hydrated</h2>
                <p className="text-gray-700">Drink plenty of water</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
