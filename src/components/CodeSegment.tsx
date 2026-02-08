import Editor from "@monaco-editor/react";

export default function CodeSegment()  {
  const code: string = `#! /bin/bash
# portfolio.sh

export USER="Avanteesh Motheram"

echo "# ----------------------------------------"
echo "# 'Bad Programmers worry about code, Good programmer's worry about Data Structures.' "
echo "#      — Linus Torvalds"
echo "# ----------------------------------------"

about_me()  {
  echo "Hi friends This is $USER"
  echo "I am a computer science undergraduate focused on backend and systems engineering."
  echo "I am a systems engineer who approaches problems from first principles."
  echo "I focus on building scalable, fault-tolerant systems by understanding,"
  echo "how components interact under load, failure, and real-world constraints."
}`;
  return (
    <div id="terminal" className="col-8">
      <div className="window-header">
        <div className="circle" style={{background:"rgb(255,8,82)", boxShadow:"0 0 8px rgb(255,8,82)"}}></div>
        <div className="circle" style={{background: "rgb(255,230,8)", boxShadow:"0 0 8px rgb(255,230,8)"}}></div>
        <div className="circle" style={{background: "rgb(8,255,57)",boxShadow:"0 0 8px rgb(8,255,57)"}}></div>
      </div>
      <Editor height="50vh" width="100%"
        defaultLanguage="shell" theme="vs-dark" options={{
          fontSize: 17,minimap: {enabled: false}, readOnly: true,
          scrollbar: {vertical: 'hidden', horizontal: 'hidden'} 
        }}value={code} 
      />
    </div>
  );
}

