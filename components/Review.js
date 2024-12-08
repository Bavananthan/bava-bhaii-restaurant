export default function Testimonials() {
    const reviews = [
      { name: "John Doe", review: "Amazing food and great service!" },
      { name: "Jane Smith", review: "The best restaurant in town. Highly recommend!" },
      { name: "Sam Wilson", review: "Delicious meals, cozy atmosphere." },
    ];
  
    return (
      <section id="testimonials" className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div key={index} className="bg-white shadow-lg p-6 rounded-lg">
                <p className="italic">{review.review}</p>
                <h3 className="font-bold mt-4">{review.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  