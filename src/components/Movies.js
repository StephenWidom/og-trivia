import React, { useState } from "react";
import { Button, Dialog } from "@blueprintjs/core";

const Movies = ({ quiz }) => {
    const [questionNum, setQuestionNum] = useState(0);
    const [question, setQuestion] = useState(quiz.prompts[0]);
    const [reveal, setReveal] = useState(false);
    const [started, setStarted] = useState(false);
    const { prompts } = quiz;

    const goQuestion = (modifier) => {
        let newQuestionNum = questionNum + modifier;
        if (newQuestionNum < 0) newQuestionNum = prompts.length - 1;
        if (newQuestionNum >= prompts.length) newQuestionNum = 0;
        setQuestionNum(newQuestionNum);
        setQuestion(prompts[newQuestionNum]);
        setReveal(false);
    };

    const revealAnswer = () => {
        setReveal(true);
    };

    return (
        <section className="Movies">
            <h1>{quiz.title}</h1>
            {started ? (
                <>
                    {question && (
                        <>
                            <div className="Question">
                                <h2>Question #{questionNum + 1}</h2>
                                <img src={require(`../assets/${question.file}`).default} />
                            </div>
                            <Dialog canEscapeKeyClose={true} canOutsideClickClose={true} isOpen={reveal} onClose={() => setReveal(false)}>
                                <div className="bp3-dialog-header">
                                    <h4 className="bp3-heading">The answer is...</h4>
                                </div>
                                <div className="bp3-dialog-body">
                                    <p className="answer">
                                        {question.actor} <span className="artist">{question.movie}</span>
                                    </p>
                                </div>
                            </Dialog>
                        </>
                    )}
                    <div className="QuestionNav">
                        <Button large={true} onClick={() => goQuestion(-1)} intent="primary" text="Prev" />
                        <Button large={true} onClick={revealAnswer} intent="danger" text="Reveal Answer" />
                        <Button large={true} onClick={() => goQuestion(1)} intent="primary" text="Next" />
                    </div>
                </>
            ) : (
                <>
                    <div className="description">{quiz.description}</div>
                    <Button onClick={() => setStarted(true)} text="Let's Go!" intent="success" large={true} />
                </>
            )}
        </section>
    );
};

export default Movies;
