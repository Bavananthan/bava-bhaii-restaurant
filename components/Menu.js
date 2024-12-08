export default function Menu() {
    const menuItems = [
      { name: "Pizza Margherita", price: "$12.99", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr_recP_rGzbDF_HfiF63vxEs9dRGKZiTbjw&s" },
      { name: "Spaghetti Carbonara", price: "$10.99", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvW5M0HjdIrao0v0JMkbMoeV1m-rL-7LIbyg&s" },
      { name: "Tiramisu", price: "$6.99", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToqx-9i2jq0liFBKEWW2HoZIYw64LhkKqv2Q&s" },
    { name: "Pizza Margherita", price: "$12.99", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShXQwRSb53CMzVFrtFDlf2EslD9OpHTtUkLQ&s" },
      { name: "Spaghetti Carbonara", price: "$10.99", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvW5M0HjdIrao0v0JMkbMoeV1m-rL-7LIbyg&s" },
      { name: "Tiramisu", price: "$6.99", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToqx-9i2jq0liFBKEWW2HoZIYw64LhkKqv2Q&s" },
   
    
    ];
  
    return (
      <section id="menu" className="py-16 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Menu</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-slideIn">
            {menuItems.map((item, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
                <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-bold">{item.name}</h3>
                  <p className="text-gray-600 mt-2">{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  