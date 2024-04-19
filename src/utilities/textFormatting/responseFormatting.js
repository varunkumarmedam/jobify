import { getDecodedText } from "../codecUtility";
import { getRemoveLastNewLineFromEndIfExists } from "./stringFormatting";

const APIResponseSuccessCode = {
    200: 'SUCCESS'
}

const getAPIResponseMatching = {
    SUCCESS: APIResponseSuccessCode.API_SUCCESS_CODE
}

const CodeResponse = {
    ACCEPTED: 'ACCEPTED',
    COMPILATION_ERROR: 'COMPILATION_ERROR',
    RUN_TIME_ERROR: 'RUN_TIME_ERROR',
    TIMEOUT_ERROR: 'TIMEOUT_ERROR',
    UNKNOWN_RESPONSE: 'UNKNOWN_RESPONSE'
}

const getCodeResponseMatching = {
    3: CodeResponse.ACCEPTED,
    6: CodeResponse.COMPILATION_ERROR,
    8: CodeResponse.TIMEOUT_ERROR,
    11: CodeResponse.RUN_TIME_ERROR,
}

const CodeErrorType = {
    NONE: 'NONE',
    COMPILE_TIME_ERROR: 'COMPILE_TIME_ERROR',
    RUN_TIME_ERROR: 'RUN_TIME_ERROR',
    TIMEOUT_ERROR: 'TIMEOUT_ERROR',
    UNKNOWN_ERROR: 'UNKNOWN_ERROR',
}

export const constructTestCasesResult = (testCasesResult) => {
    const passedTestCases = getPassedTestCasesOutput(testCasesResult)
    const failedTestCases = getFailedTestCasesOutput(testCasesResult)
    const totalTestCount = testCasesResult?.length || 0;
    const failedTestCount = testCasesResult?.filter(onlyFailedTestCase())?.length || 0;
    const passedTestCount = totalTestCount - failedTestCount;
    const allTestCasesPassed = totalTestCount > 0 && totalTestCount === passedTestCount;
    const allTestCasesFailed = totalTestCount > 0 && totalTestCount === failedTestCount;

    return {
        passedTestCases: passedTestCases,
        failedTestCases: failedTestCases,
        totalTestCount: totalTestCount,
        failedTestCount: failedTestCount,
        passedTestCount: passedTestCount,
        allTestCasesPassed: allTestCasesPassed,
        allTestCasesFailed: allTestCasesFailed,
    };

}

const getPassedTestCasesOutput = (testCasesResult) => {
    const passedTestCases = testCasesResult.filter(onlyPassedTestCase())
    if (passedTestCases.length === 0)
        return ""

    return "Passed test cases:\n" + passedTestCases
        .map(testCase => getPassedTestCaseOutput(testCase)).join("\n");
}


const getPassedTestCaseOutput = (passedTestCase) => {
    return passedTestCase.input + "\n" +
        "Output: \n" +
        passedTestCase.actualOutput + "\n\n" +
        "------------------------------------------------------------\n"
}

const getFailedTestCasesOutput = (testCasesResult) => {
    const unsuccessfulTestCases = testCasesResult.filter(onlyFailedTestCase())

    if (unsuccessfulTestCases.length === 0)
        return ""
    return "Failed test cases:\n" + unsuccessfulTestCases
        .map(testCase => getFailedTestCaseOutput(testCase)).join("\n");
}

const getFailedTestCaseOutput = (failedTestCase) => {
    return failedTestCase.input + "\n" +
        "Your Output: \n" +
        failedTestCase.actualOutput + "\n\n" +
        "Expected output: \n" +
        failedTestCase.expectedOutput + "\n" +
        "------------------------------------------------------------\n"
}

const onlyPassedTestCase = () => {
    return testCase => testCase.areAllStepsCompletedSuccessfully
        && testCase.isTestCasePassing
}

const onlyFailedTestCase = () => {
    return testCase => testCase.areAllStepsCompletedSuccessfully
        && !testCase.isTestCasePassing
}

export const constructCodeExecutionResultFromResponseJson = (responseJson) => {
    const body = responseJson?.body;
    const statusId = body.status.id;
    const output = getOutput(responseJson)
    const isApiResponseSuccess = ifApiResponseSuccess(responseJson.statusCode);
    const isCodeAccepted = ifApiResponseSuccess(responseJson.statusCode) ? isCodeExecutionSucces(statusId) : false;
    const codeErrorTypeIfExist = getCodeErrorType(responseJson);
    const codeExecutionTime = getCodeExecutionTimeInSeconds(body.time);
    const areAllStepsCompletedSuccessfully = isApiResponseSuccess && isCodeAccepted;
    return {
        isApiResponseSuccess: isApiResponseSuccess,
        isCodeAccepted: isCodeAccepted,
        codeErrorTypeIfExist: codeErrorTypeIfExist,
        output: output,
        areAllStepsCompletedSuccessfully: areAllStepsCompletedSuccessfully,
        codeExecutionTime: codeExecutionTime
    }
}

const getOutput = (responseJson) => {
    if (ifApiResponseSuccess(responseJson.statusCode)) {
        return getCodeOutput(responseJson.body);
    } else {
        return "Failed to get response from the API."
    }
}
const ifApiResponseSuccess = (statusCode) => getAPIResponseMatching[statusCode] === APIResponseSuccessCode.SUCCESS

const getCodeOutput = (body) => {
    if (isCodeExecutionSucces(body.status.id)) {
        return getSuccessDecodedMessage(body.stdout);
    } else {
        return getErrorMessage(body)
    }
}

const isCodeExecutionSucces = (statusId) => getCodeResponseMatching[statusId] === CodeResponse.ACCEPTED

const getSuccessDecodedMessage = (stdout) => getRemoveLastNewLineFromEndIfExists(getDecodedText(stdout))

const getErrorMessage = (body) => {
    if (isCompileTimeError(body.status.id))
        return "Compile Time Error:\n" + getCompileTimeErrorMessage(body.compile_output)
    else if (isRunTimeError(body.status.id))
        return "Run Time Error:\n" + getStdOutMessage(body.stdout)
    else if (isTimeoutError(body.status.id))
        return "Timeout Error:\n" + getStdOutMessage(body.stdout)
    else
        return getStdOutMessage(body)
}

const isCompileTimeError = (statusId) => {
    return getCodeResponseMatching[statusId] === CodeResponse.COMPILATION_ERROR;
}

const getCompileTimeErrorMessage = (compile_output) => getRemoveLastNewLineFromEndIfExists(getDecodedText(compile_output))

const isRunTimeError = (statusId) => getCodeResponseMatching[statusId] === CodeResponse.RUN_TIME_ERROR;

const isTimeoutError = (statusId) => getCodeResponseMatching[statusId] === CodeResponse.TIMEOUT_ERROR;

const getStdOutMessage = (stdout) => getRemoveLastNewLineFromEndIfExists(getDecodedText(stdout))

const getCodeErrorType = (responseJson) => {
    const statusId = responseJson?.body?.status?.id
    return (!ifApiResponseSuccess(responseJson.statusCode) || isCodeExecutionSucces(statusId))
        ? CodeErrorType.NONE : getCodeErrorTypeIfNotSuccess(statusId);
}

const getCodeErrorTypeIfNotSuccess = (statusId) => {
    if (isCompileTimeError(statusId))
        return CodeErrorType.COMPILE_TIME_ERROR;
    else if (isRunTimeError(statusId))
        return CodeErrorType.RUN_TIME_ERROR
    else if (isTimeoutError(statusId))
        return CodeErrorType.TIME_OUT_ERROR
    else
        return CodeErrorType.UNKNOWN_ERROR
}
const getCodeExecutionTimeInSeconds = (time) => !time ? 0 : Number(time)