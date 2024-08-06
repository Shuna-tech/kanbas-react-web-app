import React, { useEffect, useState } from 'react';
// @ts-ignore
import { Editor } from 'react-draft-wysiwyg';
import { EditorState } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { useDispatch, useSelector } from 'react-redux';
import { updateQuiz, updateDraftQuiz } from './reducer';
import { useParams } from 'react-router';

export default function RichTextEditor() {
  const { qid, questionId } = useParams();
  const isNew = qid === 'new';
  const dispatch = useDispatch();
  const quiz = useSelector((state: any) => state.quizzes.draftQuiz);
  const question = quiz.questions.find((q: any) => q.questionId === Number(questionId));

  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [title, setTitle] = useState(question?.questionTitle || '');
  const [type, setType] = useState(question?.questionType || 'Multiple Choice');
  const [points, setPoints] = useState(question?.points || 0);

  console.log("isNew value:", isNew);
  console.log("qid from params:", qid);
  console.log("questionId from params:", questionId);

  // Update function to manipulate local questions array then dispatch
  const updateQuestionsAndDispatch = () => {
    // Create a new array with the updated question
    const updatedQuestions = quiz.questions.map((q: any) => q.questionId === Number(questionId) ? {
      ...q,
      questionTitle: title,
      questionType: type,
      points: points,
      question: editorState.getCurrentContent().getPlainText()
    } : q);

    // Dispatch update with the new questions array
    dispatch(updateDraftQuiz({
      ...quiz,
      questions: updatedQuestions
    }));
  };

  // When changes occur, update the global state
  useEffect(() => {
    if (isNew) {
      updateQuestionsAndDispatch();
    }
  }, [title, type, points, editorState, dispatch, questionId, isNew]);

  const handleEditorChange = (state: any) => {
    setEditorState(state);
    updateQuestionsAndDispatch(); // Update on every editor state change
  };

  const handleTitleChange = (e: any) => setTitle(e.target.value);
  const handleTypeChange = (e: any) => setType(e.target.value);
  const handlePointsChange = (e: any) => setPoints(Number(e.target.value));

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px', maxWidth: '600px', border: '1px solid #ccc', marginTop: '5px' }}>
        <div style={{ marginRight: '20px' }}>
          <label>Title: </label>
          <input
            type="text"
            value={title}
            onChange={handleTitleChange}
            className="form-control"
            placeholder="Enter title" />
        </div>
        <div style={{ marginRight: '20px' }}>
          <label>Question Type: </label>
          <select
            value={type}
            onChange={handleTypeChange}
            className="form-select">
            <option>Multiple Choice</option>
            <option>True/False</option>
            <option>Fill in Blanks</option>
          </select>
        </div>
        <div style={{ marginRight: '20px' }}>
          <label>Points: </label>
          <input
            type="number"
            value={points}
            onChange={handlePointsChange}
            className="form-control" />
        </div>
      </div><br />

      <div className="form-group">
        <label>Enter your question:</label>
        <Editor
          editorState={editorState}
          wrapperClassName="demo-wrapper"
          editorClassName="demo-editor"
          onEditorStateChange={handleEditorChange}
          wrapperStyle={{ padding: '5px' }}
          editorStyle={{ minHeight: '200px', padding: '10px', border: '1px solid #ccc' }}
          toolbarStyle={{ backgroundColor: 'white', border: '1px solid #ccc' }}
        />
      </div><br />
    </div >
  );
}