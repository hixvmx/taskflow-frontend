export default function Header() {
    return (
        <header className="bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo and navigation */}
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <span className="text-blue-600 font-bold text-xl">TaskFlow</span>
                        </div>
                        <nav className="hidden md:ml-6 md:flex md:space-x-4">
                            <a href="#" className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:bg-gray-100">
                                Boards
                            </a>
                        </nav>
                    </div>

                    {/* Search and user profile */}
                    <div className="flex items-center space-x-4">
                        <div className="relative max-md:hidden">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 text-gray-400">
                                    <g strokeWidth={0} />
                                    <g strokeLinecap="round" strokeLinejoin="round" />
                                    <g>
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M17.0392 15.6244C18.2714 14.084 19.0082 12.1301 19.0082 10.0041C19.0082 5.03127 14.9769 1 10.0041 1C5.03127 1 1 5.03127 1 10.0041C1 14.9769 5.03127 19.0082 10.0041 19.0082C12.1301 19.0082 14.084 18.2714 15.6244 17.0392L21.2921 22.707C21.6828 23.0977 22.3163 23.0977 22.707 22.707C23.0977 22.3163 23.0977 21.6828 22.707 21.2921L17.0392 15.6244ZM10.0041 17.0173C6.1308 17.0173 2.99087 13.8774 2.99087 10.0041C2.99087 6.1308 6.1308 2.99087 10.0041 2.99087C13.8774 2.99087 17.0173 6.1308 17.0173 10.0041C17.0173 13.8774 13.8774 17.0173 10.0041 17.0173Z"
                                            fill="currentColor"
                                        />
                                    </g>
                                </svg>
                            </div>
                            <input
                                type="text"
                                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-gray-50 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                placeholder="Search"
                            />
                        </div>
                        <div className="flex items-center">
                            <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white">
                                <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-white">
                                    <g strokeWidth={0} />
                                    <g strokeLinecap="round" strokeLinejoin="round" />
                                    <g>
                                        <circle cx={12} cy={6} r={4} stroke="currentColor" strokeWidth="1.5" />
                                        <path
                                            d="M20 17.5C20 19.9853 20 22 12 22C4 22 4 19.9853 4 17.5C4 15.0147 7.58172 13 12 13C16.4183 13 20 15.0147 20 17.5Z"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                        />
                                    </g>
                                </svg>
                            </div>
                            <svg viewBox="0 0 24 24" fill="none" className="ml-1 h-4 w-4 text-gray-500 max-sm:hidden">
                                <g strokeWidth={0} />
                                <g strokeLinecap="round" strokeLinejoin="round" />
                                <g>
                                    <path
                                        d="M19 9L12 15L5 9"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </g>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}