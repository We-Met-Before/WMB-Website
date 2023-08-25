"use client"

import React, { useState, useEffect } from 'react';
// import fs from 'fs';
import path from 'path';

function LoadHTMLComponent() {
  const [existingHtml, setExistingHtml] = useState('');

  useEffect(() => {
    const filePath = path.join(process.cwd(), 'public/existing.html');
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        console.error('Error reading existing.html:', err);
        return;
      }
      setExistingHtml(data);
    });
  }, []);

  return (
    <div dangerouslySetInnerHTML={{ __html: existingHtml }} />
  );
}

export default LoadHTMLComponent;