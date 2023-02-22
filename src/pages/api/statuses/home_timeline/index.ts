// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Tweet = {
	username: string;
	avatar: string;
	text: string;
	comments: number;
	favs: number;
	retweets: number;
};

type Data = {
	tweets: Tweet[];
};

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	res.status(200).json({
		tweets: [
			{
				username: 'Random person',
				avatar: 'https://i.pravatar.cc/250',
				text: 'Should transitory pressures occur in money markets over the course of the year, the manager pro tem noted that the standing repurchase agreement (repo) facility and discount window would be available to help support effective monetary policy implementation.',
				comments: 1,
				favs: 2,
				retweets: 3,
			},
		],
	});
}
