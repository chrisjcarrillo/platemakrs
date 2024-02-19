import Link from "next/link";
import { useEffect } from "react";

export const StickyEditor = () => {
    const handleScroll = () => {
        let elementTarget = document.getElementById("submitButton");
        let elementTargetTwo = document.getElementById("order-actions"); 
        let stickyTarget = document.querySelector('.sticky__container');
        if(elementTarget){
            if (elementTarget && window.scrollY > (310 + elementTarget?.offsetHeight)) {
                stickyTarget?.classList.add('show');
                stickyTarget?.classList.remove('hide');
            } else {
                stickyTarget?.classList.remove('show');
                stickyTarget?.classList.add('hide');
            }
        } else if (elementTargetTwo) {
            if (elementTargetTwo && window.scrollY > (310 + elementTargetTwo?.offsetHeight)) {
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