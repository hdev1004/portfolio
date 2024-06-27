import React from 'react';
import ReactMarkdown from 'react-markdown';

const ProjectDetail = () => {
const markdown = `
# Hello, World!

**굵게**
일반 텍스트
\`\`\`javascript
const App = () => {
    console.log("Test");  
}
\`\`\`

*기울이기*
> 인용문
`;
    return (
        <div>
            <ReactMarkdown>{markdown}</ReactMarkdown>
        </div>
    );
};

export default ProjectDetail;
