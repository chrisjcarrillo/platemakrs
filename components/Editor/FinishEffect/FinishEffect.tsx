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
                            backgroundImage: "url('../../images/resources/gloss/1.png')",
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
