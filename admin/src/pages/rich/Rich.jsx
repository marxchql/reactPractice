import React, {useState} from 'react';
import {Card, Space, Button} from 'antd';

import { Editor } from 'react-draft-wysiwyg';
import { EditorState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const Rich = () => {

  const [data, setData] = useState({
    editorState: EditorState.createEmpty(),
    contentState: {}
  })

  const onEditorStateChange = (editorState) => {
    setData({
      ...data,
      editorState,
    });
  };

  const onContentStateChange = (contentState) => {
    setData({
      ...data,
      contentState,
    });
  };

  const handleClick = () => {
    console.log(draftToHtml(data.contentState))
  }



  return (
    <Space direction="vertical" style={{width: '100%'}}>
      <Card title="富文本编辑器">
        <Button onClick={handleClick}>导出内容</Button>
        <Editor
          editorState={data.editorState}
          toolbarClassName="toolbarClassName"
          wrapperClassName="wrapperClassName"
          editorClassName="editorClassName"
          onEditorStateChange={onEditorStateChange}
          onContentStateChange={onContentStateChange}
        />
      </Card>
    </Space>
  );
}

export default Rich;