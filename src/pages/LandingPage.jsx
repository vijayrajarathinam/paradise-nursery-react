import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <div className="absolute inset-0 z-0">
        <img
          src="images/nursery-background.jpg"
          alt="Paradise Nursery Background"
          className="w-full h-full object-cover brightness-50"
        />
      </div>

      <div className="relative z-10 flex-1 flex flex-col md:flex-row items-center p-6 md:p-12 text-white">
        <div className="md:w-1/2 space-y-6 md:pr-8">
          <h1 className="text-4xl md:text-5xl font-bold">
            Welcome To
            <br />
            Paradise Nursery
          </h1>
          <p className="text-xl">Where Green Meets Serenity</p>
          <Link
            to="/products"
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-md transition-colors"
          >
            Get Started
          </Link>
        </div>

        <div className="md:w-1/2 mt-8 md:mt-0 bg-black/30 p-6 rounded-lg backdrop-blur-sm">
          <h2 className="text-2xl font-semibold mb-4">
            Welcome to Paradise Nursery, where green meets serenity!
          </h2>
          <div className="space-y-4">
            <p>
              At Paradise Nursery, we are passionate about bringing nature
              closer to you. Our mission is to provide a wide range of
              high-quality plants that not only enhance the beauty of your
              surroundings but also contribute to a healthier and more
              sustainable lifestyle. From air- purifying plants to aromatic
              fragrant ones, we have something for every plant enthusiast.
            </p>
            <p>
              Our team of experts is dedicated to ensuring that each plant meets
              our strict standards of quality and care. Whether you're a
              seasoned gardener or just starting your green journey, we're here
              to support you every step of the way. Feel free to explore our
              collection, ask questions, and let us help you find the perfect
              plant for your home or office.
            </p>
            <p>
              Join us in our mission to create a greener, healthier world. Visit
              Paradise Nursery today and experience the beauty of nature right
              at your doorstep.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
