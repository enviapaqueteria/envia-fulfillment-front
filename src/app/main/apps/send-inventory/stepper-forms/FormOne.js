import React, {useRef} from 'react';
import {TextFieldFormsy} from '@fuse';
import Formsy from 'formsy-react';
import {useDispatch, useSelector} from 'react-redux';
import * as Actions from '../store/actions';

function FormOne()
{
    const currentStatus = useSelector(({currentForm}) => currentForm.forms.currentStatus);
    const dispatch = useDispatch();
    const formRef = useRef(null);

    function disableButton()
    {
        if(currentStatus === true) dispatch(Actions.setFormStatus(false));
    }

    function enableButton()
    {
        dispatch(Actions.setFormStatus(true));
    }

    // function handleSubmit(model)
    // {
    //     console.info('submit', model);
    // }

    return(
        <div className="max-w-sm">
            <Formsy
                onValid={enableButton}
                onInvalid={disableButton}
                ref={formRef}
                className="flex flex-col justify-center"
            >
                <TextFieldFormsy
                    className="my-16"
                    type="text"
                    name="name"
                    label="Name (Outlined)"
                    validations={{
                        minLength: 4
                    }}
                    validationErrors={{
                        minLength: 'Min character length is 4'
                    }}
                    required
                    variant="outlined"
                />

                <TextFieldFormsy
                    className="my-16"
                    type="text"
                    name="email"
                    label="Email (Outlined)"
                    validations="isEmail"
                    validationError="This is not a valid email"
                    required
                    variant="outlined"
                />
            </Formsy>
        </div>
    )
}

export default FormOne;
