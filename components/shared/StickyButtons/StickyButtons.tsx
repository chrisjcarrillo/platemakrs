import { useEffect } from "react";

export const StickyButtons = () => {
    const handleScroll = () => {
        let elementTarget = document.querySelector(".hero__container");
        let stickyTarget = document.querySelector('.sticky__container');
        if(elementTarget){
            if (elementTarget && window.scrollY > (25 + elementTarget?.offsetHeight)) {
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
        <div className={'sticky__container'}>
            <div className={'sticky__container-inner'}>
                <a className="sticky__buttons" href="/editor">Build Your Plate</a>
                <a className="sticky__buttons" href="/products">Pre-Made Designs</a>
            </div>
        </div>
    )
}