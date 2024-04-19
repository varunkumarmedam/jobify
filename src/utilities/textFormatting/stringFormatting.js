import { isString } from "../stringUtilities"

export const getRemoveLastNewLineFromEndIfExists = (string) => {
    if (!string || !isString(string) || !string.endsWith('\n'))
        return string;

    return string.substring(0, string.length - 1)
}