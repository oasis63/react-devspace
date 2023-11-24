import React, { useEffect, useRef, useState } from "react";
import Editor from "react-monaco-editor";
import { TextField, Paper, Grid, Typography, Button } from "@mui/material";

interface CodeEditorProps {}

const CodeEditorWithMonaco: React.FC<CodeEditorProps> = () => {
  const htmlRef = useRef<HTMLInputElement>(null);
  const jsRef = useRef<HTMLInputElement>(null);
  const cssRef = useRef<HTMLInputElement>(null);
  const editorRef = useRef<any>(null); // Use "any" type for the Monaco Editor ref

  const [inputHtml, setInputHtml] = useState<string>("");
  const [output, setOutput] = useState<string>("");

  const editorContentChanged = (value: any) => {
    if (htmlRef && htmlRef.current) htmlRef.current.value = value;
    setInputHtml(value);
  };

  const handleRunCode = (event: any) => {
    console.log("event : ");
    console.log(event);
    event?.preventDefault();
    const htmlValue = htmlRef.current?.value || "";
    const jsValue = jsRef.current?.value || "";
    const cssValue = cssRef.current?.value || "";

    editorRef.current?.editor?.setValue(htmlValue);

    try {
      const htmlContent = `<html>
        <head>
          <style>${cssValue}</style>
        </head>
        <body>${htmlValue}</body>
        <script>${jsValue}</script>
      </html>`;

      // setOutput(htmlContent);
      // setOutput(htmlValue);
      setOutput(inputHtml);
    } catch (error) {
      setOutput(`Error: ${error}`);
    }
  };

  return (
    <>
      <Button variant="contained" color="primary" onClick={handleRunCode}>
        Run Code
      </Button>
      <Grid container xs={12} sm={12} md={12} lg={12} spacing={2}>
        <Grid item xs={6} sm={6} md={6} lg={6} container spacing={2}>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Paper elevation={3}>
              <Typography variant="h6">HTML:</Typography>
              <Editor
                language="html"
                theme="vs-dark"
                height={"500px"}
                width={"100%"}
                value=""
                onChange={editorContentChanged}
                editorDidMount={(editor, monaco) => {
                  editorRef.current = { editor, monaco };
                }}
              />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Paper elevation={3} style={{ padding: "16px" }}>
              <Typography variant="h6">JavaScript:</Typography>
              <TextField
                multiline
                fullWidth
                variant="outlined"
                inputRef={jsRef}
              />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Paper elevation={3} style={{ padding: "16px" }}>
              <Typography variant="h6">CSS:</Typography>
              <TextField
                multiline
                fullWidth
                variant="outlined"
                inputRef={cssRef}
              />
            </Paper>
          </Grid>
        </Grid>
        <Grid item xs={6} sm={6} md={6} lg={6} container spacing={2}>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            sx={{ border: "2px solid black" }}
          >
            <Typography variant="h6">Output:</Typography>
            <div dangerouslySetInnerHTML={{ __html: output }} />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default CodeEditorWithMonaco;
