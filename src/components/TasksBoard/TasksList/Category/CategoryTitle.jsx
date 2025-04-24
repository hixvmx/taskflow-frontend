import { useState } from "react"
import axiosClient from "../../../../lib/axiosClient";

export default function CategoryTitle({ name, slug }) {

    const [newName, setNewName] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const closeEditor = async () => {
        if (!newName) return;

        if (name !== newName) {
            try {
                setIsLoading(true)


                await axiosClient.put('/api/categories', { name: newName, slug });


            } catch (err) {
                console.log("Error:", err);
            } finally {
                setIsLoading(false)
            }
        }
    }

    return (
        <div className="p-1 w-full border-b relative">
            {isLoading && loader()}
            <input
                type="text"
                className="w-full p-2 rounded-md border-b font-medium text-gray-900 outline-none"
                value={!newName ? name : newName}
                onChange={(e) => setNewName(e.target.value)}
                onBlur={closeEditor}
            />
        </div>
    )
}

const loader = () => {
    return (
        <div className="absolute top-2/4 -translate-y-2/4 right-2">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill={"none"}
                className="w-4 h-4 animate-spin text-blue-800"
                stroke="currentColor"
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
}