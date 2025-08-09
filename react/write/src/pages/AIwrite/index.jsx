import { useEffect, useState } from 'react';
import { Button, Input, Loading, Toast } from 'react-vant';
import { ChatO, UserO } from '@react-vant/icons';
import { write } from '@/llm';
import styles from './aiwrite.module.css';

const AIWriter = () => {
    const [text, setText] = useState('');
    const [isSending, setIsSending] = useState(false);
    const [messages, setMessages] = useState([
        {
            id: 1,
            content: 'Hello, 我是你的智能写作小助手，有什么我可以帮你的吗？',
            role: 'assistant',
        },
    ]);
    // 添加登录状态，默认未登录
    const [isLoggedIn, setIsLoggedIn] = useState(false); 

    const handleWrite = async () => {
        const inputText = text.trim();
        if (!inputText) {
            Toast.info('请输入内容哦~');
            return;
        }

        setIsSending(true);
        setText('');

        // 添加用户消息
        setMessages((prev) => [
            ...prev,
            {
                role: 'user',
                content: inputText,
            },
        ]);

        try {
            const response = await write([
                {
                    role: 'user',
                    content: inputText,
                },
            ]);

            // 假设返回格式为 { data: { role, content } }
            setMessages((prev) => [...prev, response.data]);
        } catch (err) {
            Toast.fail('发送失败，请稍后重试');
        } finally {
            setIsSending(false);
        }
    };

    return (
        <div className={styles.chatContainer}>
            {/* 聊天区域 */}
            <div className={styles.chatArea}>
                {messages.map((msg, index) => (
                    <div key={index} className={`${styles.message} ${msg.role === 'user' ? styles.messageRight : styles.messageLeft}`}>
                        {msg.role === 'assistant' && (
                            <div className={styles.icon}>
                                <ChatO fontSize={18} />
                            </div>
                        )}
                        <div className={styles.messageContent}>{msg.content}</div>
                        {msg.role === 'user' && (
                            <div className={styles.icon}>
                                <UserO fontSize={18} />
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* 输入区域 */}
            <div className={styles.inputArea}>
              {localStorage.getItem('token')!=='1'? (
                <Input
                    value={text}
                    onChange={setText}
                    placeholder="输入消息..."
                    className={styles.input}
                    type="textarea"
                    rows={1}
                    autoSize={{ minRows: 1, maxRows: 4 }}
                    onKeyPress={(e) => {
                        if (e.key === 'Enter' && !e.shiftKey) {
                            e.preventDefault();
                            handleWrite();
                        }
                    }}
                />
                  ):(
                    <button className={styles.loginBtn}>登录</button> 
                  )}
                <Button
                    type="primary"
                    className={styles.sendBtn}
                    // 未登录时禁用发送按钮
                    disabled={isSending || !text.trim() || !isLoggedIn} 
                    onClick={handleWrite}
                >
                    {isSending ? '发送中...' : '发送'}
                </Button>
            </div>

            {/* 加载中提示 */}
            {isSending && (
                <div className={styles.flexdloading}>
                    <Loading type="spinner" color="white" />
                    <span>AI 正在思考中...</span>
                </div>
            )}
        </div>
    );
};

export default AIWriter;