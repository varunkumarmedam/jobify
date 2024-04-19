
export const questions = [
    {
        JAVASCRIPT: {
            codeSnippet: 'function getResult(input, k) {\n  return "";\n}\n\nconsole.log(getResult("JOBIFYISHIRING", 2))',
            functionCallTextRegex: 'console\.log\\(getResult\\([\^\n]+\\)',
            testCases: [
                {
                    code: 'console.log(getResult("JOBIFYISHIRING", 3))',
                    output: 'JFHNOIYSIIGBIR'
                },
                {
                    code: 'console.log(getResult("NEWYORKISALOVELYCITY", 4))',
                    output: 'NKVTERIOEIYWOSLLCYAY'
                },
                {
                    code: 'console.log(getResult("HELLO", 6))',
                    output: 'HELLO'
                },
            ],
        },
        PYTHON2: {
            codeSnippet: 'def get_result(string, k):\n  return ""\n  \nprint(get_result("JOBIFYISHIRING", 2))',
            functionCallTextRegex: 'print\\(get_result\\([^\n]+\\)',
            testCases: [
                {
                    code: 'print(get_result("JOBIFYISHIRING", 3))',
                    output: 'JFHNOIYSIIGBIR'
                },
                {
                    code: 'print(get_result("NEWYORKISALOVELYCITY", 4))',
                    output: 'NKVTERIOEIYWOSLLCYAY'
                },
                {
                    code: 'print(get_result("HELLO", 6))',
                    output: 'HELLO'
                },
            ],
        },
        PYTHON3: {
            codeSnippet: 'def get_result(string, k):\n  return ""\n  \nprint(get_result("JOBIFYISHIRING", 2))',
            functionCallTextRegex: 'print\\(get_result\\([^\n]+\\)',
            testCases: [
                {
                    code: 'print(get_result("JOBIFYISHIRING", 3))',
                    output: 'JFHNOIYSIIGBIR'
                },
                {
                    code: 'print(get_result("NEWYORKISLOVELYCITY", 4))',
                    output: 'NKVTERIOEIYWOSLLCYAY'
                },
                {
                    code: 'print(get_result("HELLO", 6))',
                    output: 'HELLO'
                },
            ],
        },
        JAVA: {
            codeSnippet: 'public class Main {\n  public static void main(String[] args) {\n    System.out.println(getResult("JOBIFYISHIRING", 2));\n  }\n  \n  private static String getResult(String s, int k) {\n    return "";\n  }\n}',
            functionCallTextRegex: 'System\.out\.println\\(getResult\\([^\n]+\\)\\);',
            testCases: [
                {
                    code: 'System.out.println(getResult("JOBIFYISHIRING", 3));',
                    output: 'JFHNOIYSIIGBIR'
                },
                {
                    code: 'System.out.println(getResult("NEWYORKISALOVELYCITY", 4));',
                    output: 'NKVTERIOEIYWOSLLCYAY'
                },
                {
                    code: 'System.out.println(getResult("HELLO", 6));',
                    output: 'HELLO'
                },
            ],
        },
        CPP: {
            codeSnippet: '#include <iostream>\nusing namespace std;\n\nstring getResult(string input, int k) {\n  return "";\n}\n\nint main() {\n  cout << getResult("JOBIFYISHIRING",2) << endl;\n  return 0;\n}',
            functionCallTextRegex: 'cout[\ \t]*<<[\ \t]*getResult\\([^\n]+\\)[\ \t]*<<[\ \t]*endl;',
            testCases: [
                {
                    code: 'cout << getResult("JOBIFYISHIRING",3) << endl;',
                    output: 'JFHNOIYSIIGBIR'
                },
                {
                    code: 'cout << getResult("JOBIFYISHIRING",4) << endl;',
                    output: 'NKVTERIOEIYWOSLLCYAY'
                },
                {
                    code: 'cout << getResult("JOBIFYISHIRING",4HELLO<< end6;',
                    output: 'HELLO'
                },
            ],
        },
        PHP: {
            codeSnippet: '<?php\nfunction getResult($string, $k) {\n  return "Hello world!";\n}\n\necho getResult("JOBIFYISHIRING", 2);\n?>',
            functionCallTextRegex: 'echo[\ \t]+getResult\\([^\n]+\\);',
            testCases: [
                {
                    code: 'echo getResult("JOBIFYISHIRING", 3);',
                    output: 'JFHNOIYSIIGBIR'
                },
                {
                    code: 'echo getResult("NEWYORKISLOVELYCITY", 4);',
                    output: 'NKVTERIOEIYWOSLLCYAY'
                },
                {
                    code: 'echo getResult("HELLO", 6);',
                    output: 'HELLO'
                },
            ],
        },
        SCALA: {
            codeSnippet: 'object Main {\n    def main(args: Array[String]): Unit = {\n      println(getResult("JOBIFYISHIRING", 2))\n    }\n    \n    def getResult(input: String, k: Int): String = {\n      ""\n    }\n}',
            functionCallTextRegex: '[\ \t]\*println\\(getResult\\([^\n]+\\)\\)',
            testCases: [
                {
                    code: 'println(getResult("JOBIFYISHIRING", 3))',
                    output: 'JFHNOIYSIIGBIR'
                },
                {
                    code: 'println(getResult("NEWYORKISLOVELYCITY", 4))',
                    output: 'NKVTERIOEIYWOSLLCYAY'
                },
                {
                    code: 'println(getResult("HELLO", 6))',
                    output: 'HELLO'
                },
            ],
        },
        TYPESCRIPT: {
            codeSnippet: 'function getResult(input: String, k: Number) {\n  return "";\n}\n\nconsole.log(getResult("JOBIFYISHIRING", 2));',
            functionCallTextRegex: 'console\.log\\(getResult\\([^\n]+\\);',
            testCases: [
                {
                    code: 'console.log(getResult("JOBIFYISHIRING", 3))',
                    output: 'JFHNOIYSIIGBIR'
                },
                {
                    code: 'console.log(getResult("NEWYORKISLOVELYCITY", 4))',
                    output: 'NKVTERIOEIYWOSLLCYAY'
                },
                {
                    code: 'console.log(getResult("HELLO", 6))',
                    output: 'HELLO'
                },
            ],
        },
        RUST: {
            codeSnippet: 'fn main() {\n   println!("{}", get_result("JOBIFYISHIRING", 2));\n}\n\nfn get_result(_input: &str, _k: i32) -> &str {\n    return "";\n}',
            functionCallTextRegex: 'println!\\("{}", get_result\\([^\n]+\\)\\);',
            testCases: [
                {
                    code: 'println!("{}", get_result("JOBIFYISHIRING", 3));',
                    output: 'JFHNOIYSIIGBIR'
                },
                {
                    code: 'println!("{}", get_result("NEWYORKISLOVELYCITY", 4));',
                    output: 'NKVTERIOEIYWOSLLCYAY'
                },
                {
                    code: 'println!("{}", get_result("HELLO", 6));',
                    output: 'HELLO'
                },
            ],
        },
        RUBY: {
            codeSnippet: 'def getResult(input, k)\n   return ""\nend\n\nputs (getResult("JOBIFYISHIRING",2))',
            functionCallTextRegex: 'puts[\ \t]*\\(getResult\\([^\n]+\\)\\)',
            testCases: [
                {
                    code: 'puts (getResult("JOBIFYISHIRING", 3))',
                    output: 'JFHNOIYSIIGBIR'
                },
                {
                    code: 'puts (getResult("NEWYORKISLOVELYCITY", 4))',
                    output: 'NKVTERIOEIYWOSLLCYAY'
                },
                {
                    code: 'puts (getResult("HELLO", 6))',
                    output: 'HELLO'
                },
            ],
        },
        GOLANG: {
            codeSnippet: 'package main\nimport "fmt"\n\n\nfunc getResult(input string, k int) string {\n    return "";\n}\n\nfunc main() {\n    fmt.Printf(getResult("JOBIFYISHIRING", 2))\n}',
            functionCallTextRegex: 'fmt\.Printf\\(getResult\\([^\n]+\\)\\)',
            testCases: [
                {
                    code: 'fmt.Printf(getResult("JOBIFYISHIRING", 3))',
                    output: 'JFHNOIYSIIGBIR'
                },
                {
                    code: 'fmt.Printf(getResult("NEWYORKISLOVELYCITY", 4))',
                    output: 'NKVTERIOEIYWOSLLCYAY'
                },
                {
                    code: 'fmt.Printf(getResult("HELLO", 6))',
                    output: 'HELLO'
                },
            ],
        }
    }
];