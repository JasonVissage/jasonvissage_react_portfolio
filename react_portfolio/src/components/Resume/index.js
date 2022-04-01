import React, { useState } from 'react';

function Resume() {
  return (
    <div className="resume">
      <h1>Resume</h1>
      <a href="./JVResume.pdf" className="resume-button" download>
        Download
      </a>
    </div>
  );
}

export default Resume;
