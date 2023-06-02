import { Table, Tag, Space, Button, Modal, Form, Input, Popconfirm } from 'antd'
import './Article.less'
import { ColumnsType } from 'antd/es/table'
import { FC, useEffect, useState } from 'react'
import { apiDeleteArticleItem, apiGetArticleList, apiUpdateArticleItem } from './http'

interface ArticleInterface {
  name: string
  content: string
  _id: string
  createTime?: string
  updateTime?: string
}

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8 },
}

let did = 0
const did1 = 0
// 数据

const EditModal: FC<{
  articleItem: ArticleInterface | null
  openModal: boolean
  changeStateClick: (state?: boolean) => void
}> = ({ openModal, changeStateClick, articleItem }) => {
  // const [article]
  const [title, setTitle] = useState(articleItem?.name)
  const [content, setCOntent] = useState(articleItem?.content)
  const [confirmLoading, setConfirmLoading] = useState(false)

  useEffect(() => {
    if (articleItem) {
      setTitle(articleItem?.name)
      setCOntent(articleItem?.content)
    }
  }, [articleItem])
  console.log('更新', did++)
  const checkEmpty = () => {
    if (!title || !content) return true
  }
  const comfirmClick = async () => {
    if (checkEmpty()) return
    setConfirmLoading(true)
    await apiUpdateArticleItem({
      id: articleItem?._id,
      name: title,
      content,
    })
    setConfirmLoading(false)
    changeStateClick(true)
  }
  return (
    <Modal
      title="内容编辑"
      open={openModal}
      onCancel={() => changeStateClick()}
      onOk={comfirmClick}
      confirmLoading={confirmLoading}
    >
      {openModal && articleItem ? (
        <Form {...layout}>
          <Form.Item label="标题">
            <Input value={title} onChange={e => setTitle(e.target.value)} />
          </Form.Item>
        </Form>
      ) : (
        ''
      )}
    </Modal>
  )
}

const Article = () => {
  //  custom 渲染
  const columns: ColumnsType<ArticleInterface> = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: text => <a>{text}</a>,
    },
    {
      title: 'createTime',
      dataIndex: 'createTime',
      key: 'createTime',
    },
    {
      title: 'updateTime',
      dataIndex: 'updateTime',
      key: 'updateTime',
    },

    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Button type="link" children="Edit" onClick={() => editClick(record)} />
          <Popconfirm
            title="此操作会删除该内容"
            description="是否删除此选项"
            okText="确认"
            cancelText="取消"
            onConfirm={() => deleteArticle(record._id)}
          >
            <Button type="text" children="Delete" size="small" danger />
          </Popconfirm>
        </Space>
      ),
    },
  ]
  const currentSize = 5
  const [list, setList] = useState([])
  const [total, setTotal] = useState(0)
  const [page, setPage] = useState(1)
  const [selectArticle, setArticle] = useState<ArticleInterface | null>(null)
  const [loading, setLoadingState] = useState(false)
  const [showModal, setModalState] = useState(false)
  const pageChange = (page: number, pageSize: number) => {
    setLoadingState(true)
    getArticleList({
      page,
      total: currentSize,
    })
  }

  const getArticleList = (query: { page: number; total: number }) => {
    apiGetArticleList(query).then(res => {
      setPage(query.page)
      setList(res.data.result)
      if (total !== res.data.total) {
        setTotal(res.data.total)
      }
      setLoadingState(false)
    })
  }

  const editClick = (item: ArticleInterface) => {
    setArticle(item)
    setModalState(true)
  }

  const cancelClick = (state?: boolean) => {
    setArticle(null)
    setModalState(false)
    if (state) {
      getArticleList({
        page,
        total: currentSize,
      })
    }
  }

  const deleteArticle = async (id: string) => {
    apiDeleteArticleItem(id).then(() => {
      getArticleList({
        page,
        total: currentSize,
      })
    })
  }

  useEffect(() => {
    setLoadingState(true)
    getArticleList({
      page,
      total: currentSize,
    })
  }, [])
  console.log('执行', did++)
  return (
    <div className="Article container">
      <EditModal articleItem={selectArticle} openModal={showModal} changeStateClick={cancelClick} />
      <Button type="primary" children="Add" style={{ marginBottom: 16 }} />
      <Table
        bordered
        columns={columns}
        dataSource={list}
        pagination={{ pageSize: currentSize, total: total, onChange: pageChange }}
        loading={loading}
        rowKey={record => record._id || record.name}
      />
    </div>
  )
}

export default Article
