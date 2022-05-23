
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

export function OutputCode({ parsed }) {


    return (
        <section>
            <h2
            >
                处理后的代码：
            </h2>
            <SyntaxHighlighter
                language='html'
                children={parsed}
            />
        </section>
    )
}