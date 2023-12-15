import Link from 'next/link';
import {
  Pane,
  Table,
  TableCell,
  TableBody,
  TableHead,
  TableRow,
  TextTableCell,
  TextTableHeaderCell,
} from '@/evergreen-ui';

import { getMonthlyStats } from '@/app/lib/getMonthlyStats';

export const dynamic = 'force-dynamic';

export default async function StatsPage() {
  const { data } = await getMonthlyStats();

  const tableColumns = [
    { key: 'month', name: 'Month' },
    { key: 'distance', name: 'Distance (meters)' },
    { key: 'time', name: 'Time (seconds)' },
    { key: 'elevation_gain', name: 'Elevation gain' },
  ];

  return (
    <div>
      <section>
        <h1 className={'text-2xl my-5'}>Monthly stats</h1>
        <Pane marginY={20}>
          <Table>
            <TableHead height={50}>
              {tableColumns.map((heading) => (
                <TextTableHeaderCell key={heading.key}>
                  {heading.name}
                </TextTableHeaderCell>
              ))}
            </TableHead>
            <TableBody>
              {data?.map((month) => (
                <TableRow height={50} key={month.id}>
                  <TableCell fontSize={15}>
                    <Link
                      className={'underline'}
                      href={`/stats/${month.month_id}`}
                    >
                      {month?.month_name}
                    </Link>
                  </TableCell>
                  <TextTableCell textProps={{ size: 400 }}>
                    {new Intl.NumberFormat('en-US').format(
                      month?.total_distance
                    )}
                  </TextTableCell>
                  <TextTableCell textProps={{ size: 400 }}>
                    {new Intl.NumberFormat('en-US').format(month?.total_time)}
                  </TextTableCell>
                  <TextTableCell textProps={{ size: 400 }}>
                    {month?.total_elevation_gain}
                  </TextTableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Pane>
        <Link className={'underline'} href={'/'}>
          &#8592; Back to home
        </Link>
      </section>
    </div>
  );
}
