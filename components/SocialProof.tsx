export default function SocialProof() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#1A1A1A] text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {/* Metrics Placeholder */}
        <div><h3 className="text-4xl font-bold mb-2">15+</h3><p className="text-gray-400 text-sm">Products Delivered</p></div>
        <div><h3 className="text-4xl font-bold mb-2">4</h3><p className="text-gray-400 text-sm">Years Experience</p></div>
        <div><h3 className="text-4xl font-bold mb-2">3</h3><p className="text-gray-400 text-sm">Global Timezones</p></div>
        <div><h3 className="text-4xl font-bold mb-2">100%</h3><p className="text-gray-400 text-sm">Remote Ready</p></div>
      </div>
    </section>
  );
}