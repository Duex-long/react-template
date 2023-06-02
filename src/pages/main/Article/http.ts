import { fetchDetele, fetchGet, fetchPost } from '@/utils/fetch'

const apiGetArticleList = async (query: {
  page: number
  total: number
}): Promise<{ data: any }> => {
  const result = await fetchGet('/article/getArticleList', query)
  return await result.json()
}

const apiDeleteArticleItem = async (id: string): Promise<{ data: any }> => {
  const result = await fetchDetele(`/article/deleteArticle${id}`)
  return await result.json()
}

const apiUpdateArticleItem = async <T extends { [x: string]: any }>(article: T) => {
  const result = await fetchPost(`/article/updateArticle`, article)
  return await result.json()
}

export { apiGetArticleList, apiDeleteArticleItem, apiUpdateArticleItem }
