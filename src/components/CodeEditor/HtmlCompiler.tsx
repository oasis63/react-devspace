import React, { useState } from "react";
import { TextField, Button, Typography } from "@mui/material";

const HtmlCompiler: React.FC = () => {
  const [inputHtml, setInputHtml] = useState<string>("");
  const [compiledHtml, setCompiledHtml] = useState<string>("");

  const compileHtml = () => {
    // Sanitize and validate the input HTML if needed
    // For simplicity, no sanitization is done in this example

    // Set the compiled HTML
    setCompiledHtml(inputHtml);
  };

  return (
    <div>
      <Typography variant="h6">Input HTML:</Typography>
      <TextField
        multiline
        fullWidth
        variant="outlined"
        value={inputHtml}
        onChange={(e) => setInputHtml(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={compileHtml}>
        Compile HTML
      </Button>
      <div style={{ marginTop: "16px" }}>
        <Typography variant="h6">Compiled HTML:</Typography>
        <div dangerouslySetInnerHTML={{ __html: compiledHtml }} />
      </div>
    </div>
  );
};

export default HtmlCompiler;
