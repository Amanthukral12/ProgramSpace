const Header = ({icon, title, borderColor}) => {
    return (
        <div className={` flex flex-row sticky top-0 z-10 p-3 justify-center font-semibold bg-white border-t-8 ${borderColor}`}>
            <div className="ml-1 mr-auto flex flex-row ">
                <img src={icon} alt="logo" className="h-6 w-6 m-1 mr-2" />
                <h1 className="text-center text-2xl">{title}</h1>
            </div>
            <span className="ml-auto px-2 py-1 text-white bg-gray-700 rounded">
                🏆 Featured Today
            </span>
        </div>
    )
}

export default Header
