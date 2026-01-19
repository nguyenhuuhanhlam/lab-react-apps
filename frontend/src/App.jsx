import { ConfigProvider, theme } from 'antd'
import BasicLayout from './layouts/basic-layout'
import './index.css'

export default function App() {
  return (
    <ConfigProvider theme={{
      algorithm: theme.darkAlgorithm
    }}>
      <BasicLayout />
    </ConfigProvider>
  )
}
