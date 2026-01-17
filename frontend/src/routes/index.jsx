import { SmileFilled, CrownFilled, TabletFilled, CalendarOutlined } from '@ant-design/icons'
import Welcome from '../pages/welcome'
import AdminSubPage from '../pages/Admin/SubPage'
import List from '../pages/List'
import TimelinePage from '../pages/Timeline'

import { IconHomeFilled, IconSettings, IconCalendar, IconFlask } from '@tabler/icons-react'

export default {
	route: {
		path: '/',
		routes: [
			{
				path: '/welcome',
				name: 'Welcome',
				icon: <IconHomeFilled size={16} />,
				component: <Welcome />,
			},
			{
				path: '/list',
				name: 'List',
				icon: <IconFlask size={16} />,
				component: <List />,
			},
			{
				path: '/schedules',
				name: 'Schedules',
				icon: <IconCalendar size={16} />,
				component: <TimelinePage />,
			},
			{
				path: '/admin',
				name: 'Admin',
				icon: <IconSettings size={16} />,
				routes: [
					{
						path: '/admin/sub-page',
						name: 'Sub-Page',
						icon: <CrownFilled />,
						component: <AdminSubPage />,
					},
				],
			},
		],
	},
	location: {
		pathname: '/',
	},
}
