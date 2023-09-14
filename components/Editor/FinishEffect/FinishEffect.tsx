import { ICustomPlateTemplate } from '../../../interfaces/customTemplate.interface';

export const FinishEffect = (
    props: {
        customTemplate?: ICustomPlateTemplate
    }
) => {

    const {
        customTemplate
    } = props;

    return (
        <>
            {
                customTemplate?.finish === "GLOSS" && (
                    <div
                        style={{
                            backgroundImage: "url('../../images/backgrounds/gloss.png')",
                            backgroundSize: 'contain',
                            backgroundPositionX: 'center'
                        }}
                        className="background__finishEffect-gloss"
                    />
                )
            }
        </>


    )
}
