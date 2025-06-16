import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

const minuteSeconds = 60;
const hourSeconds = 3600;
const daySeconds = 86400;

const timerProps = {
  isPlaying: true,
  size: 80,
  strokeWidth: 4,
};

const renderTime = (dimension, time) => {
  return (
    <div className="time-wrapper">
      <div className="time">{time}</div>
      <div>{dimension}</div>
    </div>
  );
};

const getTimeMinutes = (time) => ((time % hourSeconds) / minuteSeconds) | 0;
const getTimeHours = (time) => ((time % daySeconds) / hourSeconds) | 0;
const getTimeDays = (time) => (time / daySeconds) | 0;

export default function CountDown({ registrationStart }) {
  const stratTime = Date.now() / 1000; // use UNIX timestamp in seconds
  const endTime = new Date(registrationStart).getTime() / 1000; // use UNIX timestamp in seconds

  const remainingTime = endTime - stratTime;
  const days = Math.ceil(remainingTime / daySeconds);
  const daysDuration = days * daySeconds;

  return (
    <div className="flex gap-6">
      {/* <CountdownCircleTimer
        {...timerProps}
        colors="#7E2E84"
        duration={daysDuration}
        initialRemainingTime={remainingTime}
      >
        {({ elapsedTime, color }) => (
          <span
            style={{
              color,
              padding: "4px",
              fontSize: "13px",

              display: "inline-block",
              textAlign: "center",
            }}
          >
            {renderTime("days", getTimeDays(daysDuration - elapsedTime))}
          </span>
        )}
      </CountdownCircleTimer>

      <CountdownCircleTimer
        {...timerProps}
        colors="#D14081"
        duration={daySeconds}
        initialRemainingTime={remainingTime % daySeconds}
        onComplete={(totalElapsedTime) => ({
          shouldRepeat: remainingTime - totalElapsedTime > hourSeconds,
        })}
      >
        {({ elapsedTime, color }) => (
          <span
            style={{
              color,
              padding: "4px",
              fontSize: "13px",

              display: "inline-block",
              textAlign: "center",
            }}
          >
            {renderTime("hours", getTimeHours(daySeconds - elapsedTime))}
          </span>
        )}
      </CountdownCircleTimer>

      <CountdownCircleTimer
        {...timerProps}
        colors="#EF798A"
        duration={hourSeconds}
        initialRemainingTime={remainingTime % hourSeconds}
        onComplete={(totalElapsedTime) => ({
          shouldRepeat: remainingTime - totalElapsedTime > minuteSeconds,
        })}
      >
        {({ elapsedTime, color }) => (
          <span
            style={{
              color,
              padding: "8px",
              fontSize: "13px",

              display: "inline-block",
              textAlign: "center",
            }}
          >
            {renderTime("minutes", getTimeMinutes(hourSeconds - elapsedTime))}
          </span>
        )}
      </CountdownCircleTimer> */}
      <CountdownCircleTimer
        {...timerProps}
        colors="#FB923C" // orange-400
        duration={daysDuration}
        initialRemainingTime={remainingTime}
      >
        {({ elapsedTime, color }) => (
          <span
            style={{
              color,
              padding: "4px",
              fontSize: "13px",
              display: "inline-block",
              textAlign: "center",
            }}
          >
            {renderTime("days", getTimeDays(daysDuration - elapsedTime))}
          </span>
        )}
      </CountdownCircleTimer>

      <CountdownCircleTimer
        {...timerProps}
        colors="#F97316" // orange-500
        duration={daySeconds}
        initialRemainingTime={remainingTime % daySeconds}
        onComplete={(totalElapsedTime) => ({
          shouldRepeat: remainingTime - totalElapsedTime > hourSeconds,
        })}
      >
        {({ elapsedTime, color }) => (
          <span
            style={{
              color,
              padding: "4px",
              fontSize: "13px",
              display: "inline-block",
              textAlign: "center",
            }}
          >
            {renderTime("hours", getTimeHours(daySeconds - elapsedTime))}
          </span>
        )}
      </CountdownCircleTimer>

      <CountdownCircleTimer
        {...timerProps}
        colors="#EA580C" // orange-600
        duration={hourSeconds}
        initialRemainingTime={remainingTime % hourSeconds}
        onComplete={(totalElapsedTime) => ({
          shouldRepeat: remainingTime - totalElapsedTime > minuteSeconds,
        })}
      >
        {({ elapsedTime, color }) => (
          <span
            style={{
              color,
              padding: "8px",
              fontSize: "13px",
              display: "inline-block",
              textAlign: "center",
            }}
          >
            {renderTime("minutes", getTimeMinutes(hourSeconds - elapsedTime))}
          </span>
        )}
      </CountdownCircleTimer>
    </div>
  );
}
