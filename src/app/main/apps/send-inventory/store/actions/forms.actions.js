export const SET_FORM_STATUS = 'FORM STATUS';

export function setFormStatus(currentStatus)
{
    return {
        type      : SET_FORM_STATUS,
        formBool  : currentStatus
    }
}

