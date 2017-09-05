/**
 * 消息 模型
 */
export class Message {
  public type: string;
  public action: string;// todo 这个字段似乎前后端都没用到 , 要去掉吗
  public user: string;
  public text: string;
  public timestamp: string;
}
