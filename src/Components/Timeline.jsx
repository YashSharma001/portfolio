import React from "react";
import data from "../assets/data.json";

const Timeline = () => {
    return (
        <div id="timeline">
            <div className="timelineBox">
                {data.projects.map((i, index) => (
                    <TimelineItem
                        heading={i.title}
                        text={i.date}
                        index={index}
                        key={i.title}
                    />
                ))}
            </div>
        </div>
    );
};

const TimelineItem = ({ heading, text, index }) => (
    <div
        className={`timelineItem ${index % 2 === 0 ? "leftTimeline" : "rightTimeline"
            }`}
    >
        <div>
            <h2>{heading}</h2>
            <p>{text}</p>
        </div>
    </div>
);

export default Timeline;