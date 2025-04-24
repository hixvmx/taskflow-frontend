import { LoaderIcon } from "../../icons"

export default function Suspense() {
    return (
        <div className="w-full min-h-64 flex items-center justify-center flex-col text-center">
            <LoaderIcon className="w-8 h-8 animate-spin" />
        </div>
    )
}