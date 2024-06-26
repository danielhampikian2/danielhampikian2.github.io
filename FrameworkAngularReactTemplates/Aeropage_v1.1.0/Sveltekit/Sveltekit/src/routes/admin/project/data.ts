import type { ProjectType, UserType } from '$lib/types/admin';
import { avatar1, avatar2, avatar3, avatar4, avatar5, avatar6, avatar7, avatar8, avatar9 } from '$lib/utilities/images';

const categories: string[] = ['Web Design', 'Android']

const assigneeData: UserType[] = [
	{
		image: avatar1,
	},
	{
		image: avatar2,
	},
	{
		image: avatar3,
	},
	{
		image: avatar4,
	},
	{
		image: avatar5,
	},
	{
		image: avatar6,
	},
	{
		image: avatar7,
	},
	{
		image: avatar8,
	},
	{
		image: avatar9,
	},
]

export const projectData: ProjectType[] = [
	{
		category: categories[0],
		status: 'completed',
		name: 'Landing page Design',
		about: 'If several languages coalesce, the grammar of the resulting language is more regular.',
		assignees: [assigneeData[1], assigneeData[2]],
		image: '2+',
		started: {
			date: 15,
			month: 'Dec',
		},
		tasks: 56,
		comments: 224,
		progress: 66,
	},
	{
		category: categories[1],
		status: 'pending',
		name: 'App Design and Develop',
		about: 'To achieve this, it would be necessary to have uniform grammar and more common words.',
		assignees: [assigneeData[3], assigneeData[4], assigneeData[5], assigneeData[6]],
		image: '4+',
		started: {
			date: 28,
			month: 'Nov',
		},
		tasks: 62,
		comments: 196,
		progress: 33,
	},
	{
		category: categories[0],
		status: 'frontend completed',
		name: 'New Admin Design',
		about: 'If several languages coalesce, the grammar of the resulting language is more regular.',
		assignees: [assigneeData[8], assigneeData[7], assigneeData[0]],
		image: '3+',
		started: {
			date: 19,
			month: 'Nov',
		},
		tasks: 69,
		comments: 102,
		progress: 50,
	},
	{
		category: categories[1],
		status: 'pending',
		name: 'Custom Software Development',
		about: 'Their separate existence is a myth. For science, music, sport, etc uses the vocabulary.',
		assignees: [assigneeData[1], assigneeData[7], assigneeData[8]],
		started: {
			date: 2,
			month: 'Nov',
		},
		tasks: 72,
		comments: 184,
		progress: 25,
	},
	{
		category: categories[0],
		status: 'in progress',
		name: 'Brand logo design',
		about: 'Everyone realizes why a new common language refuse to pay expensive translators.',
		assignees: [assigneeData[5]],
		started: {
			date: 19,
			month: 'Nov',
		},
		tasks: 69,
		comments: 102,
		progress: 75,
	},
	{
		category: categories[0],
		status: 'completed',
		name: 'Website Redesign',
		about: 'The languages only differ in their grammar pronunciation and their most common words.',
		assignees: [assigneeData[2], assigneeData[8]],
		started: {
			date: 19,
			month: 'Nov',
		},
		tasks: 69,
		comments: 102,
		progress: 50,
	},
]