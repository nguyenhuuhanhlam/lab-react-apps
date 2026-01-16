import { ProLayout } from '@ant-design/pro-components';
import { Button, Result } from 'antd';
import { Route, Routes, Link, useLocation, useNavigate } from 'react-router-dom';
import routeConfig from '../routes';

// Helper to flat routes for <Routes>
const getRoutes = (routes) => {
	let flatRoutes = [];
	routes.forEach(item => {
		if (item.routes) {
			flatRoutes = [...flatRoutes, ...getRoutes(item.routes)];
		}
		if (item.component) {
			flatRoutes.push(item);
		}
	});
	return flatRoutes;
};

const BasicLayout = () => {
	const location = useLocation();
	const navigate = useNavigate();

	const flatRoutes = getRoutes(routeConfig.route.routes);

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
				route={routeConfig.route}
			>
				<Routes>
					<Route path="/" element={<Result status="404" title="Home" subTitle="Welcome to the app" extra={<Link to="/welcome"><Button type="primary">Go to Welcome</Button></Link>} />} />
					{flatRoutes.map(item => (
						<Route key={item.path} path={item.path} element={item.component} />
					))}
					<Route path="*" element={<Result status="404" title="404" subTitle="Sorry, the page you visited does not exist." extra={<Button type="primary" onClick={() => navigate('/')}>Back Home</Button>} />} />
				</Routes>
			</ProLayout>
		</div>
	);
};

export default BasicLayout;
