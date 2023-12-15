import Link from 'next/link';
import {
  Pane,
  Table,
  TableBody,
  TableHead,
  TableRow,
  TextTableCell,
  TextTableHeaderCell,
} from '@/evergreen-ui';

import { getActivitiesList } from '@/app/lib/getActivitiesList';

export const dynamic = 'force-dynamic';

export default async function MonthStatsPage({
  params: { month },
}: {
  params: { month: string };
}) {
  const { data } = await getActivitiesList();

  const tableColumns = [
    { key: 'name', name: 'Name' },
    { key: 'date', name: 'Date' },
    { key: 'distance', name: 'Distance (meters)' },
    { key: 'time', name: 'Time (seconds)' },
    { key: 'elevation_gain', name: 'Elevation gain' },
  ];

  return (
    <div>
      <section>
        <h1 className={'text-2xl my-5'}>Activities summary: {month}</h1>
        <Pane marginY={20}>
          <Table>
            <TableHead height={50}>
              {tableColumns.map((column) => (
                <TextTableHeaderCell key={column.key}>
                  {column.name}
                </TextTableHeaderCell>
              ))}
            </TableHead>
            <TableBody>
              {data?.map((activity) => (
                <TableRow height={50} key={activity.id}>
                  <TextTableCell textProps={{ size: 400 }}>
                    {activity?.name}
                  </TextTableCell>
                  <TextTableCell textProps={{ size: 400 }}>
                    {new Intl.DateTimeFormat('en-US').format(
                      new Date(activity?.start_date)
                    )}
                  </TextTableCell>
                  <TextTableCell textProps={{ size: 400 }}>
                    {new Intl.NumberFormat('en-US').format(activity?.distance)}
                  </TextTableCell>
                  <TextTableCell textProps={{ size: 400 }}>
                    {new Intl.NumberFormat('en-US').format(
                      activity?.moving_time
                    )}
                  </TextTableCell>
                  <TextTableCell textProps={{ size: 400 }}>
                    {activity?.total_elevation_gain}
                  </TextTableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Pane>
        <Link className={'underline'} href={'/stats'}>
          &#8592; Back to stats
        </Link>
      </section>
    </div>
  );
}
