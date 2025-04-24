import { useEffect } from 'react';


export default function Modal({
    wallBackground = 'bg-black/30',
    children,
    className = "fixed lg:max-w-[600px] w-full -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4 z-[1011]",
    close,
}) {


    // hide scrolling
    useEffect(() => {
        const bodyElement = document.body;
        const hasScrollbar = window.innerWidth > document.documentElement.clientWidth;

        bodyElement.style.overflow = "hidden";
        if (hasScrollbar) {
            bodyElement.style.paddingRight = "17px";
        }

        return () => {
            bodyElement.style.overflow = "";
            if (hasScrollbar) {
                bodyElement.style.paddingRight = "";
            }
        };
    },[])


    return (
        <>
            <div onClick={close} className={`${wallBackground} fixed top-0 left-0 w-full h-full z-[11012] animation-01`}></div>
            <div className={className}>
                {children}
            </div>
        </>
    )
}