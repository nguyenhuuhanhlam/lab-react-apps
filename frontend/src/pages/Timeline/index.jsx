import React from 'react';
import {
	Epg,
	Layout,
	useEpg,
	ProgramBox,
	ProgramContent,
	ChannelBox,
} from 'planby';

import logo from '../../assets/react.svg';

const channels = [
	{
		uuid: 'room-1',
		title: 'Room 1',
	},
	{
		uuid: 'room-2',
		title: 'Room 2',
	},
];

const epg = [
	{
		uuid: 'meeting-1',
		channelUuid: 'room-1',
		title: 'Planning meeting',
		description: 'Sprint planning',
		since: '2026-01-16T08:00:00',
		till: '2026-01-16T09:30:00',
	},
	{
		uuid: 'meeting-2',
		channelUuid: 'room-2',
		title: 'Demo',
		since: '2026-01-16T10:00:00',
		till: '2026-01-16T11:00:00',
	},
];

const TimelinePage = () => {
	const hourWidth = 80;          // chỉnh 60 / 80 / 100 tuỳ thích
	const dayWidth = 24 * hourWidth;

	const { getEpgProps, getLayoutProps } = useEpg({
		channels,
		epg,
		startDate: '2026-01-16T06:00:00',
		endDate: '2026-01-16T18:00:00',
		isBaseTimeFormat: true,
		dayWidth,
		width: 1200,
	});

	return (
		<div className="w-full min-w-0 h-[650px] overflow-hidden">
			<h2 className="m-0 p-2">Timeline Demo</h2>

			<div className="relative w-full min-w-0 h-[600px] overflow-hidden">
				<Epg {...getEpgProps()}>
					<Layout {...getLayoutProps()}

					/>
				</Epg>
			</div>

		</div>
	)
}

export default TimelinePage


