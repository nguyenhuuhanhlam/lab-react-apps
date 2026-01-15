import { ProLayout } from '@ant-design/pro-components';
import { Button, Result } from 'antd';
import { SmileFilled, CrownFilled, TabletFilled } from '@ant-design/icons';
import { Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';

const defaultProps = {
  route: {
    path: '/',
    routes: [
      {
        path: '/welcome',
        name: 'Welcome',
        icon: <SmileFilled />,
      },
      {
        path: '/admin',
        name: 'Admin',
        icon: <CrownFilled />,
        routes: [
          {
            path: '/admin/sub-page',
            name: 'Sub-Page',
            icon: <CrownFilled />,
          },
        ],
      },
      {
        path: '/list',
        name: 'List',
        icon: <TabletFilled />,
      },
    ],
  },
  location: {
    pathname: '/',
  },
};

export default function App() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div
      id="test-pro-layout"
      style={{
        height: '100vh',
      }}
    >
      <ProLayout
        title="Ant Design Pro"
        location={{
          pathname: location.pathname,
        }}
        menuItemRender={(item, dom) => (
          <Link to={item.path || '/'}>{dom}</Link>
        )}
        route={defaultProps.route}
      >
        <Routes>
          <Route path="/" element={<Result status="404" title="Home" subTitle="Welcome to the app" extra={<Link to="/welcome"><Button type="primary">Go to Welcome</Button></Link>} />} />
          <Route path="/welcome" element={<div style={{ padding: 24, textAlign: 'center' }}><h2>Welcome Page</h2></div>} />
          <Route path="/admin/sub-page" element={<div style={{ padding: 24, textAlign: 'center' }}><h2>Admin Sub Page</h2></div>} />
          <Route path="/list" element={<div style={{ padding: 24, textAlign: 'center' }}><h2>List Page</h2></div>} />
          <Route path="*" element={<Result status="404" title="404" subTitle="Sorry, the page you visited does not exist." extra={<Button type="primary" onClick={() => navigate('/')}>Back Home</Button>} />} />
        </Routes>
      </ProLayout>
    </div>
  );
};
