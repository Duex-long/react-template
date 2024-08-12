type data = any
interface ClientInterface {
  method(data: data): data // 这个data对于Service端来说不识别
}
interface ServiceInterface {
  serviceMethod(data: data): data
}

// 适配器需要实现 客户端接口 改写客户端的method
interface AdptorInterface extends ClientInterface {
  adaptee: ServiceInterface // 需要有服务端实例
}
