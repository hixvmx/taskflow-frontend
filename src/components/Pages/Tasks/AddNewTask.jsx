import { useState } from "react";
import { CloseIcon } from "../../../icons";
import Modal from "../../Shared/Modal";
import PrimaryButton from "../../Shared/PrimaryButton";
import axiosClient from "../../../lib/axiosClient";


export default function AddNewCategory({ close, refresh }) {

    const [categoryName, setCategoryName] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const handleClick = async () => {
        if (!categoryName) return;


        try {
            setIsLoading(true)


            await axiosClient.post('/api/categories', { name: categoryName });

            refresh();
            
            close();

        } catch (err) {
            console.log("Error:", err);
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <Modal
            className="fixed md:max-w-[600px] w-full -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4 z-[11013]"
            close={close}
        >
            <div className="max-md:px-2">
                <div className="rounded-lg shadow-lg bg-white w-full max-h-[60dvh] overflow-y-auto">
                    <div className="bg-white h-[65px] flex items-center justify-between px-4 lg:px-6 border-b shadow-sm">
                        <h2 className="text-xl font-semibold">Add New Category</h2>
                        <button
                            onClick={close}
                            className="flex shrink-0 justify-center items-center bg-transparent hover:bg-primary/5 rounded-lg text-secondary/80 cursor-pointer outline-none transition-all duration-300 ease-in-out">
                            <CloseIcon className="w-5 h-5" />
                        </button>
                    </div>

                    <div className="px-4 lg:px-6 py-4 w-full">
                        <input
                            type="text"
                            className="w-full py-3 lg:px-6 px-4 rounded-md text-md font-semibold border outline-none lg:mb-6 mb-4"
                            placeholder="Category Name..."
                            value={categoryName}
                            onChange={(e) => setCategoryName(e.target.value)}
                        />
                        <PrimaryButton
                            type="text"
                            name="Save Changes"
                            onClick={handleClick}
                            disabled={isLoading || !categoryName}
                            isLoading={isLoading}
                        />
                    </div>
                </div>
            </div>
        </Modal>
    )
}