import { Badge, Button, ColorPicker, Input } from 'antd';
import { useContext } from 'react';
import { StoreContext, StoreContextType } from '../../../../context/storeContext';
import { EditorContext, EditorContextType } from '../../../../context/editorContext';


export const NoteInput = () => {

    const {
        setNotes,
    } = useContext(StoreContext) as StoreContextType;

    const {
        currentCustomTemplate
    } = useContext(EditorContext) as EditorContextType;

    const { TextArea } = Input;

    return (
        <div className={`noteInput animate__animated animate__fadeIn`}>

            <div className={`noteInput__title animate__animated animate__fadeIn`}>
                <p className={`noteInput__text`}>Enter Additional Notes</p>
            </div>
            <div className="noteInput__badge">
                {
                    (currentCustomTemplate?.sportsTeam && currentCustomTemplate?.preset) && (
                        <Badge className="noteInput__badge-details" count="If you want a different team tell us here" />
                    )
                }
            </div>

            <div className={`noteInput__container`}>
                <TextArea
                    onChange={(e) => setNotes(e.target.value)}
                    rows={3}
                    placeholder='Additional Notes (Ex: Logo Change)'
                />
            </div>
        </div>
    )
}