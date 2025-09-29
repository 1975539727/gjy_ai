import {
  embed,
  streamText
} from 'ai';
import {
  createOpenAI
} from '@ai-sdk/openai';
import {
  createClient
} from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL??"",
  process.env.SUPABASE_KEY??""
);

const openai = createOpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  baseURL: process.env.OPENAI_API_BASE_URL,
})

async function generateEmbedding(message: string) {
  return embed({
    model: openai.embedding('text-embedding-3-small'),
    value: message
  })
}

async function fetchRelevantContext(embedding: number[]) {
  const {
    data, 
    error
  } = await supabase.rpc("get_relevant_chunks", {
    query_vector: embedding,
    match_threshold: 0.7,
    match_count: 3
  })

  if (error) throw error;

  return JSON.stringify(
    data.map((item:any) => `
      Source: ${item.url},
      Date Updated: ${item.date_updated}
      Content: ${item.content}  
    `)
  ) 
}

const createPrompt = (context: string, userQuestion: string) => {
  return {
    role: "system",
    content: `
    你是TravelGPT，一个专业的旅游智能助手。你的专长是回答所有与旅游相关的问题，包括但不限于：

      **旅游相关领域：**
      - 旅游目的地推荐（国内外城市、景点、自然风光、文化遗产等）
      - 旅行规划建议（行程安排、交通方式、最佳旅行时间）
      - 酒店住宿信息（星级酒店、民宿、青旅、度假村等）
      - 机票、火车票、景区门票预订与价格信息
      - 当地美食与特色餐饮推荐
      - 签证政策、出入境规定、旅行保险
      - 背包客、家庭游、蜜月游、银发游等主题旅行
      - 户外探险（徒步、露营、潜水、滑雪等）
      - 旅游安全提示、应急处理、健康防疫
      - 文化习俗、语言沟通、旅行礼仪
      - 旅游装备推荐、行李打包建议
      - 可持续旅游、生态旅游、小众路线

      **回答规则：**
      1. 优先使用提供的上下文信息回答问题
      2. 如果上下文信息不足，基于你的知识补充回答，并注明“根据截至2024年的信息”或类似提示，说明可能不是最新情况
      3. 对于旅游相关的模糊问题（如“2024去哪玩”、“巴黎有什么好吃的”），要积极理解用户意图并提供有用信息
      4. 对于明显与旅游无关的问题（如做饭、数学计算、编程等），礼貌地引导用户询问旅游相关问题，例如：“我是TravelGPT，专注于为您提供旅游相关的帮助。如果您有关于旅行的问题，我很乐意为您解答！”
      5. 回答必须使用中文
      6. 使用markdown格式，包含相关链接（如官方旅游局网站、可靠旅游平台）和信息更新日期

      **上下文信息：**
      ----------------
      START CONTEXT
      ${context}
      END CONTEXT
      ----------------

      **用户问题：** ${userQuestion}

      请基于以上信息和规则，为用户提供专业、准确、有用的旅游相关回答。如果问题与旅游相关但表述不够清晰，请主动询问更多细节以提供更好的帮助。
    `
  }
}


export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    const latestMessage = messages.at(-1).content;
    // embedding
    const { embedding } = await generateEmbedding(latestMessage);
    // console.log(embedding);
    // 相似度计算
    const context = await fetchRelevantContext(embedding);
    const prompt = createPrompt(context, latestMessage);
    // console.log(prompt);
    const result = streamText({
      model: openai("gpt-4o-mini"),
      messages: [prompt, ...messages]
    });
    return result.toDataStreamResponse();
  } catch(err) {
    throw err
  }
}