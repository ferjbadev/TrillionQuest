const Navbar = () => {
    return (
        <div className="navbar z-20 fixed top-0 left-0 w-full">
            <div className="flex-1 space-x-20">
                <a className="text-white text-3xl cursor-pointer hover:scale-110 hover:text-yellow-500 transition duration-300 ml-9">
                    Trillion Quest - casad
                </a>
                <a className="text-white text-3xl cursor-pointer hover:scale-110 hover:text-yellow-500 transition duration-300">
                    Why Choose Us
                </a>
            </div>
            <div className="flex-none lg:flex hidden">
                <ul className="menu menu-horizontal px-1 space-x-4">
                    <li>
                        <a className="text-white text-3xl py-3 hover:scale-110 hover:text-yellow-500 transition duration-300">
                            About Us
                        </a>
                    </li>
                    <li className="relative group">
                        <a className="text-white text-3xl py-3 hover:scale-110 hover:text-yellow-500 transition duration-300">
                            Services
                        </a>
                        <ul className="absolute hidden group-hover:block bg-gray-500 text-white space-y-2 top-full left-0 w-40 py-2 px-4 rounded">
                            <li><a className="hover:text-yellow-500 hover:scale-110">Web Development</a></li>
                            <li><a className="hover:text-yellow-500 hover:scale-110">App Development</a></li>
                            <li><a className="hover:text-yellow-500 hover:scale-110">UI/UX Design</a></li>
                        </ul>
                    </li>
                    <li>
                        <a className="text-white text-3xl py-3 hover:scale-110 hover:text-yellow-500 transition duration-300">
                            Contact Us
                            <span className="inline-block text-white hover:text-yellow-500 transition duration-300">→</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
