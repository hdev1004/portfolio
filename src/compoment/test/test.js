
import ReactMarkdown from 'react-markdown';
const Test = () => {
    
    const markdownText = `
    # 안녕하세요!
    저는 현재 리액트에서 \`react-markdown\`를 이용하여 **마크다운**을 랜더링하고 있습니다.
    `;
    return (
        <div>
            <ReactMarkdown >
                {markdownText}
            </ReactMarkdown >
        </div>
    )
}

export default Test;