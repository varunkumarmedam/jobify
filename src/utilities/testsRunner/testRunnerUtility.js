import { constructTestCasesResult, constructCodeExecutionResultFromResponseJson } from "../textFormatting/responseFormatting"
import { getEncodedText } from "../codecUtility"
import { runCodeRequest } from "../requests/runCodeUtility"
import { areEquals } from "../stringUtilities"

export const getBasicTestCasesResult = async (sourceCode, languageId, functionToReplace, callsReplacement) => {
    const response = await Promise.all(callsReplacement.map(async callReplacement => {
        return await getResultForTestCase(sourceCode, functionToReplace, callReplacement, languageId)
    }))

    return getVerdict(response)
}

const getVerdict = (testCasesResult) => {
    if (testCasesResult.length === 0)
        return "";

    return constructTestCasesResult(testCasesResult)
}

export async function getResultForTestCase(sourceCode, functionToReplace, replacementWithExpectedOutput, languageId) {
    const sourceCodeWithNewInput = sourceCode.replace(functionToReplace, replacementWithExpectedOutput.code)
    const expectedOutput = replacementWithExpectedOutput.output

    const responseJson = await Promise.resolve(runCodeRequest(getEncodedText(sourceCodeWithNewInput), languageId))
    const testCasesResult = constructCodeExecutionResultFromResponseJson(responseJson)

    return {
        input: replacementWithExpectedOutput.code,
        isApiResponseSuccess: testCasesResult.isApiResponseSuccess,
        isCodeAccepted: testCasesResult.isCodeAccepted,
        codeErrorTypeIfExist: testCasesResult.codeErrorTypeIfExist,
        codeExecutionTime: testCasesResult.codeExecutionTime,
        expectedOutput: expectedOutput,
        actualOutput: testCasesResult.output,
        areAllStepsCompletedSuccessfully: testCasesResult.areAllStepsCompletedSuccessfully,
        isTestCasePassing: areEquals(expectedOutput, testCasesResult.output)
    }
}


