

export default function PrimaryButton({
    className = "w-fit",
    type = "button",
    name = "Button 212",
    onClick = () => { },
    disabled = false,
    isLoading = false,
}) {

    const buttonColors = `${className} text-white bg-blue-600 ${disabled ? 'opacity-95' : 'hover:bg-blue-700'}`;

    return (
        <div className="flex flex-col">
            <button
                onClick={onClick}
                type={type}
                disabled={disabled}
                className={`outline-none py-3 px-6 rounded-md text-md font-semibold transition-all duration-200 ease-in flex items-center justify-center gap-2 relative ${buttonColors}`}>
                <span className={isLoading ? 'opacity-10' : ''}>{name}</span>
                {isLoading && <Spinner />}
            </button>
        </div>
    )
}

const Spinner = () => (
    <div className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill={"none"}
            className="w-6 h-6 animate-spin"
            stroke="white"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <g strokeWidth={0} />
            <g strokeLinecap="round" strokeLinejoin="round" />
            <g>
                <path d="M21 12a9 9 0 11-6.219-8.56" />{" "}
            </g>
        </svg>
    </div>
)