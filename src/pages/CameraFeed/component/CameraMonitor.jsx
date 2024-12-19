import React, { useState, useRef, useEffect } from "react";
import camera from "../../../../public/image/icons/camera.svg";
import { GrFormEdit } from "react-icons/gr";
import { LiaCodeBranchSolid, LiaHashtagSolid } from "react-icons/lia";
import { PiArrowUUpLeft, PiArrowUUpRight } from "react-icons/pi";
import { LuRotateCcw } from "react-icons/lu";
import { CameraFeedList } from "../utils";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const CameraMonitor = () => {
  const [currentCamIndex, setCurrentCamIndex] = useState(0);
  const [lines, setLines] = useState([]); // Store lines state
  const [startPoint, setStartPoint] = useState(null); // Start point for line
  const [tempLine, setTempLine] = useState(null); // Temporary line for preview

  const canvasRef = useRef(null);
  const videoRef = useRef(null);

  const nextCam = () => {
    setCurrentCamIndex((prevIndex) =>
      prevIndex === CameraFeedList.length - 1 ? 0 : prevIndex + 1
    );
    resetCanvas();
  };

  const prevCam = () => {
    setCurrentCamIndex((prevIndex) =>
      prevIndex === 0 ? CameraFeedList.length - 1 : prevIndex - 1
    );
    resetCanvas();
  };

  // Reset the canvas when switching videos
  const resetCanvas = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      setLines([]); // Clear previous lines
      setStartPoint(null); // Clear start point for the new line
      setTempLine(null); // Clear temporary line
    }
  };

  const startDrawing = (e) => {
    if (!startPoint) {
      // First click, set start point
      const { offsetX, offsetY } = e.nativeEvent;
      setStartPoint({ x: offsetX, y: offsetY });
      setTempLine(null); // Clear any previous temporary line
    } else {
      // Second click, finalize the line
      const { offsetX, offsetY } = e.nativeEvent;
      setLines((prevLines) => [
        ...prevLines,
        { start: startPoint, end: { x: offsetX, y: offsetY } },
      ]);
      setStartPoint(null); // Reset start point for next line
      setTempLine(null); // Clear temporary line
    }
  };

  const handleMouseMove = (e) => {
    if (startPoint) {
      // Draw the temporary line while the cursor moves
      const { offsetX, offsetY } = e.nativeEvent;
      setTempLine({ start: startPoint, end: { x: offsetX, y: offsetY } });
    }
  };
  console.log(lines);
  useEffect(() => {
    // Re-draw all lines and the temporary line whenever the lines or tempLine state changes
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Clear previous drawings
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw all stored lines
    lines.forEach((line) => {
      // Draw the line
      ctx.beginPath();
      ctx.moveTo(line.start.x, line.start.y);
      ctx.lineTo(line.end.x, line.end.y);
      ctx.strokeStyle = "#34eb5c";
      ctx.lineWidth = 2;
      ctx.stroke();

      // Draw a circle at the start point
      ctx.beginPath();
      ctx.arc(line.start.x, line.start.y, 5, 0, 2 * Math.PI); // Circle with radius 5
      ctx.fillStyle = "#34eb5c";
      ctx.fill();

      // Draw a circle at the end point
      ctx.beginPath();
      ctx.arc(line.end.x, line.end.y, 5, 0, 2 * Math.PI); // Circle with radius 5
      ctx.fillStyle = "#34eb5c";
      ctx.fill();
    });

    // If there's a temporary line, draw it
    if (tempLine) {
      ctx.beginPath();
      ctx.moveTo(tempLine.start.x, tempLine.start.y);
      ctx.lineTo(tempLine.end.x, tempLine.end.y);
      ctx.strokeStyle = "#34eb5c";
      ctx.lineWidth = 2;
      ctx.stroke();

      // Draw a circle at the start point of the temporary line
      ctx.beginPath();
      ctx.arc(tempLine.start.x, tempLine.start.y, 5, 0, 2 * Math.PI); // Circle with radius 5
      ctx.fillStyle = "#34eb5c";
      ctx.fill();

      // Draw a circle at the end point of the temporary line
      ctx.beginPath();
      ctx.arc(tempLine.end.x, tempLine.end.y, 5, 0, 2 * Math.PI); // Circle with radius 5
      ctx.fillStyle = "#34eb5c";
      ctx.fill();
    }
  }, [lines, tempLine]);

  useEffect(() => {
    resetCanvas();
  }, [currentCamIndex]);

  const resetDrawing = () => {
    // Clear canvas
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
    }

    // Reset lines and currentPath state
    setLines([]);
    setStartPoint(null); // Clear the start point state
    setTempLine(null); // Clear the temporary line
  };

  return (
    <section className="custom-cards monitor p-3">
      <div className="d-flex justify-content-between pagination">
        <p className="f-14 Helvetica Neue mb-0">
          <img src={camera} alt="i" /> {CameraFeedList[currentCamIndex].title}
        </p>
        <div className="d-flex gap-2">
          <IoIosArrowBack onClick={prevCam} className="icons" />
          <IoIosArrowForward onClick={nextCam} className="icons" />
        </div>
      </div>

      <div className="mt-3 d-flex position-relative">
        <div style={{ position: "relative", width: "100%" }}>
          <video
            ref={videoRef}
            className="w-100"
            autoPlay
            muted
            key={currentCamIndex}
          >
            <source
              src={CameraFeedList[currentCamIndex].video}
              type="video/mp4"
            />
          </video>
          <canvas
            ref={canvasRef}
            width={videoRef.current?.clientWidth || 800}
            height={videoRef.current?.clientHeight || 450}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              border: "1px solid transparent",
              cursor: "crosshair",
            }}
            onClick={startDrawing} // Handle the line drawing on click
            onMouseMove={handleMouseMove} // Handle the temporary line while moving the cursor
          />
        </div>

        <div
          className="px-3 d-flex flex-column justify-content-between"
          style={{ paddingBottom: "60px" }}
        >
          <div>
            <GrFormEdit className="icon active mb-2" />
            <LiaHashtagSolid className="icon mb-2" />
            <LiaCodeBranchSolid className="icon mb-2" />
          </div>
          <div>
            <PiArrowUUpLeft className="icon mb-2" />
            <PiArrowUUpRight className="icon mb-2" />
            <LuRotateCcw className="icon" onClick={resetDrawing} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CameraMonitor;
