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

export default function StatsPage() {
  const monthly_stats = [
    {
      id: 123456789,
      month_id: 10,
      month_name: 'October',
      total_distance: 84329,
      total_time: 13222,
      total_elevation_gain: 112,
    },
    {
      id: 153753747,
      month_id: 11,
      month_name: 'November',
      total_distance: 80232,
      total_time: 10990,
      total_elevation_gain: 110,
    },
    {
      id: 5776210921,
      month_id: 12,
      month_name: 'December',
      total_distance: 87481,
      total_time: 15265,
      total_elevation_gain: 118,
    },
  ];

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
              {monthly_stats?.map((activity) => (
                <TableRow height={50} key={activity.id}>
                  <TableCell fontSize={15}>
                    <Link
                      className={'underline'}
                      href={`/stats/${activity.month_id}`}
                    >
                      {activity?.month_name}
                    </Link>
                  </TableCell>
                  <TextTableCell textProps={{ size: 400 }}>
                    {new Intl.NumberFormat('en-US').format(
                      activity?.total_distance
                    )}
                  </TextTableCell>
                  <TextTableCell textProps={{ size: 400 }}>
                    {new Intl.NumberFormat('en-US').format(
                      activity?.total_time
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
        <Link className={'underline'} href={'/'}>
          &#8592; Back to home
        </Link>
      </section>
    </div>
  );
}
