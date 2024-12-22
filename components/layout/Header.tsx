const Header: React.FC = () => (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
        <div className="text-lg font-bold">
            Logo
        </div>
        <nav>
            <ul className="flex space-x-4">
                <li>Rooms</li>
                <li>Mansion</li>
                <li>Countryside</li>
            </ul>
        </nav>
        <div>
            <button className="mr-2">Sign In</button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded"></button>
        </div>
    </header>
)

export default Header