import { SmileFilled, CrownFilled, TabletFilled, CalendarOutlined } from '@ant-design/icons';
import Welcome from '../pages/Welcome';
import AdminSubPage from '../pages/Admin/SubPage';
import List from '../pages/List';
import TimelinePage from '../pages/Timeline';

export default {
	route: {
		path: '/',
		routes: [
			{
				path: '/welcome',
				name: 'Welcome',
				icon: <SmileFilled />,
				component: <Welcome />,
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
						component: <AdminSubPage />,
					},
				],
			},
			{
				path: '/list',
				name: 'List',
				icon: <TabletFilled />,
				component: <List />,
			},
			{
				path: '/timeline',
				name: 'Timeline',
				icon: <CalendarOutlined />,
				component: <TimelinePage />,
			},
		],
	},
	location: {
		pathname: '/',
	},
};
