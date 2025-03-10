import { RightCircleOutlined } from "@ant-design/icons";
import Link from "next/link";
import { useEffect } from "react";

export const StickyButtons = () => {
    const handleScroll = () => {
        let elementTarget = document.getElementById("heroc");
        let stickyTarget = document.querySelector('.sticky__container');
        if(elementTarget){
            if (elementTarget && window.scrollY > (100 + elementTarget?.offsetHeight)) {
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
                <Link className="sticky__buttons" href="/products-custom">Build Your Design <RightCircleOutlined /></Link>
                <Link className="sticky__buttons" href="/products">Pre-Made Designs <RightCircleOutlined /></Link>
            </div>
        </div>
    )
}