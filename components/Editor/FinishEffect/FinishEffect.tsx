import fadeUp from '../../../public/images/bg/carbon-fiber-fade-up.png'
import { ITemplate } from '../../../interfaces/template.interface';
import { ICustomPlateTemplate } from '../../../interfaces/customTemplate.interface';

export const FinishEffect = (
    props: {
        template?: ITemplate | undefined,
        customTemplate?: ICustomPlateTemplate
    }
) => {

    const {
        template,
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
