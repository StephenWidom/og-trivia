import React, { useState } from "react";
import { Button, Dialog, Icon } from "@blueprintjs/core";
import ReactHowler from "react-howler";

const Music = ({ quiz }) => {
    const [questionNum, setQuestionNum] = useState(0);
    const [question, setQuestion] = useState(quiz.prompts[0]);
    const [reveal, setReveal] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [started, setStarted] = useState(false);
    const [volumeIndex, setVolumeIndex] = useState(1);
    const { prompts } = quiz;

    const volumes = [0.3, 0.9, 0.6];

    const goQuestion = (modifier) => {
        let newQuestionNum = questionNum + modifier;
        if (newQuestionNum < 0) newQuestionNum = prompts.length - 1;
        if (newQuestionNum >= prompts.length) newQuestionNum = 0;
        setQuestionNum(newQuestionNum);
        setQuestion(prompts[newQuestionNum]);
        setIsPlaying(false);
        setReveal(false);
    };

    const revealAnswer = () => {
        setReveal(true);
    };

    const audioStopped = () => {
        setIsPlaying(false);
    };

    const adjustVolume = () => {
        let newVolumeIndex = volumeIndex + 1;
        if (newVolumeIndex > volumes.length - 1) newVolumeIndex = 0;
        setVolumeIndex(newVolumeIndex);
        window.Howler.volume(volumes[newVolumeIndex]);
    };

    return (
        <section className="Music">
            <h1>{quiz.title}</h1>
            {started ? (
                <>
                    {question && (
                        <>
                            <div className="Question">
                                <h2>Question #{questionNum + 1}</h2>
                                <Button large={true} onClick={() => setIsPlaying(!isPlaying)} text={isPlaying ? "Pause" : "Play"} intent="success" />
                                <ReactHowler preload={true} onEnd={audioStopped} onStop={audioStopped} src={require(`../assets/audio/${question.file}`).default} playing={isPlaying} loop={false} />
                            </div>
                            <Dialog canEscapeKeyClose={true} canOutsideClickClose={true} isOpen={reveal} onClose={() => setReveal(false)}>
                                <div className="bp3-dialog-header">
                                    <h4 className="bp3-heading">The answer is...</h4>
                                </div>
                                <div className="bp3-dialog-body">
                                    <p className="answer">
                                        {question.title} <span className="artist">{question.artist}</span>
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
            <Icon iconSize={30} onClick={adjustVolume} icon={volumeIndex === 1 ? "volume-up" : volumeIndex === 2 ? "volume-down" : "volume-off"} />
        </section>
    );
};

export default Music;
