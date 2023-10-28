import { NextFunction, Request, Response } from "express";
import User from "../models/User.js";
import { configureOpenAI } from "../config/openai-config.js";
import { ChatCompletionRequestMessage, OpenAIApi } from "openai";

export const generateChatCompletion = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { message } = req.body;
  const user = await User.findById(res.locals.jwtData.id);
  if (!user)
    return res
      .status(401)
      .json({ message: "User not registered or token is broken!" });
  //grab chats of the user
  const chats = user.chats.map(({ role, content }) => ({
    role,
    content,
  })) as ChatCompletionRequestMessage[];
  chats.push({ content: message, role: "user" });
  user.chats.push({ content: message, role: "user" });
  //send chats with the new one to open AI API
  const config = configureOpenAI();
  const openai = new OpenAIApi(config);
  //get responce
  const chatResponce = await openai.createChatCompletion({
    model: "gpt-3.5-turbo-0613",
    messages: chats,
  });
  user.chats.push(chatResponce.data.choices[0].message);
  await user.save();
  return res.status(200).json({chats:user.chats})

};
