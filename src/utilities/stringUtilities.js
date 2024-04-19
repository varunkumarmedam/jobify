export const areEquals = (string1, string2) => {
    return isString(string1) && isString(string2) && (string1 === string2);
}

export const isString = (object) => typeof object === 'string' || object instanceof String;
