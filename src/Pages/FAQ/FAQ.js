import React from 'react';

const FAQ = () => {
    return (
        <div>
            <h3 className=' text-center text-primary fw-bold mt-4'> Programming Interview Questions and Answers <br /> </h3>
            <h4 className=' text-center text-success fw-bold mb-4' >So, without any further ado, here we go to practice</h4>

            <ol>
                <li> <h5>  Question: Please explain what you understand by computer programming. </h5>
                    Answer: Also known as coding or programming, computer programming is the process of encoding an algorithm into a notation, typically a computer program, by means of some programming language so that it can be executed by a computer.

                    Each programming language contains a set of instructions for the computer to execute a set of tasks. Programming is a complex process that includes designing an algorithm, coding the same in a programming language, debugging a program, maintaining, and updating the code.
                </li> <br />

                <li>
                    <h5> Question: Can you enumerate and explain the various types of errors that can occur during the execution of a computer program? </h5>
                    Answer: Three types of errors can occur during the execution of a computer program. These are:
                    Logical errors – This occurs in the scenario of a computer program implementing the wrong logic. As there is no report generated for these types of programming errors, they are the most difficult ones to deal with.
                    Runtime errors – Occurs when the program contains an illegal operation. For example, dividing a number by 0. These are the only errors that are displayed instantly during the program execution. Upon the occurrence of a runtime error, the program execution is stopped and a diagnostic message is displayed.
                    Syntax errors – Occurs when one or more grammatical rules of the programming language being used is violated. Such errors are detected during compile time.
                </li>

                <li>
                    <h5> Question: Please explain an algorithm. What are some of its important features?</h5>
                    Answer: An algorithm can be defined as a set of finite steps that when followed helps in accomplishing a particular task. Important features of an algorithm are clarity, efficiency, and finiteness.</li> <br />

                <li> <h5>Question: What do you understand by maintaining and updating a computer program?</h5>
                    Answer: The maintenance and updating process of a computer program starts post its successful installation. While program maintenance is the continuous process of monitoring the computer program for bugs and errors, updating the computer program means making it better with minor and major changes over time. </li>

                <li> <h5> Question: Please provide a brief explanation on variables.</h5>
                    Answer: Variables are used for storing the input of a program as well as the computational results during program execution. These are actually named memory locations. The value stored in a variable can change during the program execution.</li> <br />

                <li> <h5> Question: Every programming language has reserved words. What are they? Give some examples. </h5>
                    Answer: Reserved words, also known as keywords, are the words that have predefined meanings in a particular programming language. These reserved words can’t be used or redefined for serving other purposes. Following are some examples of reserved words:
                    C – break, case, char, default, else, float, if, and int
                    Java – abstract, boolean, catch, class, const, double, enum, finally, implements, instanceof, throws, transient, and volatile
                    Python – and, assert, continue, def, del, global, not, lambda, raise, and yield </li> <br />
                <li> <h5>  Question: What do you understand by loops? Briefly explain the various types of loops. </h5>
                    Answer: A loop is a structure in programming that can repeat a defined set of statements for a set number of times or until a particular condition is satisfied. There are three important types of loops:</li> <br />

                FOR…NEXT Loop – This is the most effective loop when you know beforehand the total number of times the loop is to be repeated
                WHILE…WEND Loop – It keeps on repeating a particular action until the concerned condition becomes false. This loop is particularly useful when the total number of repetitions is unknown.
                Nested Loop – When a loop is used inside a loop then it is termed as a nested loop

                <li> <h5>  Question: Please explain program documentation. Why is it important? </h5>
                    Answer: Program documentation is the written description of the algorithm(s), coding method, design, testing, and proper use of a particular computer program. It is valuable for those who use the program on a day-to-day basis and also for the programmer(s) who are meant to correct, modify, and update the computer program.

                    Reliable documentation is a must for an earnest programmer. The availability of thorough documentation helps not only in keeping track of the various aspects of a computer application but also helps in improving the overall quality of the same. The main focus of program documentation is development, maintenance, and knowledge transfer to other developers.</li> <br />

                <li> <h5> Question: What are constants? Explain their types.</h5>
                    Answer: A constant is a programming entity whose value can’t be changed or modified during program execution. Constants are of two main types:

                    Numeric constants – Includes integers, single-precision, and double-precision numbers. For example, 22, 24, -898, 4.5, and 73.45
                    String constants – Includes a sequence of alphanumeric characters enclosed in double quotation marks. The maximum length of a string constant is 255 characters. For example, “Shimla,” “I Love You,” and “Orange Is the New Black” </li> <br />
                <li> <h5> Question: Please explain the operators. </h5>
                    Answer: Operators are used for performing certain operations on data in a computer program. These are represented by symbols. For example, / represent mathematical division while * represents multiplication. There are 4 main types of operators:

                    Arithmetic – Used for carrying out mathematical operations
                    Assignment – Used for storing computational results, strings, and values in variables
                    Logical – Used for allowing a computer program to make a decision based on multiple conditions. In other words, logical operators allow combining simple conditions to form more complex conditions
                    Relational – Used for defining or testing some kind of relation between two entities. These operators evaluate to either true or false and produce a non-zero value
                </li>
                <li> <h5> Question: Could you explain arrays? </h5>
                    Answer: An array is a programming structure that is a collection of several data values of the same type. In terms of memory, an array is a group of contiguous memory locations storing data of the same type. <br />
                </li>
                <li> <h5> Question: What do you understand by a subroutine? </h5>
                    Answer: A self-contained set of statements usable from anywhere in a computer program is known as a subroutine. Once the subroutine successfully performs its intended task it returns the control to the section of the program called the subroutine. </li> <br />

                <li> <h5> Question: Explain low-level and high-level programming languages. Also, give some examples. </h5>
                    Answer: Any programming language that offers no generalization from the computer’s instruction set architecture is a low-level programming language. Assembly language and machine language are two typical examples of low-level programming languages.

                    A programming language that offers high generalization from the computer’s instruction set architecture is termed a high-level programming language. Typically, a high-level programming language has elements resembling natural language to make program development easier.

                    Another definition of a high-level programming language is one that is independent of the underlying processor of the system in which it is running. C++, Java, and Python are some of the most popular high-level programming languages.
                </li> <br />
                <li> <h5> Question: What do you understand by machine code? </h5>
                    Answer: Machine code is a low-level programming language. Unlike high-level programming languages that come with a compiler to transform high-level code into machine code for execution, a microprocessor directly processes machine code without doing such a transformation. </li> <br />

                <li> <h5>  Question: Do you know about modeling languages? Give some examples. <br /></h5>
                    Answer: Any artificial language usable for expressing information or knowledge or systems in an arrangement determined by a reliable set of rules is called a modeling language.
                    The same set of rules is also used for interpreting the meaning of the components of a modeling language structure. Following are some examples of modeling languages:

                    Business Process Modeling Notation
                    Extended Enterprise Modeling Language
                    Flowchart
                    Jackson Structured Programming
                    Systems Modeling Language
                    Unified Modeling Language </li> <br />

                <li> <h5> Question: Please explain software testing. Why do we need it? </h5>
                    Answer: Like programming, software testing is an important aspect of any software development life cycle model, whether it be the traditional waterfall model or the modern Rapid Application Development (RAD) model.

                    Under the process of software testing, the software is tested in certain conditions to check for the quality of the same. Another important motive for testing a computer program is to assess whether it succeeds in delivering a good user experience or not. Some other reasons include:

                    Checking for improvements
                    Ensure proper/intended working
                    Meeting user requirements </li>
            </ol>

        </div>
    );
};

export default FAQ;