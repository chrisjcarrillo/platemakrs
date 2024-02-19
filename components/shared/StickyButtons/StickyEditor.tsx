import Link from "next/link";
import { useEffect } from "react";

export const StickyEditor = () => {
    const handleScroll = () => {
        let elementTarget = document.getElementById("submitButton");
        let stickyTarget = document.querySelector('.sticky__container');
        if(elementTarget){
            if (elementTarget && window.scrollY > (350 + elementTarget?.offsetHeight)) {
                stickyTarget?.classList.add('show');
                stickyTarget?.classList.remove('hide');
            } else {
                stickyTarget?.classList.remove('show');
                stickyTarget?.classList.add('hide');
            }
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    });

    return(
        <div className={'sticky__container hide'}>
            <div className={'sticky__container-inner'}>
                <Link className="sticky__buttons" href="#__next">GET STARTED</Link>
            </div>
        </div>
    )
}