import { languageIdMapping } from "./language/languageUtilities";
import { questions } from "../Questions/questions";
import { decode as base64_decode, encode as base64_encode } from "base-64";

export const getEncodedText = (string) => base64_encode(string)
export const getDecodedText = (string) => base64_decode(string)

export const getDefaultCodeForLanguage = (questionIndex, languageId) => {
    const language = languageIdMapping[languageId];
    return questions[questionIndex][language].codeSnippet
}

export const getFunctionText = (questionIndex, code, languageId) => {
    const language = languageIdMapping[languageId];
    const re = new RegExp(questions[questionIndex][language].functionCallTextRegex)
    const matchedTexts = re.exec(code);
    return matchedTexts.length > 0 ? matchedTexts[0] : null;
}