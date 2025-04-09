import { Link } from "react-router-dom";
import { ShoppingCart } from "react-feather";

export default function Header({ cartItemCount }) {
  return (
    <header className="bg-green-600 text-white p-4 sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
            <img
              src="logo.png"
              alt="Paradise Nursery Logo"
              width={32}
              height={32}
            />
          </div>
          <div>
            <h1 className="font-bold text-xl">Paradise Nursery</h1>
            <p className="text-xs">Where Green Meets Serenity</p>
          </div>
        </Link>

        <Link to="/cart" className="relative">
          <ShoppingCart size={24} />
          {cartItemCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {cartItemCount}
            </span>
          )}
        </Link>
      </div>
    </header>
  );
}
