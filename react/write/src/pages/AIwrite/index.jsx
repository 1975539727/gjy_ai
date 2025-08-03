import {
    useEffect,
    useState
} from 'react';
import {
    Button,
    Input,
    Loading,
    Toast
} from 'react-vant'
import {
    ChatO,
    UserO
} from '@react-vant/icons'

import {
    write
} from '@/llm'
import styles from './aiwrite.module.css';
const AIwriter =()=>{
    const [text, setText] = useState("");
    const [isSending,setIsSending]= useState(false);
    // 数据静态界面
    // 静态界面
    const [messages,setMessages] =useState([
        {
           id:2,
           content:'hello~',
           role:'user'
        },
        {
            id:1,
            content:'hello, 我是你的助理~',
            role:'assistant'
        },
       
    ]);
    const handleWrite = async () => {
        if(text.trim()==="") {
            Toast.info({
                message:"内容不能为空"
            })
            return ;
        }
        setIsSending(true);
        setText("")
        setMessages((prev) =>{
            return [
                ...prev,
                {
                    role:'user',
                    content:text
                }
            ]
        })

        const newMessage =await write([
            {
                role:'user',
                content:text
            }
        ])
        setMessages((prev)=>{
            return [
                ...prev,
                newMessage.data
            ]
        })
        setIsSending(false)
    }
    return(
    <>
        <div className="flex flex-col h-all">
            <div className={`flex-1 ${styles.chatArea}`}>
                 {
                    messages.map((msg,index)=>(
                        <div 
                            key={index}
                            className={
                                msg.role === 'user'?
                                styles.messageRight:styles.messageLeft
                            }
                        >
                            {
                                msg.role === 'assistant'?
                                <ChatO /> :<UserO />
                            }
                            {
                                msg.content
                            }
                        </div>
                    ))
                 }
            </div>
            
        
        </div>
        <div className={`flex ${styles.inputArea}`}>
            <Input
                value={text}
                onChange={(e) => setText(e)}
                placeholder="请输入消息"
                className={`flex-1 ${styles.input}`}
                type="textarea"
                rows={4}  // 设置默认显示行数
                autoSize={{ minRows: 1, maxRows: 5 }}  // 自动调整大小
            />
            <Button 
            disabled={isSending}   
            type="primary" 
            onClick={handleWrite} 
            style={{ borderRadius: '10px' }}>
                发送
            </Button>
       </div>
       {isSending && <div className={styles['flexd-loading']}><Loading type="ball"/></div>}
    </>
    )
    
}
export default AIwriter;